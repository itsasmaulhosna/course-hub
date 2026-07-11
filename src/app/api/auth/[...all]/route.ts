import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

console.log("✅ route.ts loaded");

export const { GET, POST } = toNextJsHandler(auth);