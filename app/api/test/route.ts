import { NextResponse } from "next/server";

export async function GET() {
  console.log("VAR_2 value:", process.env.VAR_2);
  return NextResponse.json({ ok: true });
}
