import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import {
  Building2,
  Users,
  FileText,
  Eye,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export const GovernanceStructure = () => {
  const governanceStructure = [
    {
      title: "Board of Directors",
      icon: Building2,
      description: "Strategic oversight and governance accountability",
      members: "5 Independent Directors",
      responsibilities: [
        "Strategic direction and policy approval",
        "Editorial independence oversight",
        "Risk management and compliance",
        "Financial oversight and audit approval",
      ],
      color: "ttp-orange",
    },
    {
      title: "Editorial Board",
      icon: Users,
      description: "Content quality and editorial standards",
      members: "6 Industry Experts",
      responsibilities: [
        "Editorial policy development",
        "Content quality assurance",
        "Industry expertise validation",
        "Ethical standards enforcement",
      ],
      color: "ttp-purple",
    },
    {
      title: "Advisory Committee",
      icon: FileText,
      description: "Industry guidance and market insights",
      members: "12 Senior Advisors",
      responsibilities: [
        "Market trend analysis",
        "Industry relationship management",
        "Strategic advisory services",
        "Stakeholder engagement",
      ],
      color: "ttp-green",
    },
  ];

  const complianceFramework = [
    {
      standard: "IPSO Regulation",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      standard: "GDPR Data Protection",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      standard: "Editorial Standards Code",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      standard: "Financial Conduct Authority",
      status: "Registered",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      standard: "ICO Data Controller",
      status: "Registered",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      standard: "Companies House Filing",
      status: "Current",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-orange/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
            <span className="text-ttp-orange font-medium">
              Governance Framework
            </span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Our Governance Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TTP operates under a robust three-tier governance model ensuring
            editorial independence, strategic oversight, and industry expertise
            across all our operations.
          </p>
        </div>

        {/* Governance Structure */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {governanceStructure.map((structure, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#F16814]"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-${structure.color} rounded-lg flex items-center justify-center`}
                  >
                    <structure.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`border-${structure.color} text-${structure.color}`}
                  >
                    {structure.members}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
                  {structure.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{structure.description}</p>
                <div>
                  <h4 className="font-semibold text-ttp-charcoal mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {structure.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-ttp-orange rounded-full mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Framework */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-ttp-green rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ttp-charcoal">
                Compliance & Regulatory Framework
              </h3>
              <p className="text-gray-600">
                Our commitment to regulatory compliance and industry standards
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceFramework.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <div>
                  <div className="font-medium text-ttp-charcoal">
                    {item.standard}
                  </div>
                  <div className="text-sm text-gray-600">{item.status}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#F16814]/5 rounded-lg border border-ttp-orange/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-ttp-orange mt-0.5" />
              <div>
                <h4 className="font-semibold text-ttp-charcoal mb-2">
                  Regulatory Information
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trade Treasury Payments is the trading name of Trade &
                  Transaction Finance Media Services Ltd (Company No: 16228111),
                  incorporated in England and Wales. We are registered as a Data
                  Controller under the ICO (ZB882947) and maintain VAT
                  registration (485 4500 78).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
