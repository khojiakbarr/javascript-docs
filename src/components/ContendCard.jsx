import Link from "next/link";
import React from "react";

export default function ContendCard({ item = {} }) {
  const { title, outDecription, id } = item;

  return (
    <Link
      href={`/docs/${id}`}
      className="bg-[hsl(var(--sidebar-background))] p-4 border border-[var(--brand)] h-[136px]"
    >
      <h3 className="text-[15px] text-white font-semibold">{title} haqida</h3>
      <p className="text-[12px] text-white mt-1">{outDecription}</p>
    </Link>
  );
}
