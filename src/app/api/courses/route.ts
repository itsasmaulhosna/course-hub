import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { requireAuth } from "@/lib/requireAuth";

// Create Course
export async function POST(req: NextRequest) {
  try {
    const session = await requireAuth();

    const body = await req.json();

    const db = client.db("course-hub");
    const collection = db.collection("courses");

    console.log("Session User:", session.user);

console.log({
  ...body,
  createdBy: session.user.id,
  createdByEmail: session.user.email,
});

    const result = await collection.insertOne({
      ...body,
      createdBy: session.user.id,
      createdByEmail: session.user.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

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

// Protected GET
export async function GET(req: NextRequest) {
  try {
    await requireAuth();

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

    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

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