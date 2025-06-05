import React from "react";
import avatar from "../assets/avatar.png";
import Text from "./text";
import profile from "../assets/profile.jpg";
import BentoGrid from "./grid";
import Skills from "./skills";
import { Contact } from "./contact";

const Avatar = ({ src }) => {
  return (
    <img
      src={src}
      alt="YUGAL KAUSHIK"
      className="w-12 h-12 object-cover rounded-3xl"
    />
  );
};

const Landing = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-50 text-white z-20">
        <div className="container flex items-center">
          <div className="ml-4 md:ml-0 lg:ml-10 lg:mt-2 flex-1">
            <Avatar src={avatar} />
          </div>
        </div>
      </nav>
      <div className="flex flex-col mt-1 md:mt-2 md:flex-row px-4 md:px-8 lg:px-0">
        <Text />
        <div className="relative mt-6 lg:mt-40 lg:ml-40 flex justify-center items-center w-full lg:w-auto">
          <img src={profile} className="lg:h-96 rounded-3xl" alt="Profile" />
        </div>
      </div>
      <div>
        <Skills />
      </div>
      <div className="px-4 lg:px-0 lg:mb-24">
        <div className="flex flex-col items-center mt-10 lg:mt-24 mb-6">
          <h5 className="mb-2 text-gray-500">Browse My</h5>
          <h1 className="text-3xl lg:text-4xl font-roboto font-semibold">
            PROJECTS
          </h1>
        </div>
        <BentoGrid />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
