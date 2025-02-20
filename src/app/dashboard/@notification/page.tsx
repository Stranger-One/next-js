import Link from "next/link";

export default function notification() {
  return (
    <div className="p-10 bg-gray-400 h-full w-full flex flex-col">
      <div className="">notification</div>
      <Link href="/dashboard/archived" className="text-slate-800">Archived</Link>
    </div>
  );
}
