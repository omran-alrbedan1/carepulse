import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto flex-1 justify-between">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="logo-full"
            className="mb-10 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            patientId={patient.$id}
            userId={userId}
          />
          <p className="justify-items-end mt-8 text-dark-600 xl:text-left">
            ⓒ 2024 CarePulse
          </p>
        </div>
      </section>
      <Image
        src={"/assets/images/appointment-img.png"}
        height={900}
        width={900}
        alt="patient"
        className="side-img max-w-[390px] bg-bottom"
      />
    </main>
  );
};

export default NewAppointment;
