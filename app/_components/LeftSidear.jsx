"use client";
import { Button } from "@/components/ui/button";
import { SettingContext } from "@/context/SettingContext";
import { Facebook, Github, Instagram, Settings, Twitter } from "lucide-react";
import { useContext } from "react";

export default function LeftSidear() {
  const { setIsSettingOpen } = useContext(SettingContext);
  return (
    <div className="left-sidebar-position md:border border-color rounded-lg  md:p-7 text-white">
      <div
        className="fixed top-0 left-2.5 md:-top-4.5 md:absolute bg-[#1f1f1f] md:-left-4.5 border border-muted p-3 rounded-full cursor-pointer text-muted transition-colors duration-200 hover:text-primary hover:border-primary"
        onClick={() => setIsSettingOpen(true)}
      >
        <Settings className="w-4.5 h-4.5 " />
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between mb-7">
        <p className="text-4xl font-extrabold left-side-logo relative">Boda</p>
        <span className="text-sm capitalize">
          web desinger <br />& developer
        </span>
      </div>
      <div className="px-0 mb-12 flex justify-center items-center">
        <img
          src="/me_4.jpg"
          alt="me"
          className="w-52 md:w-3xs h-52 rounded-lg grayscale-25"
        />
      </div>
      <h3 className="text-lg md:text-2xl text-center mb-2 font-light">
        abdokhaled766@gmail.com
      </h3>
      <h3 className="text-lg md:text-2xl text-center mb-7 font-light">
        Based in Egypt, CA
      </h3>
      <p className="text-sm text-muted text-center mb-6">
        &copy; 2025 Boda, All Rights Reserved
      </p>
      <ul className="flex items-center gap-5 justify-center mb-7">
        <li>
          <a className="border border-muted w-12 h-12 flex items-center justify-center rounded-full text-muted hover:text-primary transition-colors duration-200 hover:border-primary cursor-pointer">
            <Instagram className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a className="border border-muted w-12 h-12 flex items-center justify-center rounded-full text-muted hover:text-primary transition-colors duration-200 hover:border-primary cursor-pointer">
            <Twitter className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a className="border border-muted w-12 h-12 flex items-center justify-center rounded-full text-muted hover:text-primary transition-colors duration-200 hover:border-primary cursor-pointer">
            <Facebook className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a className="border border-muted w-12 h-12 flex items-center justify-center rounded-full text-muted hover:text-primary transition-colors duration-200 hover:border-primary cursor-pointer">
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>

      <div className="text-center">
        <Button
          className={
            "py-6 md:w-full rounded-full text-lg uppercase text-black cursor-pointer hover:text-primary hover:bg-transparent transition-all duration-200 border border-primary"
          }
        >
          hire me!
        </Button>
      </div>
      <p className="text-xs text-muted mt-5 text-center capitalize">
        the inspiration design is{" "}
        <a
          href="https://wpriverthemes.com/drake"
          target="_blank"
          className="text-primary"
        >
          Drake
        </a>
      </p>
    </div>
  );
}
