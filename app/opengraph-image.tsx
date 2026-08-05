import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${content.name} — ${content.role}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ededed",
          padding: "80px 90px",
        }}
      >
        <p style={{ fontFamily: "monospace", fontSize: 30, color: "#34d399", margin: 0 }}>
          {"$ echo $USER — " + content.role}
        </p>
        <h1 style={{ fontSize: 92, fontWeight: 600, letterSpacing: "-3px", margin: 0 }}>
          {content.name}
        </h1>
        <p style={{ fontSize: 30, color: "#a1a1aa", maxWidth: 850, margin: 0, lineHeight: 1.4 }}>
          {content.tagline}
        </p>
      </div>
    ),
    size,
  );
}