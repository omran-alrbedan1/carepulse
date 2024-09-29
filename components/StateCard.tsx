import { cn } from "@/lib/utils";
import Image from "next/image";

const StateCard = ({
  type,
  icon,
  label,
  count,
}: {
  type: "canceled" | "pending" | "appointments";
  icon: string;
  label: string;
  count: number;
}) => {
  return (
    <div
      className={cn("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "canceled",
      })}
    >
      <div className="flex gap-8 items-center">
        <Image src={icon} width={32} height={32} alt={icon} />
        <h1 className="text-32-bold">{count}</h1>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StateCard;
