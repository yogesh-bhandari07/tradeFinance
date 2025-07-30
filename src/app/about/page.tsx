'use client';
import React ,{useEffect,useState} from "react";
import { AboutHero } from "@/app/about/components/hero";
import { AboutNavigation } from "@/app/about/components/navigation";
import { AboutWhoWeAre } from "@/app/about/components/aboutweare";
import { AboutMission } from "@/app/about/components/aboutmission";
import { AboutReach } from "@/app/about/components/aboutreach";
import { EditorialBoard } from "@/app/about/components/editorialboard";
import { AboutGovernanceLink } from "@/app/about/components/governance";
import { aboutUs } from "../lib/about";

const AboutPage = () => {

const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await aboutUs();
        setAboutData(res.aboutUs);
      } catch (err) {
        console.error("Failed to fetch contact data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return <div className="p-10 text-center text-xl">Loading...</div>;
  }

    return (
    <div className="min-h-screen bg-white">
      <AboutHero data={aboutData} />
      <AboutNavigation />
      <main>
        <AboutWhoWeAre data={aboutData} />
        <AboutMission data={aboutData} />
        <AboutReach data={aboutData} />
        <div id="team">
          <EditorialBoard data={aboutData} />
        </div>
        <div id="advisory">
          <AboutGovernanceLink data={aboutData} />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
