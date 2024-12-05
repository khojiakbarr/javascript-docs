"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import mainData from "../static/mainData";
import Contents from "@/components/Contents";

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv uchun holat
  const [filteredData, setFilteredData] = useState(mainData); // Filtrlash natijalari
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    setTimeout(() => {
      const results = mainData?.filter(
        (item) => item?.title.toLowerCase().includes(value) // Qidiruv qoidasi
      );

      setFilteredData(results);
    }, 400);
  };
  return (
    <>
      <Navbar handleSearch={handleSearch} searchTerm={searchTerm} />
      <Hero />
      <Contents data={filteredData} />
    </>
  );
}
