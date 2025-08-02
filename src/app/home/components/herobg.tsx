import React from "react";

export const HeroBackground = () => {
  return (
    <>
      {/* Highway Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal highway lanes */}
        <div className="absolute top-[30%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-ttp-orange/20 to-transparent backdrop-blur-sm">
          <div
            className="absolute top-0 w-6 h-1 bg-gradient-to-r from-ttp-orange to-orange-400 rounded-full opacity-60"
            style={{
              animation: `highway-flow 20s linear infinite`,
              left: "-1.5rem",
            }}
          ></div>
        </div>

        <div className="absolute top-[50%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-ttp-green/20 to-transparent backdrop-blur-sm">
          <div
            className="absolute top-0 w-6 h-1 bg-gradient-to-r from-ttp-green to-green-400 rounded-full opacity-60"
            style={{
              animation: `highway-flow 25s linear infinite`,
              animationDelay: "5s",
              left: "-1.5rem",
            }}
          ></div>
        </div>

        <div className="absolute top-[70%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-ttp-purple/20 to-transparent backdrop-blur-sm">
          <div
            className="absolute top-0 w-6 h-1 bg-gradient-to-r from-ttp-purple to-purple-400 rounded-full opacity-60"
            style={{
              animation: `highway-flow 30s linear infinite`,
              animationDelay: "10s",
              left: "-1.5rem",
            }}
          ></div>
        </div>

        {/* Vertical lanes */}
        <div className="absolute left-[25%] top-0 h-full w-1 bg-gradient-to-b from-transparent via-ttp-orange/15 to-transparent">
          <div
            className="absolute left-0 w-1 h-5 bg-gradient-to-b from-ttp-orange to-orange-400 rounded-full opacity-50"
            style={{
              animation: `highway-vertical 35s linear infinite`,
              top: "-1.25rem",
            }}
          ></div>
        </div>

        <div className="absolute left-[65%] top-0 h-full w-1 bg-gradient-to-b from-transparent via-ttp-green/15 to-transparent">
          <div
            className="absolute left-0 w-1 h-5 bg-gradient-to-b from-ttp-green to-green-400 rounded-full opacity-50"
            style={{
              animation: `highway-vertical 40s linear infinite`,
              animationDelay: "8s",
              top: "-1.25rem",
            }}
          ></div>
        </div>

        {/* Diagonal connections */}
        <div
          className="absolute w-1 bg-gradient-to-br from-transparent via-ttp-purple/15 to-transparent opacity-70 rounded-full"
          style={{
            left: "15%",
            top: "15%",
            height: "50%",
            transform: "rotate(35deg)",
            transformOrigin: "top left",
          }}
        >
          <div
            className="absolute left-0 w-1 h-4 bg-gradient-to-b from-ttp-purple to-purple-400 rounded-full opacity-45"
            style={{
              animation: `highway-diagonal 45s linear infinite`,
              animationDelay: "15s",
              top: "-1rem",
            }}
          ></div>
        </div>

        <div
          className="absolute w-1 bg-gradient-to-tl from-transparent via-ttp-orange/15 to-transparent opacity-70 rounded-full"
          style={{
            right: "20%",
            top: "25%",
            height: "40%",
            transform: "rotate(-25deg)",
            transformOrigin: "top right",
          }}
        >
          <div
            className="absolute left-0 w-1 h-4 bg-gradient-to-b from-ttp-orange to-orange-400 rounded-full opacity-45"
            style={{
              animation: `highway-diagonal-reverse 50s linear infinite`,
              animationDelay: "3s",
              top: "-1rem",
            }}
          ></div>
        </div>

        {/* Highway intersection nodes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2.5 h-2.5 rounded-full backdrop-blur-lg border shadow-xl ${
              i % 3 === 0
                ? "bg-ttp-orange/15 border-ttp-orange/30"
                : i % 3 === 1
                ? "bg-ttp-green/15 border-ttp-green/30"
                : "bg-ttp-purple/15 border-ttp-purple/30"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${35 + (i % 2) * 25}%`,
              animation: "node-pulse 8s ease-in-out infinite",
              animationDelay: `${i * 1.5}s`,
            }}
          ></div>
        ))}

        {/* Corner junction elements */}
        <div
          className="absolute w-4 h-4 border-2 border-ttp-orange/25 rounded-full opacity-40"
          style={{
            left: "23%",
            top: "28%",
            animation: "corner-glow 15s ease-in-out infinite",
          }}
        ></div>

        <div
          className="absolute w-3 h-3 border-2 border-ttp-green/25 rounded-full opacity-40"
          style={{
            right: "22%",
            top: "48%",
            animation: "corner-glow 18s ease-in-out infinite",
            animationDelay: "5s",
          }}
        ></div>

        {/* Subtle mesh pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      </div>

      <style>{`
        @keyframes highway-flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes highway-vertical {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes highway-diagonal {
          0% {
            transform: translate(-100%, -100%);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          85% {
            opacity: 0.45;
          }
          100% {
            transform: translate(180%, 180%);
            opacity: 0;
          }
        }

        @keyframes highway-diagonal-reverse {
          0% {
            transform: translate(100%, -100%);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          85% {
            opacity: 0.45;
          }
          100% {
            transform: translate(-180%, 180%);
            opacity: 0;
          }
        }

        @keyframes node-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes corner-glow {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15) rotate(180deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
};
