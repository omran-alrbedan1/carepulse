"use client";
import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { PasskeyModel } from "@/components/PassKeyModel";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <main className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModel />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="logo-full"
            className="mb-10 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between mb-15 ">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ⓒ 2024 CarePulse
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="/?admin=true"
                    className="text-green-500 cursor-pointer"
                  >
                    Admin
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-400 text-black">
                  <p>admin verification</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/login.png"}
        height={900}
        width={900}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </main>
  );
}
