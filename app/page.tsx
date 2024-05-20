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
import Footer from "@/components/footer";
import ProductsSkeleton from "@/components/skeletons/productsSkeleton";
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
  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="relative">
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
        <section className="mt-3 justify-center content-center flex">
          <div className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-4 md:space-y-0 space-y-0 justify-center text-center align-middle content-center rounded-2xl backdrop-blur-sm max-w-[650px] p-1 ">
            <div>
              <button className="rounded-xl my-1 px-4 py-2 text-1xl buttons mx-1">
                <a
                  href="https://www.linkedin.com/in/gabriel-nievas/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </button>
            </div>
            <div>
              <button className="rounded-xl my-1 px-4 py-2 text-1xl buttons mx-1">
                <a href="https://github.com/Nievas2" target="_blank">
                  Github
                </a>
              </button>
            </div>
            <div>
              <button
                className="rounded-xl my-1 px-4 py-2 text-1xl buttons mx-1"
                onClick={downloadCV}
              >
                Curriculum
              </button>
            </div>
            <div className="relative">
              <button
                className="rounded-xl my-1 px-4 py-2 text-1xl buttons mx-1"
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
                <div className="p-8" style={{ flex: 3 }}>
                  <p className=" text-white text-left text-xl">
                    ¡Hola soy Gabriel!👨🏻‍💻 un programador autodidacta con 21 años
                    que vive en Córdoba, Argentina.
                  </p>
                  <p className="mt-4 text-white text-left text-xl">
                    Buscando incorporarme en el mercado laboral para mejorar mis
                    conocimientos y aprender junto a un equipo de trabajo.
                  </p>
                  {/* 
                    <p>
                      Estoy entusiasmado por la oportunidad de aportar mis
                      conocimientos y aprender de profesionales experimentados en
                      el campo.
                    </p> */}
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
        <div
          className="border-x-4 border-y-2 border-y-[#00A8E8] border-x-[#00A8E8] block"
          style={{ maxWidth: "170px" }}
        >
          <h3
            className=" text-left pl-4 block"
            style={{
              fontSize: "1.8em",
              color: "#00A8E8",
              display: "block",
              maxWidth: "25px",
            }}
          >
            <strong>Proyectos</strong>
          </h3>
        </div>

        {reversedProjects.map((project) => (
          <Suspense fallback={<ProductsSkeleton index={project.id} />}>
            <CardProyect
              key={project.id}
              proyect={project}
              index={project.id}
            />
          </Suspense>
        ))}

        <hr />
      </section>
      <section
        className="p-5"
        style={{ backgroundColor: "#00171F" }}
        id="studies"
      >
        <div
          className="border-x-4 border-y-2 border-y-[#00A8E8] border-x-[#00A8E8] block mb-10"
          style={{ maxWidth: "170px" }}
        >
          <h3
            className=" text-left pl-4 block "
            style={{
              fontSize: "1.8em",
              color: "#00A8E8",
              display: "block",
              maxWidth: "25px",
            }}
          >
            <strong>Estudios</strong>
          </h3>
        </div>
        <ImageModal handleModal={handlemModal} openModal={openModal} />
        <Studies />
      </section>
      <Footer />

      <button
        className="fixed bottom-0 right-0 m-5 bg-[rgb(123,123,123,.5)] rounded-full"
        onClick={() => ScrollToTopButton()}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
            fill="#0F0F0F"
          />
        </svg>
      </button>
    </main>
  );
}
