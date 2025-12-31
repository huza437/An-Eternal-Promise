"use client";

import "./globals.css";
import { useEffect, useRef } from "react";

export const metadata = {
  title: "Something Just for You!",
  description: "A little surprise made just for you, open it with a smile ❤️",
};

export default function RootLayout({ children }) {
  const audioRef = useRef(null);

  useEffect(() => {
    // expose music starter globally (only once)
    window.startMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25; // soft background
        audioRef.current.play().catch(() => {});
      }
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Background music */}
        <audio
          ref={audioRef}
          src="/audio/bg.mp3"
          loop
          preload="auto"
        />

        {children}
      </body>
    </html>
  );
}
