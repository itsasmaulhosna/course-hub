import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json(
        { message: "No image found" },
        { status: 400 }
      );
    }

    const uploadForm = new FormData();

    uploadForm.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMAGE_API_KEY}`,
      {
        method: "POST",
        body: uploadForm,
      }
    );

    const result = await response.json();

    return NextResponse.json({
      success: true,
      imageUrl: result.data.url,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload Failed",
      },
      {
        status: 500,
      }
    );
  }
}