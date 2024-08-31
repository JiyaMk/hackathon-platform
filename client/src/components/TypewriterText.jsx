import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterText = () => {
  return (
    <div className="fixed bottom-0 w-full flex  text-1l md:text-2xl justify-center text-white font-roboto">
      <Typewriter
        text="The future of hackathon management is here."
        cursorColor="#FFFFFF"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
        className="text-white font-roboto"
      />
    </div>
  );
};

export default TypewriterText;
