import Link from "next/link";
import Image from "next/image";
import type ISigning from "@/types/ISigning";

interface SigningCardProps {
  signing: ISigning;
  showNotes?: boolean;
}

export const SigningCard = ({ signing, showNotes = false }: SigningCardProps) => {
  const signedDate = new Date(signing.signedDate);
  const formattedDate = signedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative group">
      {/* Stadium Lights Effect - Background Spotlights */}
      <div className="absolute -inset-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        {/* Top left light */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        {/* Top right light */}
        <div
          className="absolute top-0 right-1/4 w-32 h-32 bg-secondary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        {/* Bottom center light */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-secondary/70 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Card Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/40 group-hover:border-secondary transition-all duration-500 group-hover:scale-[1.02]">
        {/* Split Background with Diagonal Division */}
        <div className="absolute inset-0 flex">
          {/* Left Side - Athlete Background */}
          <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 60% 0, 45% 100%, 0 100%)" }}>
            <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary to-primary/90">
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/90"></div>
                <Image
                  src={
                    signing.athlete.profileImageUrl ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={signing.athlete.fullName}
                  fill
                  className="object-cover opacity-40 blur-xs"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </>
            </div>
          </div>

          {/* Right Side - Team Logo Background */}
          <div className="absolute inset-0" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 45% 100%)" }}>
            <div className="relative w-full h-full bg-gradient-to-bl from-white via-gray-100 to-gray-200">
              <>
                <Image
                  src={
                    signing.team.logoUrl ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={signing.team.name}
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/60 via-white/40 to-white/70"></div>
              </>
            </div>
          </div>

          {/* Diagonal Divider Line */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line
                x1="60"
                y1="0"
                x2="45"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-secondary drop-shadow-lg"
              />
            </svg>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 p-4 md:p-12 min-h-[350px] md:min-h-[450px] flex flex-col">
          {/* Date Badge - Top */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-secondary/30">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-white">Signed {formattedDate}</span>
            </div>
          </div>

          {/* Main Content - Split Layout */}
          <div className="flex-1 flex items-center justify-between gap-4">
            {/* Left: Athlete Photo */}
            <div className="hidden sm:flex absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10">
              <Link href={`/athletes/${signing.athlete._id}`} className="group/athlete">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-white to-secondary rounded-full blur-2xl opacity-50 group-hover/athlete:opacity-100 transition-all duration-300 scale-110"></div>

                  <Image
                    src={
                      signing.athlete.profileImageUrl ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt={signing.athlete.fullName}
                    width={180}
                    height={180}
                    className="relative rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 object-cover border-4 md:border-6 border-white shadow-2xl group-hover/athlete:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Center: Name & Arrow crossing the diagonal */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-0 max-w-[90%] md:max-w-none">
              {/* Athlete Name with background */}
              <Link href={`/athletes/${signing.athlete._id}`}>
                <div className="bg-gradient-to-r from-primary/95 via-primary to-white/95 backdrop-blur-xl px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl border-2 md:border-4 border-secondary shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <h2 className="text-base md:text-3xl font-black text-white drop-shadow-lg text-center break-words max-w-[250px] md:max-w-none md:whitespace-nowrap">
                    {signing.athlete.fullName}
                  </h2>
                  {signing.athlete.positions && signing.athlete.positions.length > 0 && (
                    <p className="text-secondary font-bold text-xs md:text-sm text-center mt-0.5 md:mt-1 tracking-wide">
                      {signing.athlete.positions.map((p) => p.abbreviation).join(" • ")}
                    </p>
                  )}
                </div>
              </Link>

              {/* Phantom spacer box to separate names */}
              <div className="h-16 md:h-24 w-1"></div>

              {/* Arrow crossing diagonal */}
              {/* <div className="bg-secondary/90 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-xl animate-pulse">
                <svg
                  className="w-6 h-6 md:w-12 md:h-12 text-primary transform rotate-[0deg]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div> */}

              {/* Team Name */}
              <div className="bg-gradient-to-l from-white/95 via-white to-primary/95 backdrop-blur-xl px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl border-2 md:border-4 border-primary/30 shadow-2xl">
                <h3 className="text-base md:text-2xl font-bold text-primary drop-shadow-md text-center break-words max-w-[250px] md:max-w-none md:whitespace-nowrap">
                  {signing.team.name}
                </h3>
              </div>
            </div>

            {/* Right: Team Logo */}
            <div className="hidden sm:flex absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-50 transition-all duration-300"></div>

                <div className="relative bg-white rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 flex items-center justify-center border-4 md:border-6 border-primary/20 shadow-2xl p-3 md:p-6">
                  {signing.team.logoUrl ? (
                    <Image
                      src={signing.team.logoUrl}
                      alt={signing.team.name}
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-primary font-bold text-center text-xs md:text-sm">{signing.team.name}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Notes (Optional) - Bottom */}
          {showNotes && signing.notes && (
            <div className="mt-6 bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-white/90 text-sm italic text-center">{signing.notes}</p>
            </div>
          )}
        </div>

        {/* Bottom Accent Bars */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-white"></div>
          <div className="h-2 bg-gradient-to-r from-secondary via-white to-secondary"></div>
        </div>
      </div>
    </div>
  );
};
