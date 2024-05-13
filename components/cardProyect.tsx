import LaDulce from "@/assets/images/ladulce.png";
import Image from "next/image";
export default function CardProyect({ index }: { index: number }) {
  return (
    <main className="w-full flex-col  md:flex-row  flex h-full my-12">
      {index % 2 == 0 ? (
        <>
          <div className="flex-1 p-4 content-center">
            <h4 className="text-white text-2xl" style={{ color: "#FF00FF" }}>
              FULL STACK
            </h4>
            <h4 className="text-white text-2xl">
              <strong>Nombre</strong>
            </h4>
            <p className="text-gray-300">
              description: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Atque possimus consectetur minus dignissimos quidem quas?
              Eligendi suscipit dolores, veniam id iusto doloremque porro itaque
              veritatis facilis cupiditate? Laborum, pariatur quia!
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
          <div className="flex-1 p-4">
            <Image
              src={LaDulce}
              alt="La dulce tradición"
              className="h-55 rounded-xl"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 p-4">
            <Image
              src={LaDulce}
              alt="La dulce tradición"
              className="h-55 rounded-xl"
            />
          </div>
          <div className="flex-1 p-4 content-center">
            <h4 className="text-white text-2xl" style={{ color: "#FF00FF" }}>
              FULL STACK
            </h4>
            <h4 className="text-white text-2xl">
              <strong>Nombre</strong>
            </h4>
            <p className="text-gray-300">
              description: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Atque possimus consectetur minus dignissimos quidem quas?
              Eligendi suscipit dolores, veniam id iusto doloremque porro itaque
              veritatis facilis cupiditate? Laborum, pariatur quia!
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
        </>
      )}
    </main>
  );
}
