import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const db = client.db("course-hub");

    const collection = db.collection("courses");

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.log(error);

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
// get all courses
export async function GET() {
  try {
    const db = client.db("course-hub");

    const collection = db.collection("courses");

    const courses = await collection.find().toArray();

    return NextResponse.json(courses);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}