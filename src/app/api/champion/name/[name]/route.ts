import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    name: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const { name } = params;
  const champion = await prisma.champion.findFirst({
    where: {
      OR:[
        {
          name:name
        },
        {
          role:name
        },
        {
          lane:name
        }
      ] 
    },
  });

  if (!champion) {
    return NextResponse.json(
      { error: `No se ha encontrado el nombre: ${name}` },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(champion);
}
