"use client";
import SectionTitle from "./SectionTitle";
import { Text } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
export default function SkillsSection() {
  return (
    <section className="py-24" id="skills">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <div>
            <SectionTitle
              title={"my skills"}
              icon={<Text className="w-3.5 h-3.5" />}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <SectionHeading title={"My"} span={"Advantages"} />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <div className="border border-[#656565] flex flex-col items-center justify-center py-10 rounded-full mb-5">
                <img src="/html.png" alt="html-img" className="mb-8" />
                <h2 className="text-primary text-3xl">92%</h2>
              </div>
              <p className="text-center capitalize">html</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <div className="border border-[#656565] flex flex-col items-center justify-center py-10 rounded-full mb-5">
                <img src="/css.png" alt="html-img" className="mb-8" />
                <h2 className="text-primary text-3xl">85%</h2>
              </div>
              <p className="text-center capitalize">css</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <div className="border border-[#656565] flex flex-col items-center justify-center py-10 rounded-full mb-5">
                <img src="/js.png" alt="html-img" className="mb-8" />
                <h2 className="text-primary text-3xl">80%</h2>
              </div>
              <p className="text-center capitalize">javascript</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <div className="border border-[#656565] flex flex-col items-center justify-center py-10 rounded-full mb-5">
                <img src="/re.png" alt="html-img" className="mb-8" />
                <h2 className="text-primary text-3xl">90%</h2>
              </div>
              <p className="text-center capitalize">react</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <div className="border border-[#656565] flex flex-col items-center justify-center py-10 rounded-full mb-5">
                <img src="/next.png" alt="html-img" className="mb-8" />
                <h2 className="text-primary text-3xl">75%</h2>
              </div>
              <p className="text-center capitalize">Next</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
