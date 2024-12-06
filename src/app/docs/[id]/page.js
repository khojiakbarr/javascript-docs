"use client";
import MainLayout from "@/layout/MainLayout/MainLayout";
import { useParams } from "next/navigation";
import React from "react";

export default function Docs() {
  const { id } = useParams();

  return <MainLayout id={id} />;
}
