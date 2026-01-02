import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div
      className={`min-h-dvh bg-black text-white flex items-center justify-center p-6 sm:p-10 ${oswald.className}`}
    >
      <main className="w-full max-w-md sm:max-w-xl lg:max-w-2xl border-2 sm:border-4 border-red-600 p-6 sm:p-10 lg:p-12">
        {/* Logo/Title */}
        <div className="text-center mb-6 sm:mb-8">
          {/* NS Flag Logo - Red with Black Cross */}
          <div className="inline-block mb-4">
            <svg
              viewBox="0 0 100 80"
              className="w-16 h-12 sm:w-20 sm:h-16"
              fill="none"
            >
              {/* Pole */}
              <rect x="12" y="10" width="4" height="60" fill="#dc2626" />
              <circle cx="14" cy="10" r="5" fill="#dc2626" />

              {/* Waving Flag */}
              <path
                d="M18 14
                   Q35 10, 50 14
                   Q65 18, 82 12
                   L84 14
                   L82 48
                   Q65 54, 50 50
                   Q35 46, 18 50
                   Z"
                fill="#dc2626"
              />

              {/* Cross - Vertical */}
              <rect x="46" y="20" width="8" height="24" fill="black" />
              {/* Cross - Horizontal */}
              <rect x="38" y="28" width="24" height="8" fill="black" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.25em] text-red-500 mb-2">
            LOCKEDIN LAIR
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wider border-b-2 border-red-600 pb-1 inline-block">
            HOUSE RULES
          </h2>
        </div>

        {/* Rules - Centered */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-center text-sm sm:text-base lg:text-lg">
          <Rule number={1}>
            <Highlight>LOCK IN TOGETHER</Highlight>. SHOW UP, GET SHIT DONE.
          </Rule>

          <Rule number={2}>
            <Highlight>WORK ONLY</Highlight>. THIS IS NOT A HANGOUT SPOT.
          </Rule>

          <Rule number={3}>
            ONCE YOU&apos;RE IN, YOU&apos;RE <Highlight>LOCKED IN</Highlight>. STAY TILL YOU&apos;RE DONE.
          </Rule>

          <Rule number={4}>
            <Highlight>EVERYONE IS WELCOME</Highlight>. BRING YOUR LAPTOP AND FOCUS.
          </Rule>

          <Rule number={5}>
            <Highlight>NO TRASH-TALKING</Highlight>. SUPPORT EACH OTHER. WE WIN TOGETHER.
          </Rule>

          <Rule number={6}>
            RESPECT THE SPACE. RESPECT THE <Highlight>SILENCE</Highlight>.
          </Rule>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 text-center text-red-500 text-xs tracking-[0.3em]">
          NO EXCUSES. JUST <Highlight>RESULTS</Highlight>.
        </div>
      </main>
    </div>
  );
}

function Rule({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <p>
      <span className="text-red-500 font-bold">{number}.</span>{" "}
      {children}
    </p>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-red-600 text-white px-1 font-bold">{children}</span>
  );
}
