import { caseStudies, projects } from "@/lib/data";

export const runtime = "nodejs";

const allowedVideoIds = new Set([
  "1ynd-82zYh7ByMdTjDOdn-xC4LkkyaNil",
  ...projects.map((project) => project.driveId),
  ...caseStudies.flatMap((study) => ("videoDriveId" in study ? [study.videoDriveId] : [])),
]);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ driveId: string }> },
) {
  const { driveId } = await params;
  if (!allowedVideoIds.has(driveId)) {
    return new Response("Video not found", { status: 404 });
  }

  const range = request.headers.get("range");
  const headers = range ? { Range: range } : undefined;

  let upstream: Response;
  try {
    upstream = await fetch(
      `https://drive.google.com/uc?export=download&id=${encodeURIComponent(driveId)}`,
      { headers, signal: request.signal },
    );

    if (upstream.headers.get("content-type")?.includes("text/html")) {
      const warningPage = await upstream.text();
      const uuid = warningPage.match(/name="uuid"\s+value="([^"]+)"/)?.[1];
      if (!uuid) {
        return new Response("Video is not publicly accessible from Google Drive", { status: 403 });
      }

      const confirmedUrl = new URL("https://drive.usercontent.google.com/download");
      confirmedUrl.searchParams.set("id", driveId);
      confirmedUrl.searchParams.set("export", "download");
      confirmedUrl.searchParams.set("confirm", "t");
      confirmedUrl.searchParams.set("uuid", uuid);
      upstream = await fetch(confirmedUrl, { headers, signal: request.signal });
    }
  } catch (error) {
    console.error("Google Drive video request failed", error);
    return new Response("Unable to load video from Google Drive", { status: 502 });
  }

  if (!upstream.ok && upstream.status !== 206) {
    return new Response("Google Drive could not provide this video", { status: upstream.status });
  }

  const responseHeaders = new Headers();
  for (const name of ["accept-ranges", "content-length", "content-range", "content-type"]) {
    const value = upstream.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }
  responseHeaders.set("Cache-Control", "private, no-store");

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
