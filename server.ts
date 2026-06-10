import express from "express";
import path from "path";
import dotenv from "dotenv";

// Load optional environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Health check API route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware integration for development
  if (process.env.NODE_ENV !== "production") {
    // Dynamic import to prevent bundler / production issues with devDependencies
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Development mode: Vite middleware mounted");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve production static assets compiled from vite build
    app.use(express.static(distPath));
    
    // Express 5 routing requires '*all' for fallback wildcard matching
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Production mode: Serving static assets from", distPath);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical error starting application server:", err);
  process.exit(1);
});
