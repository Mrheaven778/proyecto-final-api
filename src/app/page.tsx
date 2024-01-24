import Header from "@/components/Header";
import Image from "next/image";

export const metadata = {
  title: "Api Lol",
  description: "Created by Sergio Abrodes with Next.js and TypeScript",
};

export default function Home() {
  return (
    <main className=" min-h-screen flex items-center justify-center m-2">
      <Header />
    </main>
  );
}
