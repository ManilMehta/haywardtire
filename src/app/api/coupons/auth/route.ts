import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = "hayward2024";

export async function POST(req: NextRequest) {
  const password = req.headers.get("x-admin-password");

  if (password === ADMIN_PASSWORD) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
