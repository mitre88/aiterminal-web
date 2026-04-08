import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Terminal — SSH Terminal for iPhone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,255,65,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Terminal window */}
          <div
            style={{
              background: "#111",
              border: "1px solid rgba(0,255,65,0.4)",
              borderRadius: 12,
              padding: "16px 24px",
              boxShadow: "0 0 40px rgba(0,255,65,0.2)",
              minWidth: 500,
            }}
          >
            {/* Chrome bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
              <span style={{ color: "#444", fontSize: 12, marginLeft: 8 }}>
                AI Terminal — macbook-pro.local
              </span>
            </div>
            <div style={{ color: "#00FF41", fontSize: 14, lineHeight: 1.6 }}>
              <div>
                <span style={{ color: "#00FF41" }}>user@mac:~$</span>{" "}
                <span style={{ color: "#E0E0E0" }}>ssh alex@192.168.1.10</span>
              </div>
              <div style={{ color: "#00CC33" }}>
                Welcome to macOS Sequoia
              </div>
              <div>
                <span style={{ color: "#00FF41" }}>alex@macbook:~$</span>{" "}
                <span style={{ color: "#E0E0E0" }}>ls ~/Projects</span>
              </div>
              <div style={{ color: "#00FF41" }}>
                AITerminal/    webapp/    scripts/
              </div>
              <div>
                <span style={{ color: "#00FF41" }}>alex@macbook:~$</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 16,
                    background: "#00FF41",
                    marginLeft: 4,
                    verticalAlign: "middle",
                  }}
                />
              </div>
            </div>
          </div>

          {/* App name */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span style={{ color: "#00FF41", fontSize: 56, fontWeight: 700, letterSpacing: "-2px" }}>
                AI
              </span>
              <span style={{ color: "#E0E0E0", fontSize: 56, fontWeight: 700, letterSpacing: "-2px" }}>
                Terminal
              </span>
            </div>
            <p style={{ color: "#888", fontSize: 22, margin: 0 }}>
              Your Mac. From your pocket.
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
