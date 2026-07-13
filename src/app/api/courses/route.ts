import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { requireAuth } from "@/lib/requireAuth";

// Create Course (Protected)
export async function POST(req: NextRequest) {
  try {
    // Login user check
    const session = await requireAuth();

    const body = await req.json();

    const db = client.db("course-hub");
    const collection = db.collection("courses");

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

// Get All Courses (Protected)
export async function GET() {
  try {
    // Login check
    await requireAuth();

    const db = client.db("course-hub");
    const collection = db.collection("courses");

    const courses = await collection.find().toArray();

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