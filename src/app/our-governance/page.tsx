'use client';
import React from "react";
import { GovernanceHero } from "@/app/our-governance/components/hero";
import { GovernanceStructure } from "@/app/our-governance/components/structure";
import { EditorialBoard } from "@/app/our-governance/components/editorial";
import { GlobalAdvisoryPanel } from "@/app/our-governance/components/advisory";
import { GovernancePolicies } from "@/app/our-governance/components/policy";

const GovernancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <GovernanceHero />
        <GovernanceStructure />
        <EditorialBoard />
        <GlobalAdvisoryPanel />
        <GovernancePolicies />
      </main>
    </div>
  );
};

export default GovernancePage;
