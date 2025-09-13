"use client"; // if using Next.js 13+ with app router

import React from "react";

export default function Iframe(){
  return(
    <>
    
<div style={{ position: "relative", width: "100%", height: "700px" }}>
<iframe
  className="w-full md:w-full h-[600px] md:h-[700px] shadow-lg rounded-md"
  src="https://online.fliphtml5.com/mmind3266/ggte/"
  allowTransparency
  allowFullScreen
></iframe>
  </div>    </>
  )
}

