import React from "react";
import Boxes from "../components/ui/background-boxes"; // Make sure this path is correct
import { cn } from "../../src/lib/utils"; // Ensure this utility function exists

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* Background mask to create a radial gradient effect */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes /> {/* This will render your animated boxes */}
      {/* Title text */}
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
       
      </h1>
      {/* Description text */}
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      
      </p>
    </div>
  );
}
