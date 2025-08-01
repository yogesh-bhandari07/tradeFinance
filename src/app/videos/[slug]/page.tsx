'use client';
import React from "react";
import { Button } from "@/shared/components/button";
import { usePathname } from "next/navigation";
import Image from 'next/image';

import {
  Play,
  ArrowLeft,
} from "lucide-react";
import { getVideoBySlug } from "@/app/types/webinar";

const VideoDetailPage = () => {
//   const { videoSlug } = useParams();

   const pathname = usePathname(); // e.g., "/podcasts/hsbc"
    const segments = pathname.split("/").filter(Boolean);
    const videoSlug = segments[1]; // Assuming URL is /podcasts/[slug]

  const video = videoSlug ? getVideoBySlug(videoSlug) : null;

  console.log("Current video data:", video);

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Video Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The video youre looking for doesnt exist or has been moved.
            </p>
            <Button asChild>
              <a href="/videos">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Videos
              </a>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen bg-background">

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
                    <div className="flex flex-wrap gap-2 text-ttp-charcoal">
                      {["Digital Transformation", "Cross-border Payments", "RegTech", "Financial Innovation", "Trade Finance"].map((tag) => (
                        <div key={tag}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold hover:bg-white/20 text-ttp-charcoal"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.10)",
                            color: "rgba(255,255,255,0.80)",
                            borderColor: "transparent",
                          }}>

                          {tag}
                            <span className="text-ttp-charcoal text-black">
                            </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* RIGHT SIDE: Main image + play */}
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <Image
                        src ="/lovable-uploads/7a791f62-a736-4655-89f1-14c976b78de3.png"
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
      <main className="pt-8">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/videos" className="hover:text-ttp-orange">
              Videos
            </a>
            <span>/</span>
            <span className="text-ttp-orange">Video Details</span>
          </div>
        </div>

        {/* Hero Section */}
       

        {/* Content Section */}
        <section className="py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-4 gap-6">
      {/* MAIN CONTENT */}
      <div className="lg:col-span-3">
        {/* Video Player */}
        <div className="mb-8">
          <div className="w-full bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0"
                title="HSBC Trade Finance Evolution: From Paper to Digital"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
        {/* Highlight bar */}
        <div className="mb-8 p-4 bg-gray-50 border-l-4 rounded-r-lg" style={{ borderColor: "#FF7E29" }}>
          <p className="text-sm text-gray-600">
            This video features insights and analysis related to{" "}
            <strong style={{ color: "#7E3FF2" }}>HSBC</strong>
          </p>
        </div>
        {/* Article/Sections */}
        <article className="prose prose-lg max-w-none">
          {/* About section */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#23232A" }}>About This Video</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A comprehensive look at how HSBC has transformed trade finance operations over the past decade.
            </p>
            <div
              className="bg-gray-50 p-6 rounded-lg border-l-4"
              style={{ borderLeftColor: "#FF7E29" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#23232A" }}>Key Topics Covered</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Industry trends and market insights</li>
                <li>Best practices and implementation strategies</li>
                <li>Real-world case studies and examples</li>
                <li>Future outlook and emerging opportunities</li>
              </ul>
            </div>
          </section>
          {/* Key Insights */}
          <section id="key-insights" className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#23232A" }}>Key Insights &amp; Highlights</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border" style={{ borderColor: "#BFDBFE" }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#1E40AF" }}>Market Analysis</h3>
                <p style={{ color: "#1E3A8A" }}>
                  Our presenter provides comprehensive analysis of current market conditions, identifying key trends that are reshaping the industry landscape and creating new opportunities for businesses.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border" style={{ borderColor: "#BBF7D0" }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#166534" }}>Strategic Recommendations</h3>
                <p style={{ color: "#065F46" }}>
                  Actionable insights and strategic recommendations based on extensive research and real-world implementation experience across various industry sectors.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border" style={{ borderColor: "#DDD6FE" }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#6D28D9" }}>Innovation Focus</h3>
                <p style={{ color: "#5B21B6" }}>
                  Exploration of cutting-edge technologies and innovative approaches that are driving transformation and creating competitive advantages in the market.
                </p>
              </div>
            </div>
          </section>
          {/* Expert Analysis */}
          <section id="expert-analysis" className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#23232A" }}>Expert Analysis</h2>
            <div className="bg-gradient-to-r from-[#7E3FF2]/5 to-[#FF7E29]/5 p-8 rounded-lg border" style={{ borderColor: "#E5E7EB" }}>
              <blockquote className="text-lg italic text-gray-700 mb-4">
                This comprehensive analysis provides valuable insights into the evolving landscape and offers practical guidance for organizations looking to navigate these changes successfully.
              </blockquote>
              <cite className="font-semibold" style={{ color: "#7E3FF2" }}>— Dr. Sarah Chen</cite>
            </div>
            {/* Findings/Implications */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#23232A" }}>Key Findings</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Market dynamics are shifting towards digital-first solutions",
                    "Organizations need agile strategies to remain competitive",
                    "Collaboration and partnerships are becoming essential"
                  ].map((text) => (
                    <li className="flex items-start" key={text}>
                      <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: "#FF7E29" }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#23232A" }}>Implications</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Need for enhanced digital capabilities and infrastructure",
                    "Investment in talent development and training programs",
                    "Adoption of data-driven decision making processes"
                  ].map((text) => (
                    <li className="flex items-start" key={text}>
                      <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: "#27C388" }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {/* Industry Perspective */}
          <section id="industry-perspective" className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#23232A" }}>Industry Perspective</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This video presents a comprehensive view of the industry, drawing from extensive research and practical experience. The insights shared reflect current best practices and emerging trends that are shaping the future of the sector.
            </p>
            <div className="bg-white p-6 rounded-lg border shadow-sm" style={{ borderColor: "#E5E7EB" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "#23232A" }}>Featured Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Trade Finance", "Digital Transformation", "Documentation"].map(tag => (
                  <div
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    style={{
                      background: "rgba(255,126,41,0.10)",
                      color: "#FF7E29",
                      borderColor: "transparent"
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#23232A" }}>Key Takeaways</h2>
            <div className="p-8 rounded-lg" style={{ background: "#23232A", color: "#fff" }}>
              <h3 className="text-xl font-semibold mb-4">What You will Learn</h3>
              <ul className="space-y-3">
                {[
                  "Strategic insights for navigating industry challenges",
                  "Practical approaches to implementation and execution",
                  "Future-focused strategies for sustainable growth"
                ].map((text) => (
                  <li className="flex items-start" key={text}>
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: "#FF7E29" }} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>

      {/* SIDEBAR */}
      <div className="lg:col-span-1 space-y-6">
        {/* Sponsored */}
        <div className="space-y-3">
          <div
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer w-full"
            style={{ width: "400px", height: "67.5px", maxWidth: "100%" }}
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Next-Gen Treasury Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold absolute top-2 right-2 z-10 bg-gray-800/90 text-white text-xs backdrop-blur-sm" style={{ borderColor: "transparent" }}>
              Sponsored
            </div>
            <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/90 rounded shadow-sm flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="JPMorgan Chase"
                className="w-4 h-4 object-contain"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
              <span className="text-xs font-medium text-gray-800">JPMorgan Chase</span>
            </div>
          </div>
        </div>
        {/* Video Details */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Video Details</h3>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Category</span>
              <div className="mt-1">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-500 text-white" style={{ borderColor: "transparent" }}>
                  Educational
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 flex items-center gap-1">
                  {/* Clock icon (orange stroke) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#FF7E29" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Duration
                </span>
                <p className="font-medium">18:42</p>
              </div>
              <div>
                <span className="text-gray-600 flex items-center gap-1">
                  {/* Eye icon (blue stroke) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#3B82F6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Views
                </span>
                <p className="font-medium">12.5k</p>
              </div>
              <div>
                <span className="text-gray-600 flex items-center gap-1">
                  {/* Like icon (green stroke) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#27C388" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
                  </svg>
                  Likes
                </span>
                <p className="font-medium">485</p>
              </div>
              <div>
                <span className="text-gray-600 flex items-center gap-1">
                  {/* Calendar icon (purple stroke) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#7E3FF2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M8 2v4" />
                    <path d="M16 2v4"/>
                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/>
                  </svg>
                  Published
                </span>
                <p className="font-medium text-xs">Jan 20, 2024</p>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600 flex items-center gap-1">
                {/* User icon (gray stroke) */}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Presenter
              </span>
              <p className="font-medium">Dr. Sarah Chen</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Partner Organization</span>
              <p className="font-medium" style={{ color: "#7E3FF2" }}>HSBC</p>
            </div>
          </div>
        </div>
        {/* Hosts */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Hosts</h3>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="flex items-center gap-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                <img className="aspect-square h-full w-full" alt="Sarah Mitchell"
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
                />
              </span>
              <div className="flex-1">
                <div className="font-medium text-sm">Sarah Mitchell</div>
                <div className="text-xs text-muted-foreground">Senior Video Producer</div>
                <div className="text-xs font-medium" style={{ color: "#7E3FF2" }}>TTP</div>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Guests */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg text-ttp-charcoal">Featured Guests</h3>
          </div>
          <div className="p-6 pt-0 space-y-6">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                  <img className="aspect-square h-full w-full" alt="David Thompson"
                    src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=150&h=150&fit=crop&crop=face"
                  />
                </span>
                <div className="flex-1">
                  <div className="font-medium text-sm">David Thompson</div>
                  <div className="text-xs text-muted-foreground">Head of Digital Banking</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg" style={{ background: "rgba(243,244,246,0.5)" }}>
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=60&h=60&fit=crop"
                  alt="Standard Chartered logo"
                  className="w-8 h-8 object-contain rounded"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">Standard Chartered</div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#23232A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </button>
              </div>
              <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4" style={{ background: "#E5E7EB" }}></div>
            </div>
            {/* Guest 2 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                  <span className="flex h-full w-full items-center justify-center rounded-full" style={{ background: "#F3F4F6" }}>MR</span>
                </span>
                <div className="flex-1">
                  <div className="font-medium text-sm">Maria Rodriguez</div>
                  <div className="text-xs text-muted-foreground">Trade Finance Director</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg" style={{ background: "rgba(243,244,246,0.5)" }}>
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=60&h=60&fit=crop"
                  alt="HSBC logo"
                  className="w-8 h-8 object-contain rounded"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">HSBC</div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-3 h-3" fill="none" stroke="#23232A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Editorial */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Editorial</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="flex items-center gap-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                <img className="aspect-square h-full w-full" alt="James Wilson"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                />
              </span>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Edited by</div>
                <div className="font-medium text-sm">James Wilson</div>
                <div className="text-xs text-muted-foreground">Video Content Editor, TTP</div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Reels */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Related Reels</h3>
          </div>
          <div className="p-6 pt-0 space-y-4">
            {/* Reel 1 */}
            <div className="group cursor-pointer">
              <div className="flex gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-20 rounded-lg overflow-hidden bg-gray-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=400&fit=crop"
                      alt="Quick Tip: Digital LC Processing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.20)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">45s</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-ttp-purple transition-colors">
                    Quick Tip: Digital LC Processing
                  </h4>
                  <p className="text-xs text-muted-foreground">2.1K views</p>
                </div>
              </div>
            </div>
            {/* Reel 2 */}
            <div className="group cursor-pointer">
              <div className="flex gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-20 rounded-lg overflow-hidden bg-gray-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop"
                      alt="Trade Finance in 60 Seconds"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.20)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">1m</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-ttp-purple transition-colors">
                    Trade Finance in 60 Seconds
                  </h4>
                  <p className="text-xs text-muted-foreground">3.5K views</p>
                </div>
              </div>
            </div>
            {/* Reel 3 */}
            <div className="group cursor-pointer">
              <div className="flex gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-20 rounded-lg overflow-hidden bg-gray-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop"
                      alt="Digital Transformation Highlights"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.20)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">30s</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-ttp-purple transition-colors">
                    Digital Transformation Highlights
                  </h4>
                  <p className="text-xs text-muted-foreground">1.8K views</p>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full mt-4">
              View All Reels
            </button>
          </div>
        </div>
        {/* Actions */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Actions</h3>
          </div>
          <div className="p-6 pt-0 space-y-3">
            {/* Share */}
            <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-4 h-4 mr-2" fill="none" stroke="#23232A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
              </svg>
              Share Video
            </button>
            {/* Save for Later */}
            <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-4 h-4 mr-2" fill="none" stroke="#23232A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
              Save for Later
            </button>
            {/* Download Resources */}
            <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-4 h-4 mr-2" fill="none" stroke="#23232A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Resources
            </button>
          </div>
        </div>
        {/* Stay Updated */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Stay Updated</h3>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <p className="text-sm text-muted-foreground">Get notified when new video content is released.</p>
            <div className="space-y-2">
              <input
                type="email"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-sm"
                placeholder="Enter your email"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-[#7E3FF2] text-white hover:bg-[#7E3FF2]/90 h-9 rounded-md px-3 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-ttp-charcoal">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-lg">Tags</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-wrap gap-2">
              {["Trade Finance", "Digital Transformation", "Documentation"].map(tag => (
                <div key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs" style={{ borderColor: "#E5E7EB" }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
        </section>
      </main>

    </div>
  );
};

export default VideoDetailPage;
