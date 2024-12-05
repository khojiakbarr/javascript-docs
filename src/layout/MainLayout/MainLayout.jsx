"use client";

import { useParams } from "next/navigation";
import SidebarLayout from "../SideBarLayout";
import mainData from "../../static/mainData";
import { Info } from "lucide-react";
import { MainContentStyle } from "./MainLayoutStyle";
import CodeFormatter from "@/components/CodeFormatter";

export default function MainLayout() {
  const { id } = useParams();

  const findedItem = mainData.find((item) => item.id === id);

  return (
    <SidebarLayout>
      <MainContentStyle>
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
        <CodeFormatter code={findedItem.example} />
      </MainContentStyle>
    </SidebarLayout>
  );
}
