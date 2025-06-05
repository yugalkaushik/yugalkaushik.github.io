import React from "react";
import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import mail from "../assets/mail.png";

export function Contact() {
  const socialLinks = [
    { src: linkedin, url: "https://www.linkedin.com/in/yugalkaushik" },
    { src: github, url: "https://github.com/yugalkaushik" },
    { src: twitter, url: "https://twitter.com/yugalkaushikk" },
  ];

  return (
    <div className="flex flex-col items-center mt-12 lg:mt-40 z-50">
      <h5 className="mb-2 text-gray-500">Get In Touch</h5>
      <h1 className="text-3xl lg:text-4xl font-roboto font-semibold">
        CONTACT ME
      </h1>
      <div className="flex justify-center items-center mb-2">
        {socialLinks.map((social, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white border-black border flex-shrink-0 overflow-hidden"
          >
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <img
                src={social.src}
                alt="Socials"
                className="w-14 h-14 md:w-12 md:h-12 lg:w-32 lg:h-32 object-cover"
              />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="py-1 m-2 flex flex-wrap border rounded-xl text-black justify-center">
        <div className="flex items-center justify-center transition-transform duration-300 hover:scale-125">
          <img src={mail} alt="mail" className="pl-3 lg:pl-8" />
          <a className="ml-2 p-1 pr-3 lg:pr-8">yugalkaushik14@gmail.com</a>
        </div>
      </div>
      <div className="py-4 w-2/3 lg:w-1/3 mb-1 lg:mb-2">
        <form
          action="https://formsubmit.co/yugalkaushik14@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 rounded-lg border  border-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-2 rounded-lg border border-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="p-2 rounded-lg border border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 border border-black text-black rounded-lg hover:bg-black hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
