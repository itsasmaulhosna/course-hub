import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get("limit"));

    const db = client.db("course-hub");
    const collection = db.collection("courses");

    let query = collection.find().sort({ createdAt: -1 });

    if (limit) {
      query = query.limit(limit);
    }

    const courses = await query.toArray();

    return NextResponse.json(courses);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}