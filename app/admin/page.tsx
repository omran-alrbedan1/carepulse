import StateCard from "@/components/StateCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";

const Admin = async () => {
  const appointments = await getRecentAppointmentList();
  return (
    <div className="flex flex-col mx-auto max-w-7xl space-y-14">
      <header className="admin-header">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={32}
            width={162}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
        <p>Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className=" w-full space-y-3">
          <h1 className="header">Welcome 👋</h1>
          <p>Start the day with managing new appointment</p>
        </section>
        <section className="admin-stat">
          <StateCard
            type="appointments"
            icon="/assets/icons/appointments.svg"
            label="Schedule appointment"
            count={appointments.scheduledCount}
          />
          <StateCard
            type="pending"
            icon="/assets/icons/pending.svg"
            label="Pending appointment"
            count={appointments.pendingCount}
          />
          <StateCard
            type="canceled"
            icon="/assets/icons/cancelled.svg"
            label="Canceled appointment"
            count={appointments.cancelledCount}
          />
        </section>
        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};
export default Admin;
