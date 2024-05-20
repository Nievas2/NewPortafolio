"use client";
import LaDulce from "@/assets/images/ladulce.png";
import Image from "next/image";
import Carousel from "./carousel";
import "@/app/globals.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  useState,
} from "react";
export default function CardProyect({
  index,
  proyect,
}: {
  index: number;
  proyect: any;
}) {
  const [revealInfo, setRevealInfo] = useState(false);

  return (
    <>
      <main className="w-full grid grid-cols-6 h-full reveal">
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
          {proyect.link && (
            <button className="rounded-xl px-4 pt-1 text-1xl buttons mx-1">
              <a href={proyect.link} target="_blank">
                Link
              </a>
            </button>
          )}
          <section></section>
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
              alt={proyect.name}
              className="h-55 rounded-xl"
            />
          )}
        </div>
      </main>
      <section className="m-5">
        <button
          className="rounded-xl px-4 py-2 pt-1 text-1xl buttons mx-1 mb-8"
          onClick={() => setRevealInfo(!revealInfo)}
        >
          Más información
        </button>
        {revealInfo && (
          <div className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-4 md:space-y-0 space-y-0">
            <div className="flex-1 mx-5 my-4">
              {proyect.frontend && (
                <>
                  <h3 className="text-white text-2xl">
                    <strong>FrontEnd</strong>
                  </h3>
                  {proyect.frontend.map((data: any, index: any) => (
                    <h5
                      key={crypto.randomUUID()}
                      className="text-white font-extralight"
                    >
                      - {data.description}
                    </h5>
                  ))}
                </>
              )}
            </div>
            <div className="flex-1 mx-5 my-4">
              {proyect.backend != null ? (
                <>
                  <h3 className="text-white text-2xl">
                    <strong>BackEnd</strong>
                  </h3>
                  {proyect.backend.map((data: any, index: any) => (
                    <h5
                      key={crypto.randomUUID()}
                      className="text-white font-extralight "
                    >
                      - {data.description}
                    </h5>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </section>

      <div className="w-full gap-9  mb-20">
        <div
          className="w-full text-white inline-block m-1 rounded-lg border-blue-900 border-2"
          style={{ backgroundColor: "#10171f" }}
        >
          {proyect.tecnologies && (
            <div className="mx-4 flex flex-wrap py-0 sm:py-2 md:flex-nowrap space-x-4 md:space-x-4 md:space-y-0 space-y-0 align-middle gap-4">
              {proyect.tecnologies.map((data: any) => (
                <div
                  className="flex flex-row flex-1 content-center justify-center m-0"
                  key={crypto.randomUUID()}
                >
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
          {/* <div className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-4 md:space-y-0 space-y-4">
            <div className="flex-1 bg-blue-500 text-white p-4">flex-1</div>
            <div className="flex-auto bg-green-500 text-white p-4">
              flex-auto
            </div>
            <div className="flex-initial bg-red-500 text-white p-4">
              flex-initial
            </div>
            <div className="flex-none bg-yellow-500 text-white p-4">
              flex-none
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
