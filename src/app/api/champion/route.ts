import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const champions = await prisma.champion.findMany();
  return NextResponse.json(champions);
}

const postSchema = yup.object({
  name: yup.string().required(),
  role: yup.string().required(),
  lane: yup.string().required(),
  attackType: yup.string().required(),
  difficulty: yup.number().required(),
  releaseYear: yup.number().required(),
  lore: yup.string().required(),
});

// Crear un nuevo campeón
// export async function POST(request: Request) {
//   try {
//     const { attackType, difficulty, lane, lore, name, releaseYear, role } =
//       await postSchema.validate(await request.json());
//     const champion = await prisma.champion.create({
//       data: { attackType, difficulty, lane, lore, name, releaseYear, role },
//     });
//     return NextResponse.json(champion);
//   } catch (error) {
//     return NextResponse.json({ error: error }, { status: 400 });
//   }
// }

// Crear campeones 
export async function POST(request: Request) {
  try {
    const champions = await request.json();
    await prisma.champion.deleteMany();
    const champion = await prisma.champion.createMany({
      data: champions,
    });
    return NextResponse.json("Campeones creados correctamente");
  } catch (error) {
     return NextResponse.json({ error: error }, { status: 400 });
  }
}
