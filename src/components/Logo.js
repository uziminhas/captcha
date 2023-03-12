import { useState } from "react";

export default function Logo() {
  const themes = ["ig", "twt", "fb", "tik", "yt"];
  const [theme, setTheme] = useState("ig");
  return (
    <h1
      className="text-2xl xl:text-3xl font-bold cursor-pointer select-none"
      onClick={() =>
        setTheme(themes[Math.floor(Math.random() * themes.length)])
      }
    >
      {theme === "ig" ? (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            captiongen
          </span>
          <span>.io</span>
        </>
      ) : theme === "fb" ? (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-blue-500">captiongen</span>
          <span>.io</span>
        </>
      ) : theme === "twt" ? (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">captiongen</span>
          <span>.io</span>
        </>
      ) : theme === "yt" ? (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">captiongen</span>
          <span>.io</span>
        </>
      ) : (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">captiongen</span>
          <span>.io</span>
        </>
      )}
    </h1>
  );
}
