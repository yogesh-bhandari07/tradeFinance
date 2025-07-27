import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import {
  FileText,
  Download,
  ExternalLink,
  Shield,
  Users,
  AlertTriangle,
  Globe,
} from "lucide-react";

export const GovernancePolicies = () => {
  const policies = [
    {
      title: "Editorial Policy",
      description:
        "Our comprehensive editorial standards, independence guidelines, and content creation processes.",
      icon: FileText,
      lastUpdated: "January 2025",
      downloadUrl: "#",
      color: "ttp-orange",
    },
    {
      title: "Privacy Policy",
      description:
        "How we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws.",
      icon: Shield,
      lastUpdated: "December 2024",
      downloadUrl: "/privacy-policy",
      color: "ttp-green",
    },
    {
      title: "Terms & Conditions",
      description:
        "Legal terms governing the use of our platform, content licensing, and user responsibilities.",
      icon: Users,
      lastUpdated: "January 2025",
      downloadUrl: "#",
      color: "ttp-purple",
    },
    {
      title: "Complaints Procedure",
      description:
        "Process for submitting and handling complaints about our content, services, or conduct.",
      icon: AlertTriangle,
      lastUpdated: "November 2024",
      downloadUrl: "#",
      color: "ttp-charcoal",
    },
    {
      title: "Cookie Policy",
      description:
        "Information about how we use cookies and similar technologies on our website.",
      icon: Globe,
      lastUpdated: "December 2024",
      downloadUrl: "#",
      color: "ttp-orange",
    },
    {
      title: "Disclaimer",
      description:
        "Important disclaimers regarding our content, analysis, and the use of information provided.",
      icon: FileText,
      lastUpdated: "January 2025",
      downloadUrl: "#",
      color: "ttp-green",
    },
  ];

  const ethicalStandards = [
    {
      principle: "Editorial Independence",
      description:
        "Complete separation between editorial content and commercial interests",
    },
    {
      principle: "Accuracy & Fact-Checking",
      description: "Rigorous verification processes for all published content",
    },
    {
      principle: "Transparency",
      description:
        "Clear disclosure of sources, methodologies, and potential conflicts",
    },
    {
      principle: "Right of Reply",
      description:
        "Fair opportunity for response to criticism or disputed claims",
    },
    {
      principle: "Corrections Policy",
      description: "Prompt and prominent correction of errors when identified",
    },
    {
      principle: "Source Protection",
      description: "Confidentiality protection for sources when requested",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-purple/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-ttp-purple rounded-full"></div>
            <span className="text-ttp-purple font-medium">
              Policies & Standards
            </span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Governance Policies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive policy framework ensures transparency,
            accountability, and ethical conduct across all aspects of our
            operations.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#F16814]"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-${policy.color} rounded-lg flex items-center justify-center`}
                  >
                    <policy.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-500">
                    Updated {policy.lastUpdated}
                  </span>
                </div>
                <CardTitle className="text-lg text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {policy.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-ttp-orange text-ttp-orange hover:bg-ttp-orange hover:text-white"
                    onClick={() => window.open(policy.downloadUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-ttp-orange"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ethical Standards */}
        <div className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] rounded-xl p-8 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Ethical Standards</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              TTP operates under strict ethical guidelines that govern our
              editorial processes, content creation, and stakeholder
              relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
              >
                <h4 className="font-bold text-ttp-orange mb-3">
                  {standard.principle}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-ttp-orange hover:bg-ttp-orange/90 text-white">
              Download Full Ethics Code
              <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
