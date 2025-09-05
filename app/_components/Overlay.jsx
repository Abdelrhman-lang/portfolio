"use client";
import { MenuContext } from "@/context/MenuContext";
import { SettingContext } from "@/context/SettingContext";
import React, { useContext } from "react";

export default function Overlay() {
  const { isSettingOpen, setIsSettingOpen } = useContext(SettingContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  return (
    <div
      onClick={() => {
        setIsSettingOpen(false);
        setIsMenuOpen(false);
      }}
      className={`fixed -z-10 top-0 right-0 bottom-0 bg-[#3a3a3a] w-full h-full ${
        isSettingOpen || isMenuOpen ? "block" : "hidden"
      }`}
    ></div>
  );
}
