import LaDulce from "@/assets/images/ladulce.png";
import Image from "next/image";
import Carousel from "./carousel";
export default function CardProyect({
  index,
  proyect,
}: {
  index: number;
  proyect: any;
}) {
  return (
    <>
      {index % 2 == 0 ? (
        <main className="w-full grid grid-cols-6 h-full mb-12">
            <div className="col-span-full md:col-span-3 p-4 content-center">
              <div className="flex flex-row">
                <div className="flex-1">
                  <h4 className="text-white text-3xl inline-block">
                    <strong>{proyect.name}</strong>
                  </h4>
                </div>
                <div className="flex-2 justify-end">
                  <h4
                    className="text-white text-2xl inline-block"
                    style={{ color: "#FF00FF" }}
                  >
                    FULL STACK
                  </h4>
                </div>
              </div>

              <p className="text-gray-300 p-2">{proyect.description}</p>
              <div className="gap-9">
                <div
                  className="text-white inline-block m-1 px-10 py-1 rounded-lg border-blue-900 border-2"
                  style={{ backgroundColor: "#10171f" }}
                >
                  <h5>Java</h5>
                </div>

                {/*  <h5 className="text-white inline-block m-1 px-10 py-1 rounded-lg border-purple-700 border-1" style={{backgroundColor:"#10171f"}}>java</h5>
               <h5 className="text-white inline-block m-1 px-10 py-1 rounded-lg border-purple-700 border-1" style={{backgroundColor:"#10171f"}}>java</h5>
                <h5 className="text-white inline-block m-1 px-10 py-1 rounded-lg border-purple-700 border-1" style={{backgroundColor:"#10171f"}}>java</h5> */}
              </div>
            </div>
            <div className="col-span-full md:col-span-3 p-4">
              {proyect.images != null ? (
                <div>
                  <div className="w-[50%] h-[100%] m-auto sm:h-[50%]">
                    <Carousel slides={proyect.images} />
                  </div>
                </div>
              ) : (
                <Image
                  src={LaDulce}
                  alt="La dulce tradición"
                  className="h-55 rounded-xl"
                />
              )}
            </div>
        </main>
      ) : (
        <>
          <main className="w-full flex-col-reverse  md:flex-row flex h-full mb-12">
            <div className="flex-1 p-4">
              <Image
                src={LaDulce}
                alt="La dulce tradición"
                className="h-55 rounded-xl"
              />
            </div>
            <div className="flex-1 p-4 content-center">
              <div className="flex flex-row">
                <div className="flex-1">
                  <h4 className="text-white text-3xl inline-block">
                    <strong>Nombre</strong>
                  </h4>
                </div>
                <div className="flex-2 justify-end">
                  <h4
                    className="text-white text-2xl inline-block"
                    style={{ color: "#FF00FF" }}
                  >
                    FULL STACK
                  </h4>
                </div>
              </div>

              <p className="text-gray-300 p-2">
                description: Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Atque possimus consectetur minus dignissimos quidem quas?
                Eligendi suscipit dolores, veniam id iusto doloremque porro
                itaque veritatis facilis cupiditate? Laborum, pariatur quia!
              </p>
              <div className="gap-9">
                <div
                  className="text-white inline-block m-1 px-10 py-1 rounded-lg border-blue-900 border-2"
                  style={{ backgroundColor: "#10171f" }}
                >
                  <h5>Java</h5>
                </div>

                {/*  <h5 className="text-white inline-block m-1 px-10 py-1 rounded-lg border-purple-700 border-1" style={{backgroundColor:"#10171f"}}>java</h5>
        <h5 className="text-white inline-block m-1 px-10 py-1 rounded-lg border-purple-700 border-1" style={{backgroundColor:"#10171f"}}>java</h5>
        <h5 className="text-white inline-block m-1 px-10 py-1 rounded-lg border-purple-700 border-1" style={{backgroundColor:"#10171f"}}>java</h5> */}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
