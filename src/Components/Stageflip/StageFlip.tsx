import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// dynamic import — client-side only
const HTMLFlipBook = dynamic(() => import('react-pageflip').then((m) => m.default), { ssr: false });

type SimpleFlipbookProps = {
  pages: string[];
  width?: number;
  height?: number;
};

const Page = React.forwardRef<HTMLDivElement, { src: string; alt: string; side?: 'left' | 'right' }>(
  ({ src, alt, side = 'left' }, ref) => (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full h-full bg-[#fff1d6] flex justify-center items-center shadow-inner rounded-sm overflow-hidden"
      style={{
        boxShadow: 'inset 0 0 15px rgba(0,0,0,0.1)',
      }}
    >
      <div
        className="w-[100%] h-[70%] flex justify-center items-center px-4 mt-[4rem]"
        style={{
          backgroundColor: '#737373',
          boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain select-none"
          draggable={false}
        />
      </div>
    </div>
  )
);
Page.displayName = 'Page';

export default function StageFlip({ pages, width = 600, height = 500 }: SimpleFlipbookProps) {
  return (
    <div className="w-full flex justify-center flipbook-container">
      <HTMLFlipBook
        width={width}
        height={height}
        // size="stretch"
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-lg rounded-md"
      >
        {pages.map((src, i) => (
          <Page key={i} src={src} alt={`page-${i + 1}`} />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
