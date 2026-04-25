import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LET'S DAPA",
    short_name: "LET'S DAPA",
    description:
      "방사청 직원을 위한 모바일 원페이지 서비스 모음",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe6",
    theme_color: "#f4efe6",
    icons: [
      {
        src: "/app-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
