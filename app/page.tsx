"use client";
import Image from "next/image";
import "./globals.css";
import Portada from "../public/portada.webp";
import CardProyect from "@/components/cardProyect";
import Studies from "@/components/studies";
import { Suspense, useEffect, useState } from "react";
import ImageModal from "@/components/imageModal";
import PhotoProfile from "@/assets/images/photoProfile.jpeg";
import Projects from "@/assets/mooks/proyects.json";
import { Project } from "@/assets/classes/project";
export default function Home() {
  const [aboutMe, setAboutMe] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [reversedProjects, setReversedProjects] = useState<Project[]>([]);
  const [emailAlert, setEmailAlert] = useState(true);
  useEffect(() => {
    setReversedProjects([...Projects].reverse());
  }, [Projects]);

  const handlemModal = () => {
    setOpenModal(!openModal);
  };

  const downloadCV = () => {
    const url = "/archives/CV Nievas Angel Gabriel.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "CV Nievas Angel Gabriel.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const copyToClipboard = (text: string) => {
    setEmailAlert(false);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        /* alert("Text copied to clipboard!"); */
        setTimeout(() => {
          setEmailAlert(true);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <main>
      <section className="content-center portada">
        <h1
          className="text-white text-center mb-10"
          style={{ fontSize: "2.5em", textShadow: "#fff 0px 1px 1px" }}
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
        <section className="mt-3">
          <div className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-4 md:space-y-0 space-y-0 justify-center text-center align-middle content-center">
            <div>
              <button className="rounded-xl my-1 px-8 py-1 text-1xl buttons mx-1">
                <a
                  href="https://www.linkedin.com/in/gabriel-nievas/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </button>
            </div>
            <div>
              <button className="rounded-xl my-1 px-8 py-1 text-1xl buttons mx-1">
                <a href="https://github.com/Nievas2" target="_blank">
                  Github
                </a>
              </button>
            </div>
            <div>
              <button
                className="rounded-xl my-1 px-8 py-1 text-1xl buttons mx-1"
                onClick={downloadCV}
              >
                Curriculum
              </button>
            </div>
            <div className="relative">
              <button
                className="rounded-xl my-1 px-8 py-1 text-1xl buttons mx-1"
                onClick={() => copyToClipboard("angelgabrielnievas@gmail.com")}
              >
                Correo electrónico
              </button>
              <div className="absolute text-center rounded-xl px-4 pt-1 text-1xl mx-1">
                <div
                  hidden={emailAlert}
                  className="bg-[#007EA7] rounded-md border-0 mr-3 z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words "
                >
                  <div>
                    <div className="bg-[#007EA7] text-white opacity-75 font-semibold p-3 mb-0 uppercase rounded-lg">
                      Copiado en el portapapeles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section
        className="p-5 content-center text-center"
        style={{ backgroundColor: "#00171F" }}
      >
        <button
          style={{
            fontSize: "1.8em",

            color: "#fff",
            textShadow: "#bbb 0px 1px 2px",
            boxShadow: "#fff 0px 0px 3px",
          }}
          className="buttonperso rounded-xl px-8 pt-1 text-1xl justify-items-center text-center align-middle"
          onClick={() => setAboutMe(!aboutMe)}
        >
          Sobre mí
        </button>
        {aboutMe && (
          <section className="relative pt-2 m-8 ">
            <div
              style={{ backgroundColor: "#002e3d" }}
              className="rounded-2xl mt-5 aboutme"
            >
              <div
                style={{ display: "flex" }}
                className="flex-col sm:flex-row "
              >
                <div style={{ flex: 3 }}>
                  <p className="p-8 text-white text-left ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus quo tenetur recusandae libero provident eveniet
                    ratione quos exercitationem cumque ex, eos id a velit
                    debitis quisquam laudantium aliquam incidunt minus.
                  </p>
                </div>
                <div style={{ flex: 1 }} className=" content-center ">
                  <div className="flex justify-center m-5 ">
                    <Image
                      src={PhotoProfile}
                      className="rounded-2xl"
                      alt="foto de perfil"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
      <section
        className="p-5"
        style={{ backgroundColor: "#00171F" }}
        id="proyects"
      >
        <h3
          className=" text-left pl-4"
          style={{ fontSize: "1.8em", color: "#00A8E8" }}
        >
          <strong> Proyectos</strong>
        </h3>
        <Suspense fallback={<div>Loading...</div>}>
          {reversedProjects.map((project) => (
            <CardProyect
              key={project.id}
              proyect={project}
              index={project.id}
            />
          ))}
        </Suspense>

        <hr />
      </section>
      <section style={{ backgroundColor: "#00171F" }} id="studies">
        <h3
          className=" text-left pl-4"
          style={{ fontSize: "1.8em", color: "#00A8E8" }}
        >
          <strong> Estudios</strong>
        </h3>
        <ImageModal handleModal={handlemModal} openModal={openModal} />
        <Studies></Studies>
      </section>
    </main>
  );
}
