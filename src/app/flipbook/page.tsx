"use client";

import DragFlipbook from "@/Components/DragFlipbook";
import Iframe from "@/Components/Iframe/Iframe";
import StageFlip from "@/Components/Stageflip/StageFlip";
import React from "react";

const Page = () => {
  return (
    <>
    <Iframe/>
    
    <div className="flex justify-center items-center w-full min-h-screen bg-black">


      <StageFlip
        pages={[
          "/magazine/page1.webp",
          "/magazine/page2.webp",
          "/magazine/page3.webp",
          "/magazine/page4.webp",
         "/magazine/page1.webp",
          "/magazine/page2.webp",
          "/magazine/page3.webp",
          "/magazine/page4.webp",
        ]}
      />
    </div>
    </>
  );
};

export default Page;
