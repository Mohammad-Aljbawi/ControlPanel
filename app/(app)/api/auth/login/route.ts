import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  const isJson = contentType.includes("application/json");

  const credentials = isJson
    ? await req.json()
    : Object.fromEntries(await req.formData());

  const username = String(credentials.username ?? "");
  const password = String(credentials.password ?? "");

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { user: username },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("TOKEN:", token);

    const response = isJson
      ? NextResponse.json({ success: true })
      : NextResponse.redirect(new URL("/dashboard", req.url), 303);

    response.cookies.set({
      name: "session",
      value: token,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    

    return response;
  }

  if (!isJson) {
    return NextResponse.redirect(
      new URL("/login", req.url),
      303
    );
  }

  return NextResponse.json(
    { success: false },
    { status: 401 }
  );
  
}