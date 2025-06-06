import Image from "next/image";
import "../app/globals.css";
import Polo from "@/assets/images/certificados/Polotecnologico.jpg";
import StudiesJson from "@/assets/mooks/studies.json";
export default function Studies() {
  return (
    <section>
      <main className="z-10 grid grid-cols-6 gap-5 place-items-center ">
        {StudiesJson &&
          StudiesJson.map((data, index) => (
            <section
              className="h-[200px] w-[270px] sm:h-[350px] sm:w-[470px] col-span-full lg:col-span-3 relative image-container imageStudy m-0 mt-1 sm:m-5 rounded-2xl "
              style={{ backgroundImage: `url(${data.src})` }}
              key={crypto.randomUUID()}
            >
              <div className="absolute bottom-0 content-description w-full">
                <div className="flex flex-col ">
                  <div className="ml-10">
                    <p className="flex-1 font-thin">
                      {data.dateI} | {data.dateF} | {data.dateYear}
                    </p>

                    <div>
                      <h1 className="font-bold">{data.name}</h1>
                      <h2 className="font-semibold">{data.description}</h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap bg-[rgba(255,255,255,0.21)] p-1 rounded-b-2xl">
                    {data.tecnologies &&
                      data.tecnologies.map((info, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center justify-center p-1" style={{width: data.tecnologies.length > 4 ? "25%" :"50%"}}
                        >
                          <img
                            src={info.src}
                            alt={info.name}
                            height={20}
                            width={20}
                          />
                          <p className="text-sm text-center font-semibold pl-1">
                            {info.name}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
      </main>
    </section>
  );
}
