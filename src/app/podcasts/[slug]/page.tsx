"use client";
import React from "react";

import { usePathname } from "next/navigation";

// import { useParams } from "react-router-dom";
import { PodcastSubscriptionCTA } from "@/app/podcasts/components/cta";

import { Button } from "@/shared/components/button";
import {
  ArrowLeft,
  Headphones,
} from "lucide-react";

import Image from "next/image";

import { getPodcastBySlug } from "@/app/types/webinar";

const PodcastDetailPage = () => {
//   const { podcastSlug } = useParams();
 const pathname = usePathname(); // e.g., "/podcasts/hsbc"
  const segments = pathname.split("/").filter(Boolean);
  const podcastSlug = segments[1]; // Assuming URL is /podcasts/[slug]  

  console.log("Current podcast slug:", podcastSlug);

//   console.log("Current podcast slug:", podcastSlug);

  const podcast = podcastSlug ? getPodcastBySlug(podcastSlug) : null;

  console.log("Current podcast data:", podcast);

  if (!podcast) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Headphones className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Podcast Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The podcast episode you are looking for does not exist or has been
              moved.
            </p>
            {/* <Button asChild>
              <a href="/podcasts">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Podcasts
              </a>
            </Button> */}
          </div>
        </main>
      </div>
    );
  }

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case "deep-dive":
//         return "bg-ttp-purple text-white";
//       case "news":
//         return "bg-ttp-orange text-white";
//       case "interview":
//         return "bg-ttp-green text-white";
//       case "educational":
//         return "bg-blue-500 text-white";
//       default:
//         return "bg-gray-500 text-white";
//     }
//   };

  return (
    <div>
    <section
      className="relative py-16 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, #23232A 0%, rgba(35,35,42,0.9) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {/* Podcast thumbnail & badge */}
              <div className="relative inline-block">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden" style={{backgroundColor: "#F4F4F5"}}>
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="podcast thumbnail"
                    fill
                    style={{objectFit: "cover"}}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{background: "rgba(139,92,246,0.80)", color: "#fff"}}
                  >
                    {/* Headphones icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                      strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones w-8 h-8"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-1 right-1 text-white text-xs px-1 rounded"
                    style={{backgroundColor: "rgba(0,0,0,0.75)"}}
                  >
                    22:45
                  </div>
                </div>
                {/* Podcast badge */}
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ml-2"
                  style={{backgroundColor: "#8B5CF6", color: "#fff", borderColor: "transparent"}}
                >
                  Podcast
                </div>
              </div>
              {/* Other badges */}
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                style={{backgroundColor: "#27C388", color: "#fff", borderColor: "transparent"}}>
                Trade Finance
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                style={{backgroundColor: "#7E3FF2", color: "#fff", borderColor: "transparent"}}>
                Digital Payments
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-white border-[rgba(255,255,255,0.20)] hover:bg-[#171717]"
                style={{backgroundColor: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.20)"}}>
                Industry Leaders
              </div>
            </div>
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              style={{color: "#fff"}}>
              Trade Finance 101: Understanding Letters of Credit
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{color: "rgba(255,255,255,0.8)"}}>
              Listen to our comprehensive discussion with industry leaders exploring the transformative impact of digital technologies on trade finance and cross-border payments.
            </p>
            {/* Episode info */}
            <div className="flex flex-wrap items-center gap-6 text-sm mb-8"
              style={{color: "rgba(255,255,255,0.7)"}}>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4"
                >
                  <path d="M8 2v4"/>
                  <path d="M16 2v4"/>
                  <rect width="18" height="18" x="3" y="4" rx="2"/>
                  <path d="M3 10h18"/>
                </svg>
                <span>January 18, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>22:45</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
                <span>14.2k downloads</span>
              </div>
            </div>
            {/* Topic tags */}
            <div className="flex flex-wrap gap-2">
              {["Digital Transformation", "Cross-border Payments", "RegTech", "Financial Innovation", "Trade Finance"].map((tag) => (
                <div key={tag}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold hover:bg-white/20"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.80)",
                    borderColor: "transparent",
                  }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT SIDE: Main image + play */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/lovable-uploads/7a791f62-a736-4655-89f1-14c976b78de3.png"
                alt="Trade Finance 101: Understanding Letters of Credit"
                width={1200}
                height={800}
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                style={{objectFit: "cover"}}
                priority
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.20), transparent)"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Play pulse ring */}
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center border shadow-2xl animate-pulse"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,128,0,0.20) 0%, rgba(126,63,242,0.20) 100%)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,128,0,0.10) 0%, rgba(126,63,242,0.10) 100%)"
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                        strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-headphones w-8 h-8 text-white animate-[pulse_2s_ease-in-out_infinite]"
                      >
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 w-20 h-20 border-2 rounded-full animate-ping"
                    style={{borderColor: "rgba(255,128,0,0.50)"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    <main className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border p-6 prose prose-base max-w-none">
              <section id="introduction" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Introduction &amp; Context</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  In this compelling episode of the TTP Podcast Network, host Sarah Chen delves into a beginner-friendly guide to understanding how letters of credit work in international trade. This comprehensive discussion provides essential insights for trade finance professionals, financial institutions, and industry stakeholders navigating today rapidly evolving financial landscape.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The conversation explores critical themes affecting the global trade finance industry, offering both strategic perspective and practical insights that professionals can apply in their daily operations. Our expert analysis breaks down complex concepts into actionable intelligence for decision-makers across the financial services sector.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  As the financial services industry continues to evolve at an unprecedented pace, understanding these developments is crucial for maintaining competitive advantage and delivering value to clients and stakeholders.
                </p>
              </section>
              <section id="key-insights" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Key Insights &amp; Discussion Points</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Throughout this episode, several critical themes emerge that are reshaping the trade finance landscape. The discussion reveals how technological innovation, regulatory evolution, and changing market dynamics are creating new opportunities and challenges for industry participants.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Key areas of focus include the integration of digital technologies in traditional trade finance processes, the evolving regulatory environment across major financial centers, and the changing expectations of corporate clients seeking more efficient and transparent financial solutions.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The conversation also addresses the importance of strategic partnerships and collaboration in delivering comprehensive solutions that meet the complex needs of global trade participants.
                </p>
              </section>
              <section id="expert-analysis" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Expert Analysis</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Sarah Chen brings extensive industry experience to this analysis, having covered trade finance developments for over a decade. The discussion provides nuanced perspective on market trends and their implications for various stakeholder groups.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The analysis covers both immediate market conditions and longer-term structural changes that will influence industry development. This dual perspective helps listeners understand not just what is happening today, but what they should prepare for in the coming months and years.
                </p>
              </section>
              <section id="market-implications" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Market Implications</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The insights shared in this episode have significant implications for market participants across the trade finance ecosystem. Financial institutions, corporates, technology providers, and regulatory bodies all face evolving challenges and opportunities.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  For financial institutions, the discussion highlights the need for strategic technology investments and operational transformation to remain competitive. The conversation explores how leading organizations are adapting their business models to serve evolving client needs.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Corporate treasurers and finance professionals will find valuable insights into emerging solutions and best practices that can improve efficiency, reduce costs, and enhance risk management in their trade finance operations.
                </p>
              </section>
              <section id="industry-perspective" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Industry Perspective</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  This episode provides a comprehensive view of current industry sentiment and emerging consensus around key issues. The discussion reflects ongoing conversations happening across boardrooms, industry conferences, and regulatory forums worldwide.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The conversation addresses common misconceptions and provides clarity on complex issues that often generate confusion in the market. This clarity is essential for informed decision-making in an increasingly complex operating environment.
                </p>
              </section>
              <section id="future-outlook" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Future Outlook</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Looking ahead, the discussion identifies key trends and developments that will shape the industry trajectory over the coming years. These insights help listeners understand not just current conditions, but where the market is heading.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The analysis covers technological developments, regulatory changes, and evolving client expectations that will drive industry transformation. Understanding these forces is crucial for strategic planning and investment decisions.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The conversation also addresses potential challenges and obstacles that could affect industry development, providing balanced perspective on both opportunities and risks facing market participants.
                </p>
              </section>
              <section id="recommendations" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Key Recommendations</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Based on the insights shared throughout this episode, several actionable recommendations emerge for different stakeholder groups. These recommendations provide practical guidance for navigating current market conditions and preparing for future developments.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  For financial institutions, the focus should be on strategic technology adoption, talent development, and partnership building. The conversation emphasizes the importance of balancing innovation with risk management and regulatory compliance.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  Corporate finance teams are advised to stay informed about emerging solutions, engage actively with their banking partners, and invest in capabilities that will enhance their competitive position in the digital economy.
                </p>
              </section>
              <section id="conclusion" className="mb-6">
                <h2 className="text-xl font-bold" style={{color: "#23232A"}}>Conclusion &amp; Takeaways</h2>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  This episode provides essential insights for anyone involved in trade finance, offering both strategic perspective and practical guidance for navigating current market conditions and preparing for future developments.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  The key takeaway is that while the industry faces significant changes and challenges, these also represent unprecedented opportunities for organizations that are prepared to adapt and innovate. Success will require strategic thinking, operational excellence, and collaborative partnerships.
                </p>
                <p className="mb-3" style={{color: "#4B5563"}}>
                  We encourage listeners to engage with the concepts discussed in this episode, share their perspectives with colleagues, and continue the conversation within their organizations and professional networks.
                </p>
              </section>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Sponsored */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div
                  className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer w-full"
                  style={{
                    width: "400px",
                    height: "67.5px",
                    maxWidth: "100%",
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Next-Gen Treasury Solutions"
                      fill
                      style={{objectFit: "cover"}}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.3))",
                      }}
                    ></div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 touch-manipulation select-none border-transparent hover:bg-primary/80 absolute top-2 right-2 z-10"
                    style={{
                      backgroundColor: "rgba(31,41,55,0.9)",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  >
                    Sponsored
                  </div>
                  <div className="absolute bottom-2 left-2 w-6 h-6"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: "50%",
                      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt="JPMorgan Chase"
                      width={16}
                      height={16}
                      style={{objectFit: "contain"}}
                    />
                  </div>
                  <div className="absolute bottom-2 right-2"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: "4px",
                      padding: "4px 8px"
                    }}>
                    <span style={{fontSize: "12px", fontWeight: "500", color: "#1f2937"}}>JPMorgan Chase</span>
                  </div>
                </div>
              </div>
              {/* Episode Information */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="font-semibold tracking-tight text-lg text-ttp-charcoal">Episode Information</h3>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-center gap-2 text-sm" style={{color: "#9CA3AF"}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4"
                >
                  <path d="M8 2v4"/>
                  <path d="M16 2v4"/>
                  <rect width="18" height="18" x="3" y="4" rx="2"/>
                  <path d="M3 10h18"/>
                </svg>
                    <span>January 18, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-ttp-charcoal" >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>22:45</span>
              </div>
              <div className="flex items-center gap-2 text-ttp-charcoal">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
                <span>14.2k downloads</span>
              </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm" style={{color: "#9CA3AF"}}>Season 2, Episode 26</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 touch-manipulation select-none border-transparent hover:bg-primary/80"
                    style={{backgroundColor: "#3B82F6", color: "#fff"}}
                  >educational</div>
                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    {/* Share button */}
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 text-ttp-charcoal">
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>                      Share
                    </button>
                    {/* Save button */}
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 text-ttp-charcoal">
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card  text-card-foreground shadow-sm">
    <div className="flex flex-col space-y-1.5 p-6 ">
        <h3 className="font-semibold tracking-tight text-lg text-ttp-charcoal">Hosts</h3>
    </div>
    <div className="p-6 pt-0 space-y-4">
        <div className="flex items-center gap-3"><span
                className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">  <img
    className="aspect-square h-full w-full"
    alt="Carter Hoffman"
    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
  /></span>
            <div className="flex-1">
                <div className="font-medium text-sm text-ttp-charcoal">Carter Hoffman</div>
                <div className="text-xs text-muted-foreground text-ttp-charcoal">Tradetech Editor</div>
                <div className="text-xs text-ttp-purple font-medium">TTP</div>
            </div>
        </div>
        <div className="flex items-center gap-3"><span
                className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                      <img
    className="aspect-square h-full w-full"
    alt="Carter Hoffman"
    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
  />    
                </span>
            <div className="flex-1">
                <div className="font-medium text-sm text-ttp-charcoal">Deepesh Patel</div>
                <div className="text-xs text-muted-foreground text-ttp-charcoal">Editor in Chief</div>
                <div className="text-xs text-ttp-purple font-medium">TTP</div>
            </div>
        </div>
    </div>
</div>
<div className="p-6 bg-gray-50 rounded-lg shadow-md">
  <h2 className="text-lg font-semibold text-gray-900 mb-4">Featured Guests</h2>
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
        <img
          className="aspect-square h-full w-full object-cover"
          alt="Carter Hoffman"
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
        />
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Carter Hoffman</span>
        <span className="text-sm text-gray-500">Podcast Host</span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
        <img
          className="aspect-square h-full w-full object-cover"
          alt="Emily Johnson"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        />
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Emily Johnson</span>
        <span className="text-sm text-gray-500">Tech Founder</span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
        <img
          className="aspect-square h-full w-full object-cover"
          alt="Mark Chen"
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face"
        />
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Mark Chen</span>
        <span className="text-sm text-gray-500">AI Researcher</span>
      </div>
    </div>
  </div>
</div>
<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="font-semibold tracking-tight text-lg text-ttp-charcoal">Stay Updated</h3>
  </div>
  <div className="p-6 pt-0 space-y-4">
    <p className="text-sm text-muted-foreground text-ttp-charcoal">
      Get notified when new podcast episodes are released.
    </p>
    <div className="space-y-2">
      <input
        type="email"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-sm text-black"
        placeholder="Enter your email"
      />
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 w-full bg-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-mail w-4 h-4 mr-2"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        Subscribe to Podcast
      </button>
    </div>
  </div>
</div>

              
            </div>
          </div>
        </div>
        <div className="m-7">

                        <PodcastSubscriptionCTA />
        </div>
      </div>
      </main>
      </div>
   );
}; 

export default PodcastDetailPage;
