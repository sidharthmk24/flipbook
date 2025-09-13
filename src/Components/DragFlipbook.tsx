"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page1 from "./Flipbook/Page1";

export default function DragFlipbook({ pages = [] }: { pages: string[] }) {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 flipbook-container">
      <HTMLFlipBook
        width={600}
        height={500}
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={800}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-lg"
      >
        {pages.map((src, i) => (
          <Page1
            key={i}
            src={src}
            alt={`page-${i + 1}`}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
