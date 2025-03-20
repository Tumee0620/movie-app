import * as React from "react";
import { CiPlay1 } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ncrd } from "./Ncrd";
const data = [
  {
    imgurl:
      "https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    movie: "Wicked",
  },
  {
    imgurl:
      "https://s3-alpha-sig.figma.com/img/d5db/f97e/32f19c86b63dc76ec6e6f1a31cfd4d28?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GQ3meWR9a8frPgpoOEvHvaeeOEnpTNjgnnY0dCC5CxKS0G6TT7E4tIxkNK6Pe5C-X8Cja1D6uYhmu0tryE~~E7n3tM-3F~byxoal5V85BU-qUbWpEGD-aBBBKUgN65PYW3n0EZyuyENF6MhZDk9JYvu~ILSh5ffE~mIxkvSIHSg2zPbFCSTgYaSlWcU3~7AcUoC0vAQkE1wskI5RGR5Os9B-nHlHx3WFI06aEjUtrGWrnOtITztzJhxia1kzv7zWSNTs4PVX8RbAA09EPuX1WMk4fyHrihyHRkmaYuAc7u9EmbDEdieypHtoxUK2kY9bJUu6AFV9HJ3UmDyPU0GVEg__",
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    movie: "Gladiator II",
  },
  {
    imgurl:
      "https://s3-alpha-sig.figma.com/img/496c/7ace/9382b0cceb0901c79ace811454bb1211?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jzW6r7JpZfn3xFX62iky5fm7obx7D8s6jRUtlzqcYFXShjBXKx0Nqexsg3hKQ~g9cbsadr1nqxcXkIVp9m0VsCSRL3BAxtPx82iuSdx5i-OT7vKn2OiYlByLxy7mpQltYMp4S9k4cJlP0sF2-tG8mcyC87BI-YjP2JmRzb9xco5qOG0FswjRbk8iuFZAtKkRW9MoMyN6xo6I9WNfpak2B8Xw2e0ykkKiqbw7JMe9WUUstIwzS6oMLIDsugXmMSzU2A1LL4R6JqfZ5peD-OEcQfkExH~Gcg91bgM--Qc-lSPQU2UmO8HJBwnHa3hY-6XIjXLYVFianr0tPPJgo6C0MQ__",
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    movie: "Moana 2",
  },
];
export function CarouselComponent() {
  return (
    <div
      className="flex flex-col
    w-screen  "
    >
      <Carousel className="w-screen relative">
        <CarouselContent>
          {data.map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Ncrd
                  imgurl={movie.imgurl}
                  movie={movie.movie}
                  description={movie.description}
                ></Ncrd>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
