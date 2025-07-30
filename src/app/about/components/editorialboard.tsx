/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/avatar";
import Link from "next/link";


interface editorial {
  data: any; 
}
export const EditorialBoard = ({ data }:editorial) => {
  const aboutUs = data;

  // For board members, if aboutUs.editorialBoardUser.nodes is empty, falls back to a static example
  const boardMembers =
    aboutUs.editorialBoardUser.nodes.length > 0
      ? aboutUs.editorialBoardUser.nodes
      : [
          {
            name: "Sample User",
            role: "Editor-in-Chief",
            expertise: "Trade Finance & Economics",
            location: "London",
            avatar: "",
            bio: "This is a sample editorial board member. Replace with dynamic data.",
            credentials: ["Credential 1"],
            social: {
              linkedin: "#",
              twitter: "#",
              email: "#"
            }
          }
        ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-orange/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
            <span className="text-ttp-orange font-medium">
              {aboutUs.meetOurExpertsHeading}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            {aboutUs.editorialBoardHeading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutUs.editorialBoardContent}
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-8 mb-16 text-sm text-gray-600">
          {aboutUs.editorialBoardList.map((item: { text: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, i: React.Key | null | undefined) => (
            <div className="flex items-center gap-2" key={i}>
              <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-ttp-green' : i === 1 ? 'bg-ttp-orange' : 'bg-ttp-purple'}`}></div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boardMembers.map((member: { avatar: string | Blob | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; role: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; location: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; expertise: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; bio: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; credentials: (string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined)[]; social: { linkedin: string | undefined; twitter: string | undefined; email: string | undefined; }; }, index: React.Key | null | undefined) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#F16814]"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-16 h-16 ring-2 ring-ttp-orange/20">
                    <AvatarImage src={member.avatar} className="object-cover" />
                    <AvatarFallback className="bg-ttp-orange text-white font-bold">
                      {(member.name ?? "N/A")
                        .toString()
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-ttp-orange font-medium text-sm">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      {/* Icon: MapPin, could use dangerouslySetInnerHTML for SVGs from API */}
                      <span className="w-3 h-3 block"><span dangerouslySetInnerHTML={{ __html: aboutUs?.mapPinIcon }} /></span>
                      {member.location}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="text-xs mb-2 border-ttp-purple text-ttp-purple"
                  >
                    {member.expertise}
                  </Badge>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 text-ttp-charcoal">
                    {member.credentials.map((credential: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-ttp-orange transition-colors">
                    {/* Replace with inline SVG or Lucide component if needed */}
                    <span dangerouslySetInnerHTML={{ __html: aboutUs?.linkedinIcon || "" }} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-ttp-orange transition-colors">
                    <span dangerouslySetInnerHTML={{ __html: aboutUs?.twitterIcon || "" }} />
                  </a>
                  <a href={member.social.email} className="text-gray-400 hover:text-ttp-orange transition-colors">
                    <span dangerouslySetInnerHTML={{ __html: aboutUs?.mailIcon || "" }} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Governance & Advisory Panel CTA */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Governance panel */}
          <Card className="bg-gradient-to-br from-[#994fb2] to-[#994fb2] text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <span dangerouslySetInnerHTML={{ __html: aboutUs.ourGovernanceIcon }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{aboutUs.ourGovernanceHeading}</h3>
                  <p className="text-white/80">
                    {aboutUs.ourGovernanceText}
                  </p>
                </div>
              </div>
              <p className="text-white/90 mb-6">
                {aboutUs.ourGovernanceContent}
              </p>
              <div className="space-y-3 mb-6">
                {aboutUs.ourGovernanceList.map((item: { list: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
                  <div className="flex items-center gap-3" key={idx}>
                    <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
                    <span className="text-sm text-white/90">{item.list}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="bg-ttp-orange hover:bg-ttp-orange/90 text-white"
              >
                <Link href={aboutUs.ourGovernanceButtonLink}>
                  {aboutUs.ourGovernanceButton}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Advisory panel */}
          <Card className="bg-gradient-to-br from-[#7fb44a] to-emerald-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <span dangerouslySetInnerHTML={{ __html: aboutUs.globalAdvisoryIcon }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{aboutUs.globalAdvisoryHeading}</h3>
                  <p className="text-white/80">
                    {aboutUs.globalAdvisoryText}
                  </p>
                </div>
              </div>
              <p className="text-white/90 mb-6">
                {aboutUs.globalAdvisoryContent}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {aboutUs.globalAdvisoryNumberText.map((stat: { number: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; text: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
                  <div className="text-center" key={idx}>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.text}</div>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                <Link href={aboutUs.globalAdvisoryButtonLink}>
                  {aboutUs.globalAdvisoryButton}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#F16814] to-amber-500 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {aboutUs.joinOurCommunityHeading}
              </h3>
              <p className="mb-6 text-white/90">
                {aboutUs.joinOurCommunityContent}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <span dangerouslySetInnerHTML={{ __html: aboutUs.ourCommunityUserIcon }} />
                  <span className="font-medium">{aboutUs.ourCommunityUserText}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>{aboutUs.ourCommunityFreeForeverIcon}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
