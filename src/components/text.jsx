import React from "react";

const Text = () => {
  const paragraph =
    "I bring a unique blend of creativity and technical expertise to develop exceptional and innovative software experiences.";

  const renderWords = (text, additionalClasses) => {
    return text.split(" ").map((word, idx) => (
      <span
        key={idx}
        className={`animate-fadeInDelayed ${additionalClasses}`}
        style={{ animationDelay: `${idx * 0.2}s` }}
      >
        {word}{" "}
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center mt-20 sm:mt-28 md:mt-32 lg:ml-40 lg:mt-56 lg:px-0 z-40 w-full sm:w-10/12 md:w-8/12 lg:w-5/12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-9xl font-teko text-black">
        Hi, I'm
      </h1>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-teko text-purple-800">
        YUGAL KAUSHIK
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-600">
        {renderWords(paragraph, "text-gray-600")}
      </p>
    </div>
  );
};

export default Text;
