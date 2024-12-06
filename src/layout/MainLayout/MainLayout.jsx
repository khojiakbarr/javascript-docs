"use client";

import { useParams } from "next/navigation";
import SidebarLayout from "../SideBarLayout";
import mainData from "../../static/mainData";
import { Info } from "lucide-react";
import CodeFormatter from "@/components/CodeFormatter";
import "./mainLayoutStyle.css";
import "highlight.js/styles/github.css"; // GitHub uslubi
import "highlight.js/styles/atom-one-dark.css";
import { useState } from "react";

export default function MainLayout() {
  const { id } = useParams();
  // const [code, setCode] = useState("// Bu yerda JavaScript kodingizni yozing");

  const findedItem = mainData.find((item) => item.id === id);

  return (
    <SidebarLayout>
      <div className="layout">
        <div className="wrapper">
          <h3 className="title">{findedItem.title}</h3>
          <p className="info">{findedItem.outDecription}</p>
        </div>
        <p className="description">{findedItem.description}</p>
        <div>
          <h3 className="advantagesTitle">Asosiy Afzalliklar</h3>
          <ul className="advantages">
            {findedItem.advantages.map((item, index) => (
              <li className="mt-1" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h3 className="usageTitle">Foydalanish</h3>
        <div className="usage">
          <Info />
          <p>
            {findedItem.title} {findedItem.usage}
          </p>
        </div>

        <h3 className="example">Misol</h3>
        {/* <CodeFormatter
          code={findedItem.example}
          language="javascript"
          onChange={setCode}
        /> */}
        <CodeFormatter code={findedItem.example} />
        {/* <pre>{code}</pre> */}
      </div>
    </SidebarLayout>
  );
}
