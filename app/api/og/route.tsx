import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div style={{ display: "flex", flexDirection: "column", padding: "12px", width: "100%", height: "100%", alignItems: "flex-start", color: "black", backgroundColor: "white" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            <p style={{ marginLeft: "8px", fontWeight: "bold", fontSize: "24px" }}>JollyBlog</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingTop: "10px", paddingBottom: "10px" }}>
            <div style={{ display: "flex", fontSize: "20px", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "tight" }}>
              BLOG POST
            </div>
            <div style={{ display: "flex", fontSize: "80px", fontWeight: "bold" }}>{heading}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontSize: "20px" }}>{siteConfig.url}</div>
            <div style={{ display: "flex", alignItems: "center", fontSize: "20px" }}>
              <div style={{ marginLeft: "8px" }}>{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
