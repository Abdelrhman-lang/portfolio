"use client";
import SectionTitle from "./SectionTitle";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";
export default function ContactSection() {
  const [state, handleSubmit] = useForm("xovnpnne");
  const formRef = useRef();
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      Swal.fire({
        title: "Thank you",
        text: "Your Message Sent to me!",
        icon: "success",
      });
      formRef.current.reset();
    }
  }, [state.succeeded]);
  return (
    <section className="py-24" id="contact">
      <div className="custom-container text-white">
        <div className="max-w-[770px] w-full ms-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <SectionTitle
              title={"contact"}
              icon={<Mail className="w-3.5 h-3.5" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <SectionHeading title={"Let's Work"} span={"Together!"} />
          </motion.div>
          <h4 className="text-lg md:text-2xl font-light mb-14">
            abdokhaled766@gmail.com
          </h4>
          <form ref={formRef} onSubmit={handleSubmit} action="">
            <div className="grid grid-cols-1 gap-y-5  md:grid-cols-2 mb-10">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="uppercase text-xs mb-0.5">
                  full name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Your Full Name"
                  className="border-none focus:outline-none w-full text-lg"
                />
                <ValidationError
                  prefix="Fullname"
                  field="fullname"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="uppercase text-xs mb-0.5">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email Adress"
                  className="border-none focus:outline-none w-full text-lg"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="phone" className="uppercase text-xs mb-0.5">
                phone number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                className="border-none focus:outline-none w-full text-lg"
              />
            </div>
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <div className="flex flex-col">
              <label htmlFor="message" className="uppercase text-xs mb-0.5">
                Message
              </label>
              <textarea
                placeholder="Enter Your Message"
                className="border-none focus:outline-none w-full text-lg resize-none h-52"
                name="message"
                id="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button
              type="submit"
              disabled={state.submitting}
              className={
                "!px-16 !py-6 rounded-full text-black uppercase border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 cursor-pointer"
              }
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
