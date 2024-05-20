import { sedan } from "@/app/ui/fonts";
export default function Footer() {
  return (
    <>
      <main className="flex justify-center content-center align-middle bg-[#00171F]">
        <section className="">
          <p className={`${sedan.className} antialiased text-white text-lg m-2 p-2 my-5`}>
            {"<h1>Si se puede imaginar se puede programar</h1>"}
          </p>
        </section>
      </main>
    </>
  );
}
