import { useState } from "react";

export default function Logo() {
  const homepageUrl = "https://www.captiongen.com";

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <h1
      className="text-2xl xl:text-3xl font-bold cursor-pointer select-none"
      onClick={handleLogoClick}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        captiongen
      </span>
      <span></span>
    </h1>
  );
}
