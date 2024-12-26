import * as yup from "yup"

export const ContactScheme = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("El email no es valido")
    .required("El email es requerido"),
  message: yup.string().required("El mensaje es requerido"),
})