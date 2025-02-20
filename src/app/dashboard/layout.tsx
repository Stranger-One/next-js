import React from "react";

export default function dashboardLayout({
  children,
  notification,
  user,
  revenue,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex flex-col">{children}</div>
      <div className="p-4 border-gray-400 border-2 grid grid-cols-2 grid-rows-2 bg-green-400 gap-2 h-[400px] w-[50vw] ">
        <div className="row-span-2">{notification}</div>
        <div className="">{user}</div>
        <div className="">{revenue}</div>
      </div>
    </div>
  );
}
