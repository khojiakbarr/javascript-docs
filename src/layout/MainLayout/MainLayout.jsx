"use client";

import { useParams } from "next/navigation";
import { Info } from "lucide-react";
import Link from "next/link";
import SidebarLayout from "../SideBarLayout";
import mainData from "../../static/mainData";
import CodeFormatter from "@/components/CodeFormatter";
import "./mainLayoutStyle.css";
import Head from "next/head";

export default function MainLayout() {
  const { id } = useParams();
  const currentIndex = mainData.findIndex((item) => item.id === id); // Hozirgi elementning indeksini topish
  const findedItem = mainData[currentIndex]; // Hozirgi elementni olish

  // Keyingi va oldingi elementlar uchun indekslarni olish
  const prevItem = mainData[currentIndex - 1]; // Oldingi element
  const nextItem = mainData[currentIndex + 1]; // Keyingi element

  return (
    <>
      <Head>
        <title>{"atama | " + findedItem.title}</title> {/* Title meta tag */}
        <meta name="description" content={findedItem.outDecription} />{" "}
        {/* Description meta tag */}
        {/* Qo'shimcha meta teglar */}
        <meta property="og:title" content={findedItem.title} />
        <meta property="og:description" content={findedItem.outDecription} />
      </Head>
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
          <CodeFormatter code={findedItem.example} />

          <div className="navigationButtons">
            {/* Previous button */}
            {prevItem && (
              <Link href={`/docs/${prevItem.id}`}>
                <button className="btn"> Oldingi</button>
              </Link>
            )}

            {/* Next button */}
            {nextItem && (
              <Link href={`/docs/${nextItem.id}`}>
                <button className="btn"> Keyingi</button>
              </Link>
            )}
          </div>
        </div>
      </SidebarLayout>
    </>
  );
}
