"use client";
import SectionTitle from "./SectionTitle";
import { LucideRocket, ShapesIcon, Tag, Telescope } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
export default function ServicesSection() {
  const boxs = [
    {
      id: 1,
      title: "Website Design",
      des: "I created digital products with unique ideas.",
      icon: <Telescope className="text-primary" />,
    },
    {
      id: 2,
      title: "Development",
      des: "I build website go live with Framer, Next Js or React",
      icon: <Tag className="text-primary" />,
    },
    {
      id: 3,
      title: "SEO/Marketing",
      des: "Increase the traffic for your website with SEO optimized",
      icon: <LucideRocket className="text-primary" />,
    },
  ];
  return (
    <section className="py-24" id="services">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <div>
            <SectionTitle
              title={"services"}
              icon={<ShapesIcon className="w-3.5 h-3.5" />}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <SectionHeading title={"My"} span={"Specializations"} />
          </motion.div>
          <div>
            {boxs.map((box) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ amount: 0.2 }}
                  key={box.id}
                  className="border border-[#656565] mb-2.5 rounded-lg py-11 px-12 hover:border-primary transition-all duration-300"
                >
                  <h4 className="text-2xl font-light mb-2 flex items-center justify-between">
                    {box.title} {box.icon}
                  </h4>
                  <p className="text-sm mb-7 text-muted">{box.des}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
