import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const champion = await prisma.champion.findFirst({
    where: {
      id: id,
    },
  });
  if (!champion) {
    return NextResponse.json(
      { error: `No se ha encontrado la id: ${id}` },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(champion);
}
