'use client';
import React from "react";
import { AboutHero } from "@/app/about/components/hero";
import { AboutNavigation } from "@/app/about/components/navigation";
import { AboutWhoWeAre } from "@/app/about/components/aboutweare";
import { AboutMission } from "@/app/about/components/aboutmission";
import { AboutReach } from "@/app/about/components/aboutreach";
import { EditorialBoard } from "@/app/about/components/editorialboard";
import { AboutGovernanceLink } from "@/app/about/components/governance";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutNavigation />
      <main>
        <AboutWhoWeAre />
        <AboutMission />
        <AboutReach />
        <div id="team">
          <EditorialBoard />
        </div>
        <div id="advisory">
          <AboutGovernanceLink />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
