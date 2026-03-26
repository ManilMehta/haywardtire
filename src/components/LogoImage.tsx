"use client";

import Image from "next/image";

export default function LogoImage({
  width = 400,
  height = 400,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Hayward Tire Logo"
      width={width}
      height={height}
      className={className}
      priority
      onError={(e) => {
        const container = (e.target as HTMLImageElement).parentElement;
        if (container) {
          container.innerHTML = `<div class="flex flex-col items-center justify-center text-center p-8"><div class="text-8xl font-black text-primary">HT</div><div class="text-2xl font-bold text-white mt-2">HAYWARD TIRE</div></div>`;
        }
      }}
    />
  );
}
