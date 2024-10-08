import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <main className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container mb-16">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="logo-full"
            className="mb-10 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular mt-20 flex justify-between ">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ⓒ 2024 CarePulse
            </p>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        height={900}
        width={900}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </main>
  );
};

export default Register;
