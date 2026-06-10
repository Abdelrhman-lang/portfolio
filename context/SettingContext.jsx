"use client";
import { Children, createContext, useState } from "react";

export const SettingContext = createContext();

import React from "react";

export default function SettingProvider({ children }) {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  return (
    <SettingContext.Provider value={{ isSettingOpen, setIsSettingOpen }}>
      {children}
    </SettingContext.Provider>
  );
}
