"use client";

import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post("/api/register", data);
  };

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={() => {}}
      title="Giriş Yap"
      actionLabel="Devam Et"
      body={<div>Body</div>}
    />
  );
};

export default RegisterModal;
