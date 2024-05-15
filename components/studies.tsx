import Image from "next/image";
import "../app/globals.css";
import Polo from "@/assets/images/certificados/Polotecnologico.jpg";
import StudiesJson from "@/assets/mooks/studies.json";
export default function Studies() {
  return (
    <section>
      <main className="z-10 grid grid-cols-6 gap-5 ">
        {StudiesJson &&
          StudiesJson.map((data, index) => (
            <section
              className="col-span-full md:col-span-3 relative image-container imageStudy2 m-5 rounded-2xl"
              style={{ backgroundImage: `url(${data.src})`, height: "350px", width:"470px" }} key={crypto.randomUUID()}
            >
              <div className="absolute bottom-10 left-10">
                <div className="flex flex-col">
                  <p className="texts-study flex-1 font-thin">
                    {data.dateI} | {data.dateF}
                  </p>

                  <div>
                    <h1 className="texts-study font-bold">{data.name}</h1>
                    <h2 className="texts-study font-semibold">{data.description}</h2>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </main>
      {/* <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-7 ">
              <section className="col-span-full justify-end lg:col-span-3 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 image-container">
                
                <div className="imageperso ">
                  <div className="size-fit m-auto relative">
                    <div className="relative h-24 w-56 flex items-center">
                       <span className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 dark:from-blue-400 dark:to-pink-400 ">
                         100%
                      </span> 
                      <p className="text-description">
                        1000
                      </p>
                    </div>
                    <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                      Customizable
                    </h2>
                  </div>
                </div>
              </section>

              <div className="col-span-full sm:col-span-3 lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 imageperso2">
                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                  <div className="mt-6 text-center relative z-10 space-y-2">
                    <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                      Secure by default
                    </h2>
                    <p className="dark:text-gray-300 text-gray-700">
                      Provident fugit and vero voluptate. magnam magni doloribus
                      dolores voluptates a sapiente nisi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div className="grid sm:grid-cols-2">
                  <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        Faster than light
                      </h2>
                      <p className="dark:text-gray-300 text-gray-700">
                        Provident fugit vero voluptate. Voluptates a sapiente
                        inventore nisi.
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border rounded-tl-lg dark:bg-white/5 dark:border-white/10">
                    <div className="absolute flex gap-1 top-2 left-3">
                      <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                      <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                      <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div className="h-full grid sm:grid-cols-2">
                  <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        Keep your loved ones safe
                      </h2>
                      <p className="dark:text-gray-300 text-gray-700">
                        Voluptate. magnam magni doloribus dolores voluptates a
                        sapiente inventore nisi.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-800">
                    <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                      <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                        <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                          Glodie
                        </span>
                        <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                          <img
                            className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                            src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                        <div className="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                          <img
                            className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg"
                            alt=""
                          />
                        </div>
                        <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                          M. Irung
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                        <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                          B. Ng
                        </span>
                        <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                          <img
                            className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                            src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
