"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
export default function ResumeSection() {
  return (
    <section className="py-24" id="resume">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <SectionTitle
            title={"resume"}
            icon={<Briefcase className="w-3.5 h-3.5" />}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <SectionHeading title={"Education &"} span={"Experience"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="ps-16 pb-20 relative ex"
          >
            <span className="text-muted block mb-7">
              2022 - <span className="text-primary">Present</span>
            </span>
            <h4 className="text-2xl mb-1 font-light">
              Front-End Next-Js Developer
            </h4>
            <p className="text-sm mb-5 text-muted">Freelance</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="ps-16 pb-20 relative ex"
          >
            <span className="text-muted block mb-7">2023 - 2024</span>
            <h4 className="text-2xl mb-1 font-light">
              Software Development Engineer - Front End Developer
            </h4>
            <p className="text-sm mb-5 text-muted">Instant Software</p>
            <h4 className="text-2xl mb-1 font-light">Front-End Developer</h4>
            <p className="text-sm text-muted">Teleperformace</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 110 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="ps-16 pb-20 relative ex2"
          >
            <span className="text-muted block mb-7">2017 - 2022</span>
            <h4 className="text-2xl mb-1 font-light">
              Bachelor in Software Engineering
            </h4>
            <p className="text-sm mb-5 text-muted">Grade Good</p>
            <h4 className="text-2xl mb-1 font-light">Front End Diploma</h4>
            <p className="text-sm text-muted mb-5">Instant Software</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
