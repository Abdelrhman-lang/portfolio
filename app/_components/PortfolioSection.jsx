"use client";
import SectionTitle from "./SectionTitle";
import { GripVerticalIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    img: "/1.png",
    stack: [
      { id: 1, name: "Next js" },
      { id: 2, name: "Tailwaind CSS" },
      { id: 3, name: "Clerk" },
    ],
    link: "https://beaux-cosmo-store.vercel.app/",
    name: "Beaux - Cosmo Store",
  },
  {
    id: 2,
    img: "/mobilex.png",
    stack: [
      { id: 1, name: "Next Js" },
      { id: 2, name: "Tailwaind CSS" },
      { id: 3, name: "Redux" },
    ],
    link: "https://mobile-x-nu.vercel.app/",
    name: "MobileX - Mobile Shop",
  },
  {
    id: 3,
    img: "/3mory.png",
    stack: [
      { id: 1, name: "Next Js" },
      { id: 2, name: "Tailwaind CSS" },
      { id: 3, name: "Framer Motion" },
    ],
    link: "https://3mory.vercel.app/",
    name: "3mory Brand - Ecommerce Shoes and Handbags",
  },
];
export default function PortfolioSection() {
  return (
    <section className="py-24" id="portfolio">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto padding">
          <div>
            <SectionTitle
              title={"portfolio"}
              icon={<GripVerticalIcon className="w-3.5 h-3.5" />}
            />
          </div>
          <div>
            <SectionHeading title={"Featured"} span={"Projects"} />
          </div>
          {projects.map((project) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
                className="mb-16"
              >
                <div className="relative mb-8">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-lg"
                  />
                  <div className="absoulte-btns md:flex items-center gap-4 hidden">
                    {project.stack.map((s) => {
                      return (
                        <Button
                          className={
                            "!bg-[#1f1f1f] px-6 rounded-full border border-[#1f1f1f] hover:!bg-white hover:text-black cursor-pointer"
                          }
                          key={s.id}
                        >
                          {s.name}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-2xl font-light hover:text-primary transition-all duration-200"
                >
                  {project.name}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
