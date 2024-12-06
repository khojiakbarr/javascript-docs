"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import mainData from "../static/mainData";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

export default function SidebarLayout({ children }) {
  const { id } = useParams();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(id); // Aktiv element uchun holat

  const handleNavigation = (url) => {
    setActiveItem(url); // Aktiv elementni o'zgartirish
    router.push(url); // URL ni o'zgartirish
  };

  return (
    <SidebarProvider>
      <div className="flex w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader
            style={{
              paddingRight: "20px",
            }}
          >
            <h2
              className="text-xl font-semibold border-b border-[var(--brand)] "
              style={{
                padding: "0 0 10px 10px",
              }}
            >
              atama
            </h2>
          </SidebarHeader>
          <SidebarContent
            style={{
              paddingLeft: "10px",
              paddingRight: "20px",
            }}
          >
            <SidebarMenu
              style={{
                borderLeft: "1px solid var(--brand)",
                paddingLeft: "10px",
              }}
            >
              {mainData.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.id}
                      onClick={(e) => {
                        e.preventDefault(); // Default linkni bloklash
                        handleNavigation(item.id);
                      }}
                      className={`flex items-center space-x-2 rounded-md  `}
                      style={{
                        background:
                          activeItem === item.id && "hsl(var(--hover-item))",
                      }}
                    >
                      {/* <item.icon className="mr-2 h-4 w-4" /> */}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <p className="text-sm text-muted-foreground">
              © 2024 atama Company
            </p>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        {/* Kontent maydoni */}
        <main className="p-6 w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}
