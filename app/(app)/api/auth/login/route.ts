import { NextResponse } from "next/server";

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
    const response = isJson
      ? NextResponse.json({ success: true })
      : NextResponse.redirect(new URL("/dashboard", req.url), 303);

    response.cookies.set({
      name: "session",
      value: "authenticated",
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  if (!isJson) {
    return NextResponse.redirect(new URL("/login", req.url), 303);
  }

  return NextResponse.json(
    { success: false },
    { status: 401 }
  );
}
