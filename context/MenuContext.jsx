"use client";

import { createContext, useState } from "react";

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
