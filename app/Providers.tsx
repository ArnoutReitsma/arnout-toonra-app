"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <button
        className="bg-slate-600 m-2"
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("light");
          console.log(theme);
        }}
      >
        {" theme "}
      </button>

      <button
        className="bg-slate-600 m-2"
        onClick={() => {
          console.log("light");
          setTheme("light");
        }}
      >
        {" light "}
      </button>
    </ThemeProvider>
  );
}

export default Providers;
