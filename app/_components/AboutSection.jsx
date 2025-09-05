"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { User } from "lucide-react";
export default function AboutSection() {
  return (
    <section className="py-24" id="about">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <SectionTitle
              title={"about"}
              icon={<User className="w-3.5 h-3.5" />}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="font-light text-5xl leading-14 mb-8"
          >
            Every great design begin with
            <br /> an even <span className="text-primary">better story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="text-muted leading-8"
          >
            Since beginning my journey as a freelance designer nearly 2 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chopsone design
            problem at a time
          </motion.p>
        </div>
      </div>
    </section>
  );
}
