"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function ColorSwitcher() {
  const [theme, setTheme] = useState("primary");
  useEffect(() => {
    document.documentElement.setAttribute("data-them", theme);
  }, [theme]);
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <Button
        onClick={() => setTheme("primary")}
        className="bg-[#28E98C] w-10 h-10 rounded-full p-0 hover:border hover:border-[#28E98C]"
      />
      <Button
        onClick={() => setTheme("yellow")}
        className="bg-[#E4AF12] w-10 h-10 rounded-full p-0"
      />
      <Button
        onClick={() => setTheme("orange")}
        className="bg-[#fe6f1d] w-10 h-10 rounded-full p-0"
      />
      <Button
        onClick={() => setTheme("sky")}
        className="bg-[#14c5fd] w-10 h-10 rounded-full p-0"
      />
      <Button
        onClick={() => setTheme("gray")}
        className="bg-[#c0c0c0] w-10 h-10 rounded-full p-0"
      />
      <Button
        onClick={() => setTheme("blue")}
        className="bg-[#1338F3] w-10 h-10 rounded-full p-0"
      />
      <Button
        onClick={() => setTheme("red")}
        className="bg-[#F31313] w-10 h-10 rounded-full p-0"
      />
      <Button
        onClick={() => setTheme("mov")}
        className="bg-[#FF99CC] w-10 h-10 rounded-full p-0"
      />
    </div>
  );
}
