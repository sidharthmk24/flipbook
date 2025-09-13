import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

type PageProps = {
  src: string;
  alt: string;
  number: number;
};

const Page = React.forwardRef<HTMLDivElement, PageProps>(({ src, alt, number }, ref) => {
  return (
    <div
      ref={ref}
      className="relative overflow-hidden select-none"
      aria-label={`Page ${number}`}
    >
      <div className="w-full h-full p-6" style={{ background: "#f2e6d6" }}>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-600">
        {number}
      </div>
    </div>
  );
});
Page.displayName = "Page";

type FlipbookProps = {
  pages: string[];
};

export default function Flipbook({ pages }: FlipbookProps) {
  const bookRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="flex justify-center">
        <HTMLFlipBook
          ref={bookRef}
          width={isMobile ? 320 : 1100}
          height={isMobile ? 500 : 600}
          size="stretch"
          minWidth={300}
          maxWidth={1400}
          minHeight={400}
          maxHeight={900}
          drawShadow={true}
          maxShadowOpacity={0.25}
          showCover={false}
          mobileScrollSupport={true}
          flippingTime={600}
          usePortrait={false}
          startPage={0}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          className="rounded-md"
          style={{}}
        >
          {pages.map((src, i) => (
            <Page key={i} src={src} alt={`Page ${i + 1}`} number={i + 1} />
          ))}
        </HTMLFlipBook>
      </div>

      {/* Caption */}
      <p className="mt-10 text-center text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
        This flipbook honours Dr. Ramdas M Pai and his invaluable contributions,
        highlighting remarkable milestones through archival photographs and
        heartfelt reflections that showcase his passion, vision, and dedication
        to building the modern Manipal.
      </p>
    </div>
  );
}
