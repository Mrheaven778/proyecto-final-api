import prisma from "../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const champions = await prisma.champion.findMany();
  return NextResponse.json({
    data: champions,
  });
}