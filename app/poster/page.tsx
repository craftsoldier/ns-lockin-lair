"use client";

import { Oswald } from "next/font/google";
import { QRCodeSVG } from "qrcode.react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Poster() {
  return (
    <div
      className={`min-h-screen bg-black flex items-center justify-center p-8 ${oswald.className}`}
    >
      {/* Poster Container - A4 ratio approximately */}
      <div className="w-full max-w-md aspect-[3/4] bg-black border-4 border-red-600 p-8 flex flex-col items-center justify-between relative overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600 -translate-x-[2px] -translate-y-[2px]" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600 translate-x-[2px] -translate-y-[2px]" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600 -translate-x-[2px] translate-y-[2px]" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-600 translate-x-[2px] translate-y-[2px]" />

        {/* Header */}
        <div className="text-center z-10">
          {/* Flag Logo */}
          <svg
            viewBox="0 0 100 80"
            className="w-16 h-12 mx-auto mb-4"
            fill="none"
          >
            <rect x="12" y="10" width="4" height="60" fill="#dc2626" />
            <circle cx="14" cy="10" r="5" fill="#dc2626" />
            <path
              d="M18 14 Q35 10, 50 14 Q65 18, 82 12 L84 14 L82 48 Q65 54, 50 50 Q35 46, 18 50 Z"
              fill="#dc2626"
            />
            <rect x="46" y="20" width="8" height="24" fill="black" />
            <rect x="38" y="28" width="24" height="8" fill="black" />
          </svg>

          <h1 className="text-3xl font-bold tracking-[0.2em] text-red-500 mb-1">
            LOCKIN LAIR
          </h1>
          <p className="text-white/60 text-sm tracking-widest">CO-WORKING SPACE</p>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center z-10">
          {/* Artistic QR wrapper */}
          <div className="relative">
            {/* Glowing effect behind QR */}
            <div className="absolute inset-0 bg-red-600/20 blur-xl scale-110" />

            {/* QR with custom styling */}
            <div className="relative bg-black p-4 border-2 border-red-600 transform rotate-0 hover:rotate-1 transition-transform">
              <QRCodeSVG
                value="https://ns-lockin-lair.vercel.app"
                size={180}
                bgColor="#000000"
                fgColor="#dc2626"
                level="H"
                includeMargin={false}
              />
              {/* Center logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black p-2 border border-red-600">
                  <span className="text-red-500 font-bold text-xs tracking-wider">
                    SCAN
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative lines */}
            <div className="absolute -left-4 top-1/2 w-3 h-[2px] bg-red-600" />
            <div className="absolute -right-4 top-1/2 w-3 h-[2px] bg-red-600" />
            <div className="absolute left-1/2 -top-4 h-3 w-[2px] bg-red-600" />
            <div className="absolute left-1/2 -bottom-4 h-3 w-[2px] bg-red-600" />
          </div>

          <p className="text-white mt-6 text-lg tracking-widest font-bold">
            DO NOT <span className="text-red-500">DISTURB</span>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center z-10">
          <p className="text-red-500 text-xs tracking-[0.3em] mb-2">
            HOUSE RULES INSIDE
          </p>
          <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
            <span className="w-8 h-[1px] bg-white/40" />
            <span>NO EXCUSES</span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>
        </div>

        {/* Background texture effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(220,38,38,0.1) 2px,
              rgba(220,38,38,0.1) 4px
            )`
          }} />
        </div>
      </div>
    </div>
  );
}
