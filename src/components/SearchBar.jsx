"use client";

import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="max-w-xl ">
      <div className="relative flex items-center group">
        <div className="relative flex-1 flex items-center rounded-full border border-[var(--brand)] bg-[#1C1C1C] px-4 py-2.5 transition-colors ">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Izlash"
            className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>
            </kbd>
            <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
