"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const btns = [
  { id: 1, color: "green", hex: "#28E98C", label: "Green" },
  { id: 2, color: "yellow", hex: "#E4AF12", label: "Yellow" },
  { id: 3, color: "orange", hex: "#fe6f1d", label: "Orange" },
  { id: 4, color: "sky", hex: "#14c5fd", label: "Sky" },
  { id: 5, color: "gray", hex: "#c0c0c0", label: "Gray" },
  { id: 6, color: "blue", hex: "#1338F3", label: "Blue" },
  { id: 7, color: "red", hex: "#F31313", label: "Red" },
  { id: 8, color: "mov", hex: "#FF99CC", label: "Mov" },
];
export default function ColorSwitcher() {
  const [theme, setTheme] = useState("green");
  useEffect(() => {
    document.documentElement.setAttribute("data-them", theme);
  }, [theme]);
  return (
    <div className="flex items-center justify-center gap-7 flex-wrap ">
      {btns.map((btn) => {
        const isActive = theme === btn.color;
        return (
          <Button
            key={btn.id}
            onClick={() => {
              setTheme(btn.color);
              setIsSettingOpen(!isSettingOpen);
            }}
            className={`w-10 h-10 rounded-full p-0 ${isActive ? "border-2 border-white" : ""}`}
            title={btn.label}
            style={{ backgroundColor: btn.hex }}
          />
        );
      })}
    </div>
  );
}
