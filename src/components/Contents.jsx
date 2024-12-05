import React from "react";
import ContendCard from "./ContendCard";

export default function Contents({ data = [] }) {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="grid grid-cols-4 ">
          {data.map((item, index) => (
            <ContendCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
