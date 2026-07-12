import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const db = client.db("course-hub");

    const course = await db
      .collection("courses")
      .findOne({
        _id: new ObjectId(id),
      });

    if (!course) {
      return NextResponse.json(
        {
          message: "Course not found",
        },
        {
          status: 404,
        }
      );
    }

    const relatedCourses = await db
      .collection("courses")
      .find({
        category: course.category,
        _id: {
          $ne: new ObjectId(id),
        },
      })
      .limit(4)
      .toArray();

    return NextResponse.json({
      course,
      relatedCourses,
    });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed",
      },
      {
        status: 500,
      }
    );

  }
}