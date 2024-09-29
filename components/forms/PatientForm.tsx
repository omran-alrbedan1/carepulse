"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";

import { useRouter } from "next/navigation";
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validation";
import CustomFormField from "../CustomFormField";
import { createUser } from "@/lib/actions/patient.actions";
import { SelectItem } from "../ui/select";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);
      console.log(user);
      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="space-y-4 mb-12">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
          required={true}
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="John@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
          required={true}
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+963 999 999 999"
          required={true}
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;