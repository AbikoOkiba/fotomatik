import { v2 as cloudinary } from "cloudinary"
import { NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  try {
    let resources: any[] = []

    try {
      const result = await (cloudinary.api as any).resources_by_asset_folder(
        "Fotomatik/Videa",
        { max_results: 20, fields: "secure_url,public_id,display_name" }
      )
      resources = result.resources
    } catch {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "Fotomatik/Videa",
        max_results: 20,
        resource_type: "video",
      })
      resources = result.resources
    }

    // Generate poster thumbnail and video URL for each
    const offsets = ["32", "47"]

    const videos = resources.map((r, i) => ({
      src: r.secure_url,
      poster: cloudinary.url(r.public_id, {
        resource_type: "video",
        format: "jpg",
        transformation: [{ width: 800, height: 450, crop: "fill", gravity: "center", quality: 80, start_offset: offsets[i] ?? "2" }],
      }),
      label: r.display_name || r.public_id.split("/").pop() || "Video",
    }))

    return NextResponse.json(videos)
  } catch (error) {
    console.error("Cloudinary videos error:", error)
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 })
  }
}
