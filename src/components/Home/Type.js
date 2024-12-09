import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developer!!",
          "Frontend Developer!!",
          "Software Developer!!",
          "Java Full Stack Developer!!",
          "Javascript Developer!!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
