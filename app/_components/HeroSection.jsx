"use client";
import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { ArrowBigDown, Home } from "lucide-react";
import { MenuContext } from "@/context/MenuContext";

export default function HeroSectio() {
  const { setIsMenuOpen } = useContext(MenuContext);
  return (
    <section className="py-16" id="hero">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <div
            onClick={() => setIsMenuOpen(true)}
            className="bg-[#1f1f1f] w-12 h-12 border border-[#565656] hover:border-primary transition-all duration-200 group rounded-full flex xl:hidden items-center justify-center absolute top-5 right-2.5 md:top-0 md:right-0 lg:top-5 lg:right-10 cursor-pointer"
          >
            <div>
              <span className="w-5 h-0.5 bg-white mb-1 block transition-all duration-200 group-hover:bg-primary"></span>
              <span className="w-5 h-0.5 bg-white group-hover:bg-primary block transition-all duration-200"></span>
            </div>
          </div>
          <SectionTitle
            title={"introduce"}
            icon={<Home className="w-3.5 h-3.5" />}
          />
          <h1 className="text-3xl  md:text-[78px] md:leading-24 tracking-[-0.2px] font-light mb-11">
            Say Hi from <span className="text-primary">Boda</span>,<br /> Web
            Designer <br /> and Developer
          </h1>
          <p className="leading-[1.7] text-muted mb-8">
            I design and code beautifully simple things and i love what i do.
            <br />
            Just simple like that!
          </p>
          <div className="w-full flex justify-center md:justify-end">
            <a
              href=""
              className="border rounded-full p-3 border-color relative"
            >
              <img
                src="/round-text.png"
                alt="round-text"
                className="rotate-img"
              />
              <span className="arrow-center">
                <ArrowBigDown />
              </span>
            </a>
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center  gap-24 mb-12">
            <div>
              <span className="block mb-10 text-7xl text-primary">1+</span>
              <span className="text-muted uppercase">
                years of
                <br />
                experience
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="block mb-10 text-7xl text-primary">2+</span>
              <span className="text-muted uppercase">
                project completed on
                <br />
                15 countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
