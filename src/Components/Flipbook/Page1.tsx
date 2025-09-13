import React from "react";

type PageProps = {
    src: string;
    alt: string;
    side: "left" | "right";
};

const Page1 = React.forwardRef<HTMLDivElement, PageProps>(
    ({ src, alt, side }, ref) => {
        return (
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className="w-full h-full bg-[#f1d8b7] flex justify-center items-center"
            >
                {/* Grey strip wrapper */}
                <div className=" bg-[#7c7d7c]">
                    <img
                        src={src}
                        alt={alt}
                        className={`max-h-[90%] object-contain py-6 ${side === "left" ? "pl-0 pr-4" : "pr-0 pl-4"
                            }`}
                        draggable={false}
                    />
                </div>
            </div>

        );
    }
);

Page1.displayName = "Page1";
export default Page1;
