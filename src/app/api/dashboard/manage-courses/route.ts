import { NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { requireAuth } from "@/lib/requireAuth";

export async function GET() {
  try {
    await requireAuth();

    const db = client.db("course-hub");
    const collection = db.collection("courses");

    const courses = await collection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(courses);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}