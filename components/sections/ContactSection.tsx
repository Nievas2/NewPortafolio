"use client"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Icon } from "@iconify/react"
import { useFormik } from "formik"
import { ContactScheme } from "@/utils/schemas/contactSchema"
import { useState } from "react"

const ContactSection = () => {
  const [isPending, setIsPending] = useState(false)
  const [success, setSuccess] = useState(false)
  async function SendEmail(formData: FormData) {
    try {
      const data = Object.fromEntries(formData.entries())
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
          ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
          : "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
          ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
          : "",
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          : ""
      )
      setIsPending(false)
      setSuccess(true)
      return true
    } catch (error) {
      throw error
    }
  }
  const initialValues = {
    name: "",
    email: "",
    message: "",
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactScheme,
    onSubmit: (values: any) => {
      const formData = new FormData()
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key])
      })
      setIsPending(true)
      SendEmail(formData)
    },
  })
  return (
    <section id="contact" className="flex w-full relative">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col basis-full md:basis-1/2 gap-4"
        >
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-8">
            Contacto
          </h2>
          <p className="text-blue-200">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! Contáctame
            a través de cualquiera de estos medios.
          </p>
          <div className="space-y-4">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXJVBGbpNJFfbhtVwSsWdJQxlhPJgPRhxGZCNZzkvgJXvBHfXMZTtPTmqCdCfSLkFcCJC"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors w-fit"
            >
              <Icon icon="simple-icons:gmail" width="24" height="24" />{" "}
              angelgabrielnievas@gmail.com
            </a>

            <a
              href="https://github.com/Nievas2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors w-fit"
            >
              <Icon icon="mdi:github" width="24" height="24" />
              github.com/Nievas2
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-nievas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors w-fit"
            >
              <Icon icon="mdi:linkedin" width="24" height="24" />
              linkedin.com/in/gabriel-nievas
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col basis-full md:basis-1/2 gap-4"
          onSubmit={formik.handleSubmit}
        >
          {success ? (
            <span className="text-white text-lg">
              Su email ha sido enviado con exito, pronto tendra una respuesta.{" "}
              <br /> ¡¡Muchas gracias!!
            </span>
          ) : (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-600"
                  {...formik.getFieldProps("name")}
                  disabled={isPending}
                />
                {formik.touched.name &&
                  formik.errors.name &&
                  typeof formik.errors.name === "string" && (
                    <small className="font-bold text-[#ff4444]">
                      {formik.errors.name}
                    </small>
                  )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-600"
                  {...formik.getFieldProps("email")}
                  disabled={isPending}
                />
                {formik.touched.email &&
                  formik.errors.email &&
                  typeof formik.errors.email === "string" && (
                    <small className="font-bold text-[#ff4444]">
                      {formik.errors.email}
                    </small>
                  )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-600"
                  {...formik.getFieldProps("message")}
                  disabled={isPending}
                />
                {formik.touched.message &&
                  formik.errors.message &&
                  typeof formik.errors.message === "string" && (
                    <small className="font-bold text-[#ff4444]">
                      {formik.errors.message}
                    </small>
                  )}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
export default ContactSection
