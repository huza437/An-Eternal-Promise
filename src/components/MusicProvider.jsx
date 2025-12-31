"use client";

import { useEffect, useRef } from "react";

export default function MusicProvider({ children }) {
  const audioRef = useRef(null);

  useEffect(() => {
    window.startMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/bg.mp3"
        loop
        preload="auto"
      />
      {children}
    </>
  );
}
