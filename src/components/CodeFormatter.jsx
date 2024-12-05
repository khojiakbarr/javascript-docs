"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css"; // Stil fayli
import dynamic from "next/dynamic";
import Prism from "prismjs";
// const Prism = dynamic(() => import("prismjs"), { ssr: false });

export default function CodeFormatter({ code }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Prism.js kodlarini faqat mijoz tomonida ajratish
    if (typeof window !== "undefined") {
      Prism.highlightAll();
      setIsClient(true);
    }
  }, []);

  return (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
      <code className="language-javascript">{isClient && code}</code>
    </pre>
  );
}
