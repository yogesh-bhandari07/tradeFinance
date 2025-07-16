// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Linkedin,
//   Twitter,
//   Mail,
//   MapPin,
//   Users,
//   ArrowRight,
//   Shield,
//   Globe,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export const EditorialBoard = () => {
//   const boardMembers = [
//     {
//       name: "Dr. James Patterson",
//       role: "Editor-in-Chief",
//       expertise: "Trade Finance & Global Economics",
//       location: "London, UK",
//       avatar:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       bio: "25+ years in international trade finance, former World Bank advisor",
//       credentials: ["PhD Economics", "CFA", "Former Goldman Sachs"],
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Sarah Kim",
//       role: "Senior Treasury Editor",
//       expertise: "Treasury Management & Risk",
//       location: "Singapore",
//       avatar:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       bio: "Leading expert in Asian treasury markets and digital payments innovation",
//       credentials: ["MBA Finance", "CTP", "Ex-HSBC Treasury"],
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Marcus Thompson",
//       role: "Payments Technology Editor",
//       expertise: "Fintech & Digital Payments",
//       location: "New York, USA",
//       avatar:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       bio: "Fintech pioneer with expertise in blockchain and central bank digital currencies",
//       credentials: [
//         "MS Computer Science",
//         "Former PayPal VP",
//         "Blockchain Expert",
//       ],
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Dr. Priya Sharma",
//       role: "Compliance & Regulatory Editor",
//       expertise: "Global Compliance & ESG",
//       location: "Mumbai, India",
//       avatar:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       bio: "International compliance expert specializing in cross-border regulations",
//       credentials: ["LLM International Law", "CAMS", "Former RBI"],
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Ahmed Al-Rashid",
//       role: "Middle East & Africa Editor",
//       expertise: "Islamic Finance & Trade",
//       location: "Dubai, UAE",
//       avatar:
//         "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       bio: "Leading authority on Islamic trade finance and Middle Eastern markets",
//       credentials: [
//         "MBA Islamic Finance",
//         "AAOIFI Certified",
//         "Ex-Emirates NBD",
//       ],
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Elena Kowalski",
//       role: "European Markets Editor",
//       expertise: "EU Trade & Regulations",
//       location: "Frankfurt, Germany",
//       avatar:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       bio: "Expert in European trade finance regulations and sustainable finance",
//       credentials: ["MSc Finance", "CFA", "Former ECB Analyst"],
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#",
//       },
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-ttp-orange/10 px-4 py-2 rounded-full mb-4">
//             <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
//             <span className="text-ttp-orange font-medium">
//               Meet Our Experts
//             </span>
//           </div>
//           <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
//             Editorial Board & Our Team
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our content is curated and reviewed by industry-leading experts with
//             decades of combined experience in trade finance, treasury
//             management, and payments innovation.
//           </p>
//         </div>

//         {/* Trust Indicators */}
//         <div className="flex justify-center items-center gap-8 mb-16 text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-ttp-green rounded-full"></div>
//             <span>150+ Years Combined Experience</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-ttp-orange rounded-full"></div>
//             <span>Global Coverage</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-ttp-purple rounded-full"></div>
//             <span>Industry Leaders</span>
//           </div>
//         </div>

//         {/* Board Members Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {boardMembers.map((member, index) => (
//             <Card
//               key={index}
//               className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-ttp-orange"
//             >
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4 mb-4">
//                   <Avatar className="w-16 h-16 ring-2 ring-ttp-orange/20">
//                     <AvatarImage src={member.avatar} className="object-cover" />
//                     <AvatarFallback className="bg-ttp-orange text-white font-bold">
//                       {member.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1">
//                     <h3 className="font-bold text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
//                       {member.name}
//                     </h3>
//                     <p className="text-ttp-orange font-medium text-sm">
//                       {member.role}
//                     </p>
//                     <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
//                       <MapPin className="w-3 h-3" />
//                       {member.location}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <Badge
//                     variant="outline"
//                     className="text-xs mb-2 border-ttp-purple text-ttp-purple"
//                   >
//                     {member.expertise}
//                   </Badge>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     {member.bio}
//                   </p>
//                 </div>

//                 <div className="mb-4">
//                   <div className="flex flex-wrap gap-1">
//                     {member.credentials.map((credential, idx) => (
//                       <Badge key={idx} variant="secondary" className="text-xs">
//                         {credential}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
//                   <a
//                     href={member.social.linkedin}
//                     className="text-gray-400 hover:text-ttp-orange transition-colors"
//                   >
//                     <Linkedin className="w-4 h-4" />
//                   </a>
//                   <a
//                     href={member.social.twitter}
//                     className="text-gray-400 hover:text-ttp-orange transition-colors"
//                   >
//                     <Twitter className="w-4 h-4" />
//                   </a>
//                   <a
//                     href={member.social.email}
//                     className="text-gray-400 hover:text-ttp-orange transition-colors"
//                   >
//                     <Mail className="w-4 h-4" />
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Governance & Advisory Panel CTA */}
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <Card className="bg-gradient-to-br from-ttp-charcoal to-ttp-purple text-white">
//             <CardContent className="p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-white/20 rounded-lg">
//                   <Shield className="w-8 h-8 text-ttp-orange" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">Our Governance</h3>
//                   <p className="text-white/80">
//                     Editorial independence & transparency
//                   </p>
//                 </div>
//               </div>

//               <p className="text-white/90 mb-6">
//                 Discover our comprehensive governance framework, editorial
//                 policies, and commitment to independent journalism.
//               </p>

//               <div className="space-y-3 mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
//                   <span className="text-sm text-white/90">
//                     Editorial Independence Charter
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
//                   <span className="text-sm text-white/90">
//                     IPSO Regulated Standards
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
//                   <span className="text-sm text-white/90">
//                     Transparent Operations
//                   </span>
//                 </div>
//               </div>

//               <Button
//                 asChild
//                 className="bg-ttp-orange hover:bg-ttp-orange/90 text-white"
//               >
//                 <Link to="/governance">
//                   View Our Governance
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-ttp-green to-emerald-600 text-white">
//             <CardContent className="p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-white/20 rounded-lg">
//                   <Globe className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">Global Advisory Panel</h3>
//                   <p className="text-white/80">
//                     50+ industry experts worldwide
//                   </p>
//                 </div>
//               </div>

//               <p className="text-white/90 mb-6">
//                 Our global advisory panel includes senior executives from major
//                 banks, regulators, and fintech leaders across six continents.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">50+</div>
//                   <div className="text-white/80 text-sm">Global Advisors</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">6</div>
//                   <div className="text-white/80 text-sm">Continents</div>
//                 </div>
//               </div>

//               <Button
//                 asChild
//                 variant="outline"
//                 className="border-white/30 text-white hover:bg-white/10 w-full"
//               >
//                 <Link to="/governance#advisory">
//                   Meet Our Advisory Panel
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Contact CTA */}
//         <div className="text-center">
//           <Card className="bg-gradient-to-r from-ttp-orange to-amber-500 text-white max-w-2xl mx-auto">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold mb-4">
//                 Want to Join Our Community?
//               </h3>
//               <p className="mb-6 text-white/90">
//                 Get exclusive access to expert insights, networking
//                 opportunities, and industry resources - completely free.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <div className="flex items-center gap-2">
//                   <Users className="w-5 h-5" />
//                   <span className="font-medium">160k+ Active Members</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                   <span>Free Forever</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };
