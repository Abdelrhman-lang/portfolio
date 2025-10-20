"use client";
import SectionTitle from "./SectionTitle";
import { GripVerticalIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function PortfolioSection() {
  return (
    <section className="py-24" id="portfolio">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <div>
            <SectionTitle
              title={"portfolio"}
              icon={<GripVerticalIcon className="w-3.5 h-3.5" />}
            />
          </div>
          <div>
            <SectionHeading title={"Featured"} span={"Projects"} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="mb-16"
          >
            <div className="relative mb-8">
              <img
                src="/skillCode.png"
                alt="portfolio-img"
                className="rounded-lg"
              />
              <div className="absoulte-btns hidden md:flex items-center gap-4">
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Next Js
                </Button>
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Tailwaind Css
                </Button>
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Neon DB
                </Button>
              </div>
            </div>
            <a
              href="https://story-kids-5u9v.vercel.app/"
              target="_blank"
              className="text-2xl font-light hover:text-primary transition-all duration-200"
            >
              Skill Code Academy - eCommerce Website For Courses
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="mb-16"
          >
            <div className="relative mb-8">
              <img
                src="/mobilex.png"
                alt="portfolio-img"
                className="rounded-lg"
              />
              <div className="absoulte-btns md:flex items-center gap-4 hidden">
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Next Js
                </Button>
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Tailwaind Css
                </Button>
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Neon DB
                </Button>
              </div>
            </div>
            <a
              href="https://mobile-x-nu.vercel.app/"
              target="_blank"
              className="text-2xl font-light hover:text-primary transition-all duration-200"
            >
              MobileX - E-commerce Website For Selling Tech Products
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="mb-16"
          >
            <div className="relative mb-8">
              <img
                src="/kidsStory.png"
                alt="portfolio-img"
                className="rounded-lg"
              />
              <div className="absoulte-btns md:flex items-center gap-4 hidden">
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Next Js
                </Button>
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Tailwaind Css
                </Button>
                <Button
                  className={
                    "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                  }
                >
                  Gemini Ai
                </Button>
              </div>
            </div>
            <a
              href="https://story-kids.vercel.app/"
              target="_blank"
              className="text-2xl font-light hover:text-primary transition-all duration-200"
            >
              Kids Story App - Generating Your Story Using Gemini Ai
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
