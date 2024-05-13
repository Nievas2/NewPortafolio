import Image from "next/image";
import "./globals.css";
import Portada from "../public/portada.webp";
import CardProyect from "@/components/cardProyect"
import Studies from "@/components/studies";
export default function Home() {
  return (
    <main>
      <section className="h-96 content-center portada">
        <h1
          className="text-white text-center mb-10"
          style={{ fontSize: "2em", textShadow: "#fff 0px 1px 1px" }}
        >
          PROGRAMADOR |{" "}
          <strong style={{ color: "#00A8E8", textShadow: "#fff 0px 1px 1px" }}>
            FULL STACK
          </strong>
        </h1>
        <h2
          className="text-center align-middle"
          style={{
            fontSize: "1.6em",
            color: "#ffffff",
          }}
        >
          <strong
            style={{ color: "#007EA7", textShadow: "#000000 0px 1px 1px" }}
          >
            ANGEL GABRIEL
          </strong>{" "}
          NIEVAS
        </h2>
        <div>
          {/* Agregar redes  */}
          {/* Linkedin, Github, Cv, Correo */}
        </div>
      </section>
      <section className="p-5" style={{ backgroundColor: "#00171F" }}>
        <h3
          className=" text-left pl-4"
          style={{ fontSize: "1.8em", color:"#00177F" }}
        ><strong> Proyectos</strong>
          
        </h3>
        <CardProyect index={0}/>
        <CardProyect index={1}/>
      </section>
      <section style={{ backgroundColor: "#003459" }}>
        <h3 className="text-white text-center" style={{ fontSize: "1.6em" }}>
          Estudios
        </h3>
        <Studies></Studies>
      </section>
    </main>
  );
}
