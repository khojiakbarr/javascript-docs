import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar({ handleSearch, searchTerm }) {
  return (
    <header>
      <div className="container">
        <nav className=" flex items-center justify-between py-3">
          <Link href="/" className="text-xl text-white">
            atama
          </Link>
          <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
        </nav>
      </div>
    </header>
  );
}
