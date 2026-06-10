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
      className={`fixed z-50 top-0 right-0 bottom-0 bg-accent/10 w-full h-full ${isMenuOpen || isSettingOpen ? "flex" : "hidden"}`}
    ></div>
  );
}
