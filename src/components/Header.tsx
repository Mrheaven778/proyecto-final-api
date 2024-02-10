"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Lemon } from "next/font/google";
import { cn } from "@/lib/utils";
import { FcSearch } from "react-icons/fc";
import { SiGithubsponsors } from "react-icons/si";
import Peticiones from "@/app/components/Peticiones";

const lemon = Lemon({
  subsets: ["latin"],
  weight: ["400"],
});

function Header() {
  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={cn(
            "text-3xl flex items-center justify-center flex-row gap-3",
            lemon.className
          )}
        >
          <h1>Api de Sergio Abrodes</h1>
          <FcSearch size={30} />
        </CardTitle>
        <CardDescription className="text-center text-gray-500 text-sm mt-2">
          <p>Esta API fue desarrollada en TypeScript</p>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="text-center mt-4">
          <Peticiones method="GET" description="Sacar todos los campeones" endpoint="https://proyecto-final-api-two.vercel.app/api/champion" />
          <Peticiones method="GET" description="Ejecutar Seed" endpoint="https://proyecto-final-api-two.vercel.app/api/seed" />
          <Peticiones method="GET" description="Ver campeon por id" endpoint="https://proyecto-final-api-two.vercel.app/api/champion/:id" />
          <Peticiones method="GET" description="Ver campeon por nombre" endpoint="https://proyecto-final-api-two.vercel.app/api/champion/name/:name" />
        </ul>
        <Peticiones method="POST" description="Crear campeón" endpoint="https://proyecto-final-api-two.vercel.app/api/champion" />
        <div className="flex flex-col justify-center items-center mt-8">
          <p className="text-lg text-gray-500">¿Qué espera el POST?</p>
          <pre className="text-sm text-violet-800 overflow-auto">
            {`
    {
      "name": "string",
      "role": "string",
      "lane": "string",
      "attackType": "string",
      "difficulty": "number",
      "releaseYear": "number",
      "lore": "string"
    }
    `}
          </pre>
        </div>

      </CardContent>

      <CardFooter className="mt-6  flex items-center justify-center flex-col">
        <Link
          href="https://mrheaven.vercel.app"
          className="flex-row justify-center  cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        >
          Si quieres ver más proyectos, visita mi portafolio
          <SiGithubsponsors />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Header;
