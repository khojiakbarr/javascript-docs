"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import mainData from "../static/mainData";
import Contents from "@/components/Contents";

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv uchun holat
  const [filteredData, setFilteredData] = useState(mainData); // Filtrlash natijalari
  const [loading, setLoading] = useState(false); // Yuklanish holati

  let debounceTimeout;

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Oldingi timeoutni to'xtatish
    clearTimeout(debounceTimeout);

    // Qidiruvni kechiktirish
    debounceTimeout = setTimeout(() => {
      setLoading(true); // Yuklanish holatini yoqish
      const results = mainData?.filter(
        (item) => item?.title.toLowerCase().includes(value) // Qidiruv qoidasi
      );
      setFilteredData(results);
      setLoading(false); // Yuklanishni to'xtatish
    }, 400); // 400ms kutish
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} searchTerm={searchTerm} />
      <Hero />
      {loading ? (
        <div>Yuklanmoqda...</div> // Yuklanayotgan holat
      ) : (
        <Contents data={filteredData} />
      )}
    </>
  );
}
