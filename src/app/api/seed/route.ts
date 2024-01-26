import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {

  await prisma.champion.deleteMany();
  
  await prisma.champion.createMany({
    data: [
      {
        name: "Aatrox",
        role: "Luchador",
        lane: "Top",
        attackType: "Melee",
        difficulty: 4,
        releaseYear: 2013,
        lore: "Aatrox es un guerrero legendario, uno de solo cinco restantes de una raza antigua conocida como los Oscuros. Portador de una espada mágica legendaria conocida como Masamune, Aatrox es conocido por su fuerza y ​​su habilidad para cambiar el rumbo de la batalla, así como por su sed de sangre y su crueldad. Después de siglos de hibernación, Aatrox fue el primero de los Oscuros en despertar. Su mera aparición fue suficiente para aterrorizar a los guerreros más valientes y endurecidos de Runaterra, y su mera presencia en un campo de batalla puede volcar el rumbo de una guerra. Ahora, con la guerra de las facciones en pleno apogeo, Aatrox ha regresado para reclamar su lugar como el más fuerte y más mortífero de su raza, dispuesto a reducir a todos los que se interpongan en su camino a la nada.",
      },
      {
        name: "Ahri",
        role: "Asesina",
        lane: "Mid",
        attackType: "Rango",
        difficulty: 5,
        releaseYear: 2011,
        lore: "Ahri es una vastaya con forma de zorro que puede manipular la magia. Sus encantadores movimientos y sus esquivas tácticas desconciertan a sus rivales antes de aniquilarlos con una explosión de energía. Nació de la magia pura y unió su esencia a un antiguo pozo espiritual para conseguir una forma física. Ahora, acecha entre los poblados cercanos, buscando absorber la esencia vital de sus cautivos.",
      },
      {
        name: "Darius",
        role: "Luchador",
        lane: "Top",
        attackType: "Melee",
        difficulty: 2,
        releaseYear: 2012,
        lore: "Darius, el Hand of Noxus, es un guerrero orgulloso y temido por igual por aliados y enemigos. Provisto de una inmensa hacha y una moral inquebrantable, Darius se enfrenta a sus enemigos con fuerza bruta y despiadada, buscando la gloria de Noxus.",
      },
      {
        name: "Jinx",
        role: "Tiradora",
        lane: "Bot",
        attackType: "Rango",
        difficulty: 6,
        releaseYear: 2013,
        lore: "Jinx es una caótica y maníaca criminal con una obsesión por las explosiones y el caos. Armada con una gran variedad de armas improvisadas, Jinx deja un rastro de destrucción a su paso mientras se burla de la ley y disfruta cada momento del caos que crea.",
      },
      {
        name: "Orianna",
        role: "Mago",
        lane: "Mid",
        attackType: "Rango",
        difficulty: 7,
        releaseYear: 2011,
        lore: "Orianna, la Dama Mecánica, es una creación mecánica impulsada por la conciencia de una niña. Con su esfera flotante, Orianna manipula la magia para controlar el campo de batalla y proteger a la niña a la que está unida, mientras busca comprender su propia existencia.",
      },
      {
        name: "Lee Sin",
        role: "Luchador",
        lane: "Jungla",
        attackType: "Melee",
        difficulty: 6,
        releaseYear: 2011,
        lore: "Lee Sin, el Monje Ciego, es un maestro de las artes marciales que perdió la vista durante una misión. A pesar de su ceguera, Lee Sin canaliza su energía espiritual para enfrentarse a sus enemigos con destreza y fuerza incomparables.",
      },
      {
        name: "Seraphine",
        role: "Soporte",
        lane: "Bot",
        attackType: "Rango",
        difficulty: 3,
        releaseYear: 2020,
        lore: "Seraphine, la Estrella del Escenario, es una cantante y compositora que descubre su conexión con la magia del alma de Runaterra. Con su habilidad para sentir y amplificar las emociones, Seraphine busca unir a las personas a través de su música.",
      },
      {
        name: "Thresh",
        role: "Soporte",
        lane: "Bot",
        attackType: "Rango",
        difficulty: 7,
        releaseYear: 2013,
        lore: "Thresh, el Recolector de Almas, es un espíritu sádico que atrapa las almas de los vivos para torturarlas en su linterna. Thresh disfruta de la desesperación de sus presas mientras manipula las cadenas de la muerte para atraparlas en su oscuro destino.",
      },
      {
        name: "Yasuo",
        role: "Asesino",
        lane: "Mid",
        attackType: "Melee",
        difficulty: 10,
        releaseYear: 2013,
        lore: "Yasuo, el Imperdonable, es un guerrero errante con una habilidad excepcional para controlar el viento. A pesar de ser acusado injustamente de asesinar a su maestro, Yasuo busca la verdad mientras lucha contra la tormenta que lo persigue.",
      },
      {
        name: "Lux",
        role: "Mago",
        lane: "Mid",
        attackType: "Rango",
        difficulty: 5,
        releaseYear: 2010,
        lore: "Lux, la Dama Luminosa, es una maga de Demacia que controla la luz para proteger a su reino. Con su destreza en la magia de la luz, Lux enfrenta las amenazas con elegancia y determinación, buscando justicia para su tierra natal.",
      },
      {
        name: "Malphite",
        role: "Tanque",
        lane: "Top",
        attackType: "Melee",
        difficulty: 2,
        releaseYear: 2009,
        lore: "Malphite, el Fragmento del Monolito, es una criatura de piedra viviente. Con su imponente presencia y cuerpo de roca sólida, Malphite se lanza contra sus enemigos como un coloso inquebrantable, buscando proteger la armonía natural de Runaterra.",
      },
      {
        name: "Katarina",
        role: "Asesina",
        lane: "Mid",
        attackType: "Melee",
        difficulty: 8,
        releaseYear: 2009,
        lore: "Katarina, la Cuchilla Siniestra, es una asesina de Noxus con una agilidad y destreza asombrosas. Con su habilidad para girar y lanzar dagas con precisión mortal, Katarina persigue la gloria y la admiración en el campo de batalla.",
      },
    ],
  });
  return NextResponse.json({ message: "Seed Executed" });
}
