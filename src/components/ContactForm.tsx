"use client";

import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import styles from "../components/ContactForm.module.css";
import { useState } from "react";
import BaseModal from "./BaseModal";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();
  const [modal, setModal] = useState({ isOpen: false, message: "" });

  function postData(data: ContactForm) {
    return new Promise((resolve) => setTimeout(() => resolve(data), 3000));
  }

  async function onSubmit(data: ContactForm) {
    try {
      const res = await postData(data);
      setModal({ isOpen: true, message: "Mensaje enviado correctamente" });
      reset();
    } catch (e) {
      console.error(e);
      setModal({ isOpen: true, message: "Error en el envio del mensaje" });
    }
  }

  return (
    <>
      <form
        className={`${styles.form} fadeIn`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputText
          id="name"
          label="Nombre"
          required
          {...register("name", {
            required: "Nombre es requerido",
            maxLength: {
              value: 50,
              message: "50 caracteres como maxima",
            },
          })}
          errors={errors.name?.message}
        />
        <InputText
          id="email"
          label="Email"
          required
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Tiene que ser un email valido",
            },
            required: "Email es requerido",
          })}
          errors={errors.email?.message}
        />
        <InputTextArea
          id="message"
          label="Mensaje"
          {...register("message", { required: "Mensaje es requerido" })}
          required
          errors={errors.message?.message}
        />
        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? <p>CARGANDO...</p> : <p>ENVIAR</p>}
        </button>
      </form>
      <BaseModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, message: "" })}
      >
        {modal.message}
      </BaseModal>
    </>
  );
}
