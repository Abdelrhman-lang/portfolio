"use client";
import { SettingContext } from "@/context/SettingContext";
import { X } from "lucide-react";
import React, { useContext } from "react";
import ColorSwitcher from "./ColorSwitcher";

export default function SettingSidebar() {
  const { isSettingOpen, setIsSettingOpen } = useContext(SettingContext);

  return (
    <section
      className={`bg-[#1f1f1f] text-white w-3xs md:w-3xl p-10 h-full fixed top-0 z-50 transition-all duration-200  ${
        isSettingOpen ? "right-0" : "-right-[300%]"
      }`}
    >
      <div
        className="absolute top-5 right-5 cursor-pointer"
        onClick={() => setIsSettingOpen(false)}
      >
        <X className="w-5 h-5" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl md:text-4xl font-light mb-10 md:mb-20">
          Configuration
        </h3>
        <p className="uppercase mb-6">colors</p>
        <ColorSwitcher />
      </div>
    </section>
  );
}
