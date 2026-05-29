import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);
    const pathname = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
    const resolvedPath = normalize(join(rootDir, pathname));

    if (!resolvedPath.startsWith(rootDir)) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    let filePath = resolvedPath;
    let fileStats;

    if (existsSync(filePath)) {
      fileStats = await stat(filePath);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    if (fileStats.isDirectory()) {
      filePath = join(filePath, "index.html");

      if (!existsSync(filePath)) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }
    }

    const extension = extname(filePath);
    response.writeHead(200, {
      "Cache-Control": "no-cache",
      "Content-Type": mimeTypes[extension] || "application/octet-stream"
    });

    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Server error: ${error.message}`);
  }
});

server.listen(port, host, () => {
  console.log(`SPADA site running on http://${host}:${port}`);
});
