// components/card.tsx
import React from "react";

export function Card({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-xl shadow-md bg-white group block"
    >
      {/* Background kuning animasi saat hover */}
      <div className="absolute left-1/2 top-0 h-full w-0 bg-yellow-400 z-0 transition-all duration-500 group-hover:w-full group-hover:left-0" />

      {/* Konten Card */}
      <div className="relative z-10 flex items-center space-x-4 p-4 transition-colors duration-500 group-hover:text-white">
        <div className="text-3xl">{icon}</div>
        <div className="text-sm text-black font-medium">{text}</div>
      </div>
    </a>
  );
}
