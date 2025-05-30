"use client"
import Image from "next/image"
import "./globals.css"
import { useEffect, useState } from "react"
import ContactSection from "@/components/sections/ContactSection"
import AboutSection from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import StudySection from "@/components/sections/StudySection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import TechnologiesSection from "@/components/sections/TechnologiesSection"

export default function Home() {
  const [aboutMe, setAboutMe] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [emailAlert, setEmailAlert] = useState(true)

  const handlemModal = () => {
    setOpenModal(!openModal)
  }

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <main className="relative flex flex-col w-full bg-[#00171F] items-center justify-center">
      <div className="flex flex-col max-w-8xl gap-4 mb-6">
        {/* hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Technologies */}
        <TechnologiesSection />

        {/* Study */}
        <StudySection />

        {/* Contact */}
        <ContactSection />

        <button
          className="fixed bottom-0 right-0 m-5 bg-[rgb(255,255,255)] rounded-full"
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
      </div>
    </main>
  )
}
