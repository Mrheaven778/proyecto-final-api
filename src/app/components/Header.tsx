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
          <li className="flex items-center flex-wrap justify-center gap-3">
            <p className="">Sacar todos los campeones </p>
            <samp className="font-bold bg-slate-900 px-2 py-1 rounded-lg text-white">
              GET
            </samp>
            <Button className="p-1" variant="link">
              <Link href="/api/champion">
                https://test-waob.vercel.app/api/champion
              </Link>
            </Button>
          </li>
          <li className="flex items-center flex-wrap justify-center gap-3">
            <p>Crear campeón </p>
            <samp className="font-bold bg-slate-900 px-2 py-1 rounded-lg text-white">
              POST
            </samp>
            <Button className="p-1" variant="link">
              https://test-waob.vercel.app/api/champion
            </Button>
          </li>
          <li className="flex items-center flex-wrap justify-center gap-3">
            <p>Ejecutar Seed </p>
            <samp className="font-bold bg-slate-900 px-2 py-1 rounded-lg text-white">
              GET
            </samp>
            <Button className="p-1" variant="link">
              <Link href="/api/seed">https://test-waob.vercel.app/api/seed</Link>
            </Button>
          </li>
        </ul>
      </CardContent>

      <CardFooter className="mt-6 flex items-center justify-center flex-col">
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
