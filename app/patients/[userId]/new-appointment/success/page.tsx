import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );
  return (
    <div className="flex h-screen max-h-screen">
      <div className="success-img">
        <Link href={"/"}>
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src={"/assets/gifs/success.gif"}
            height={300}
            width={280}
            alt="success"
            className="-mt-12"
          />
          <h2 className="header max-w-[600px] mb-6 text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted
          </h2>
          <p>we will be in touch shortly to confirm</p>
        </section>
        <section className="request-details -mt-5">
          <p>request appointment details:</p>
          <div className="flex gap-8 items-center">
            <Image
              src={doctor?.image as string}
              width={48}
              height={48}
              alt="doctor"
            />
            <p className="whitespace-nowrap">Dr.{doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"/assets/icons/calendar.svg"}
              width={32}
              height={32}
              alt="calendar"
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button variant={"outline"} className="shad-primary-btn">
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="copyright">ⓒ 2024 CarePulse</p>
      </div>
    </div>
  );
};

export default Success;
