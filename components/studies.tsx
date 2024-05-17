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
              className="h-[200px] w-[270px] sm:h-[350px] sm:w-[470px] col-span-full lg:col-span-3 relative image-container imageStudy2 m-5 rounded-2xl "
              style={{ backgroundImage: `url(${data.src})` }}
              key={crypto.randomUUID()}
            >
              <div className="absolute bottom-5 left-10">
                <div className="flex flex-col">
                  <p className="texts-study flex-1 font-thin">
                    {data.dateI} | {data.dateF}
                  </p>

                  <div>
                    <h1 className="texts-study font-bold">{data.name}</h1>
                    <h2 className="texts-study font-semibold">
                      {data.description}
                    </h2>
                  </div>
                  <div className="flex flex-row bg-slate-400 p-1 rounded-md">
                    <img
                      src={data.tecnologies[0].src}
                      alt=""
                      height={20}
                      width={20}
                    />
                    <p className="texts-study font-semibold pl-1">
                      {data.tecnologies[0].name}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </main>
    </section>
  );
}
