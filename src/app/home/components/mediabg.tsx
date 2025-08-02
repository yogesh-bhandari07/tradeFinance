import React from "react";

export const MediaWallBackground = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lanes with TTP brand colors */}
        <div className="absolute top-[25%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-ttp-orange/15 to-transparent rounded-full">
          <div
            className="absolute top-0 w-4 h-1 bg-gradient-to-r from-ttp-orange to-orange-400 rounded-full opacity-50 shadow-sm"
            style={{
              animation: `flow-horizontal 25s linear infinite`,
              left: "-1rem",
            }}
          ></div>
        </div>

        <div className="absolute top-[60%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-ttp-green/15 to-transparent rounded-full">
          <div
            className="absolute top-0 w-4 h-1 bg-gradient-to-r from-ttp-green to-green-400 rounded-full opacity-50 shadow-sm"
            style={{
              animation: `flow-horizontal 30s linear infinite`,
              animationDelay: "8s",
              left: "-1rem",
            }}
          ></div>
        </div>

        <div className="absolute top-[80%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-ttp-purple/15 to-transparent rounded-full">
          <div
            className="absolute top-0 w-4 h-1 bg-gradient-to-r from-ttp-purple to-purple-400 rounded-full opacity-50 shadow-sm"
            style={{
              animation: `flow-horizontal 35s linear infinite`,
              animationDelay: "16s",
              left: "-1rem",
            }}
          ></div>
        </div>

        {/* Vertical lanes */}
        <div className="absolute left-[20%] top-0 h-full w-1 bg-gradient-to-b from-transparent via-ttp-orange/12 to-transparent rounded-full">
          <div
            className="absolute left-0 w-1 h-4 bg-gradient-to-b from-ttp-orange to-orange-400 rounded-full opacity-40 shadow-sm"
            style={{
              animation: `flow-vertical 38s linear infinite`,
              top: "-1rem",
            }}
          ></div>
        </div>

        <div className="absolute left-[70%] top-0 h-full w-1 bg-gradient-to-b from-transparent via-ttp-green/12 to-transparent rounded-full">
          <div
            className="absolute left-0 w-1 h-4 bg-gradient-to-b from-ttp-green to-green-400 rounded-full opacity-40 shadow-sm"
            style={{
              animation: `flow-vertical 42s linear infinite`,
              animationDelay: "12s",
              top: "-1rem",
            }}
          ></div>
        </div>

        {/* Diagonal lanes with TTP colors */}
        <div
          className="absolute w-1 bg-gradient-to-br from-transparent via-ttp-purple/12 to-transparent opacity-80 rounded-full"
          style={{
            left: "10%",
            top: "10%",
            height: "60%",
            transform: "rotate(25deg)",
            transformOrigin: "top left",
          }}
        >
          <div
            className="absolute left-0 w-1 h-4 bg-gradient-to-b from-ttp-purple to-purple-400 rounded-full opacity-40 shadow-sm"
            style={{
              animation: `flow-diagonal 48s linear infinite`,
              animationDelay: "20s",
              top: "-1rem",
            }}
          ></div>
        </div>

        <div
          className="absolute w-1 bg-gradient-to-tl from-transparent via-ttp-orange/12 to-transparent opacity-80 rounded-full"
          style={{
            right: "15%",
            top: "20%",
            height: "50%",
            transform: "rotate(-30deg)",
            transformOrigin: "top right",
          }}
        >
          <div
            className="absolute left-0 w-1 h-4 bg-gradient-to-b from-ttp-orange to-orange-400 rounded-full opacity-40 shadow-sm"
            style={{
              animation: `flow-diagonal-reverse 45s linear infinite`,
              animationDelay: "6s",
              top: "-1rem",
            }}
          ></div>
        </div>

        {/* Additional diagonal lanes for more complexity */}
        <div
          className="absolute w-1 bg-gradient-to-br from-transparent via-ttp-green/10 to-transparent opacity-70 rounded-full"
          style={{
            left: "45%",
            top: "5%",
            height: "40%",
            transform: "rotate(45deg)",
            transformOrigin: "top left",
          }}
        >
          <div
            className="absolute left-0 w-1 h-3 bg-gradient-to-b from-ttp-green to-green-400 rounded-full opacity-35"
            style={{
              animation: `flow-diagonal-steep 52s linear infinite`,
              animationDelay: "25s",
              top: "-0.75rem",
            }}
          ></div>
        </div>

        {/* Smoothed corner junctions where lanes intersect */}
        <div
          className="absolute w-3 h-3 rounded-full bg-ttp-orange/20 border-2 border-ttp-orange/30 shadow-lg backdrop-blur-sm"
          style={{
            left: "20%",
            top: "25%",
            animation: "junction-pulse 12s ease-in-out infinite",
          }}
        ></div>

        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-ttp-green/20 border-2 border-ttp-green/30 shadow-lg backdrop-blur-sm"
          style={{
            left: "70%",
            top: "60%",
            animation: "junction-pulse 10s ease-in-out infinite",
            animationDelay: "4s",
          }}
        ></div>

        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-ttp-purple/20 border-2 border-ttp-purple/30 shadow-lg backdrop-blur-sm"
          style={{
            left: "45%",
            top: "45%",
            animation: "junction-pulse 14s ease-in-out infinite",
            animationDelay: "8s",
          }}
        ></div>

        <div
          className="absolute w-2 h-2 rounded-full bg-ttp-orange/25 border border-ttp-green/25 shadow-md backdrop-blur-sm"
          style={{
            right: "25%",
            top: "35%",
            animation: "junction-pulse 16s ease-in-out infinite",
            animationDelay: "12s",
          }}
        ></div>

        {/* Corner curve elements for smooth transitions */}
        <div
          className="absolute w-8 h-8 border-2 border-ttp-orange/20 rounded-full opacity-30"
          style={{
            left: "18%",
            top: "23%",
            animation: "corner-glow 18s ease-in-out infinite",
          }}
        ></div>

        <div
          className="absolute w-6 h-6 border-2 border-ttp-purple/20 rounded-full opacity-30"
          style={{
            right: "17%",
            top: "42%",
            animation: "corner-glow 20s ease-in-out infinite",
            animationDelay: "7s",
          }}
        ></div>

        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      </div>

      <style>{`
        @keyframes flow-horizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes flow-vertical {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          15% {
            opacity: 0.4;
          }
          85% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes flow-diagonal {
          0% {
            transform: translate(-100%, -100%);
            opacity: 0;
          }
          15% {
            opacity: 0.4;
          }
          85% {
            opacity: 0.4;
          }
          100% {
            transform: translate(200%, 200%);
            opacity: 0;
          }
        }

        @keyframes flow-diagonal-reverse {
          0% {
            transform: translate(100%, -100%);
            opacity: 0;
          }
          15% {
            opacity: 0.4;
          }
          85% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-200%, 200%);
            opacity: 0;
          }
        }

        @keyframes flow-diagonal-steep {
          0% {
            transform: translate(-100%, -100%);
            opacity: 0;
          }
          20% {
            opacity: 0.35;
          }
            80% {
            opacity: 0.35;
          }
          100% {
            transform: translate(150%, 150%);
            opacity: 0;
          }
        }

        @keyframes junction-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        @keyframes corner-glow {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1) rotate(180deg);
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
};
