"use client";
import LaDulce from "@/assets/images/ladulce.png";
import Image from "next/image";
import Carousel from "./carousel";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
export default function CardProyect({
  index,
  proyect,
}: {
  index: number;
  proyect: any;
}) {
  return (
    <>
      <main className="w-full grid grid-cols-6 h-full">
        <div
          className="col-span-full md:col-span-3 p-4 content-center"
          style={{ order: index % 2 == 1 ? 9999 : -9999 }}
        >
          <div className="flex-1">
            <h4 className="text-white text-3xl inline-block">
              <strong>{proyect.name}</strong>
            </h4>
          </div>
          <div className="flex-2 justify-end">
            <h4
              className="text-white text-lg inline-block"
              style={{ color: "#FF00FF" }}
            >
              {proyect.role && proyect.role}
            </h4>
          </div>

          <p className="text-gray-300 p-2">{proyect.description}</p>
        </div>
        <div
          className="col-span-full md:col-span-3 p-4 "
          style={{ order: index % 2 == 0 ? 9999 : -9999 }}
        >
          {proyect.images != null ? (
            <div>
              <div className="w-[50%] h-[100%] m-auto sm:h-[50%]">
                <Carousel slides={proyect.images} />
              </div>
            </div>
          ) : (
            <img
              src={proyect.src}
              alt="La dulce tradición"
              className="h-55 rounded-xl"
            />
          )}
        </div>
      </main>
      <div className="w-full gap-9  mb-12">
        <div
          className="w-full text-white inline-block m-1 rounded-lg border-blue-900 border-2"
          style={{ backgroundColor: "#10171f" }}
        >
          {proyect.tecnologies && (
            <div className="flex flex-row align-middle p-0">
              {proyect.tecnologies.map((data: any) => (
                <div className="flex flex-row flex-1 content-center justify-center my-2" key={crypto.randomUUID()}>
                  <img
                    src={data.src}
                    alt={data.name}
                    style={{ width: "25px" }}
                  />
                  <h5 className="text-sm content-center text-center pl-1">
                    {data.name}
                  </h5>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
