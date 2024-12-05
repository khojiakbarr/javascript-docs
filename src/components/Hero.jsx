import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="w-full py-32 border-b-[4px] border-b-[var(--brand)]">
          <h1 className="text-5xl text-white">
            atama bu: Barcha savollarga javob
          </h1>
        </div>
        <div>
          <p className="text-[15px] text-white mt-[16px]">
            bu ochiq kodli loyihadir, IT tushunchalarini o'zbek tilida
            o'rganing.
          </p>
        </div>
      </div>
    </section>
  );
}
