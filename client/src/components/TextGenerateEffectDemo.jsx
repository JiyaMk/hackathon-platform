
// File: src/components/TextGenerateEffectDemo.jsx
import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect"; // Ensure the path is correct

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

const TextGenerateEffectDemo = () => {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
};

export default TextGenerateEffectDemo;
