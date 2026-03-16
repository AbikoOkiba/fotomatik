import { v2 as cloudinary } from "cloudinary"
import { NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  try {
    // Try asset_folder first (new Cloudinary accounts with dynamic folders)
    let resources: any[] = []

    try {
      const result = await (cloudinary.api as any).resources_by_asset_folder(
        "Fotomatik/Foto",
        { max_results: 100, fields: "secure_url,public_id,width,height,display_name" }
      )
      resources = result.resources
    } catch {
      // Fallback: prefix-based search (classic folder mode)
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "Fotomatik/Foto",
        max_results: 100,
        resource_type: "image",
      })
      resources = result.resources
    }

    // Sort by display_name or public_id for consistent ordering
    resources.sort((a, b) =>
      (a.display_name || a.public_id).localeCompare(b.display_name || b.public_id)
    )

    return NextResponse.json(resources)
  } catch (error) {
    console.error("Cloudinary gallery error:", error)
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 })
  }
}
