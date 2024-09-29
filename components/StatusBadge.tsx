import { StatusIcon } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={cn("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "canceled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        width={18}
        height={18}
        alt="icon"
        className="cursor-pointer"
      />
      <p
        className={cn("text-14-semibold", {
          "text-green-400": status === "scheduled",
          "text-blue-400": status === "pending",
          "text-red-400": status === "canceled",
        })}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;
