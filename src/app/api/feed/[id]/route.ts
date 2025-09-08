/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { fetchFeed } from "@/lib/fetchFeed";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await fetchFeed(params.id);
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
