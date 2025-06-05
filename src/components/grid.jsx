import React, { useState } from "react";
import sparkle from "../assets/sparkle.png";
import sms from "../assets/sms.png";
import explora from "../assets/explora.png";
import chatbot from "../assets/chatbot.png";
import thecipher from "../assets/thecipher.png";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-32 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "SPARKLE",
    description:
      "Sparkle is a dynamic e-commerce platform built with the MERN stack, featuring a modern, responsive UI with React and Tailwind CSS. It includes secure JWT authentication, CRUD functionality, and seamless integration with MongoDB, providing an optimal shopping experience across devices.",
    image: sparkle,
    github: "https://github.com/yugalkaushik/sparkle",
    deployed: "https://sparkleyk.vercel.app/",
  },
  {
    title: "STUDENT MANAGEMENT SYSTEM",
    description:
      "This C++ project offers a streamlined solution for managing student and course data, featuring functionalities like student addition, course management, and enrollment tracking.",
    image: sms,
    github: "https://github.com/yugalkaushik/student-management",
  },
  {
    title: "NOVA",
    description:
      "Chatbot that suggests websites for a specific task, using an NLP-based approach for data prediction.",
    image: chatbot,
    github: "https://github.com/yugalkaushik/chatbot",
    deployed: "https://novachatbot.vercel.app",
  },
  {
    title: "THE CIPHER",
    description:
      "TheCipher is a nostalgic front-end web application that captures the look and feel of a 90s-era newspaper. Developed with TypeScript, this project is designed to evoke the aesthetic of vintage print media with modern code practices. The interface includes retro-style fonts, grayscale imagery, and a classic layout reminiscent of newspapers from 90s.",
    image: thecipher,
    github: "https://github.com/yugalkaushik/thecipher",
    deployed: "https://theciipher.vercel.app"
  },
  {
    title: "EXPLORA",
    description:
      "A comprehensive platform offering curated travel itineraries, insightful blogs, and recommended destinations to enhance your travel planning experience. Built with Next.js, TypeScript, and MongoDB for a scalable, efficient, and user-focused application.",
    image: explora,
    github: "https://github.com/yugalkaushik/explora",
    deployed: "https://letsexplora.vercel.app",
  },
];

const BentoGridItem = ({
  title,
  description,
  image,
  github,
  deployed,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`p-4 bg-white border-2 border-black rounded-xl shadow h-full flex flex-col ${className}`}
    >
      <div className="mb-4 border border-gray-700 rounded-xl">
        {!imageLoaded && <Skeleton />}
        <img
          src={image}
          alt={title}
          className={`w-full h-32 object-cover rounded-xl ${!imageLoaded ? "hidden" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="flex-grow">
        <div className="flex items-center space-x-2">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-sm text-neutral-700">{description}</p>
      </div>

      <div className="flex space-x-4 justify-center mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center hover:text-white border p-1 rounded-md hover:bg-black transition-colors"
        >
          GitHub
        </a>
        {deployed && (
          <a
            href={deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center hover:text-white border p-1 rounded-md hover:bg-black transition-colors"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          github={item.github}
          deployed={item.deployed}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
}
