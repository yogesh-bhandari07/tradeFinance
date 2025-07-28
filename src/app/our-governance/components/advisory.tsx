import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/avatar";
import { MapPin, Users, ChevronDown, ChevronUp } from "lucide-react";

export const GlobalAdvisoryPanel = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setExpandedPanel(expandedPanel === panelId ? null : panelId);
  };

  const sectorAdvisors = [
    {
      name: "Michael Chen",
      role: "Former Head of Trade Finance",
      company: "HSBC Asia Pacific",
      location: "Hong Kong",
      expertise: "Documentary Trade & Supply Chain Finance",
      bio: "Led HSBC's trade finance operations across Asia Pacific for over 15 years, specializing in documentary credits and supply chain financing solutions.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sarah Martinez",
      role: "Global Treasury Director",
      company: "JPMorgan Chase",
      location: "New York, USA",
      expertise: "Treasury Operations & Risk Management",
      bio: "Over 20 years in treasury management, focusing on liquidity optimization, cash management, and regulatory compliance across global markets.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "David Kumar",
      role: "Head of Digital Payments",
      company: "Standard Chartered",
      location: "Singapore",
      expertise: "Digital Transformation & Fintech Innovation",
      bio: "Leading digital payment initiatives and fintech partnerships, with expertise in blockchain technology and cross-border payment solutions.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Emma Thompson",
      role: "Chief Risk Officer",
      company: "Barclays Corporate Banking",
      location: "London, UK",
      expertise: "Credit Risk & Compliance",
      bio: "Specialist in trade finance credit risk assessment and regulatory compliance, with extensive experience in AML and sanctions compliance.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Ahmed Al-Mansouri",
      role: "Head of Islamic Trade Finance",
      company: "Emirates NBD",
      location: "Dubai, UAE",
      expertise: "Sharia-Compliant Trade Solutions",
      bio: "Leading expert in Islamic trade finance structures, with deep knowledge of Sharia-compliant documentary credits and Murabaha financing.",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const geoAdvisors = [
    {
      name: "Li Wei",
      role: "Regional Trade Finance Head",
      company: "Bank of China",
      location: "Beijing, China",
      expertise: "Belt & Road Initiative Financing",
      bio: "Expert in China's Belt and Road Initiative trade financing, with extensive experience in cross-border RMB settlement and trade corridors.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Maria Santos",
      role: "Latin America Trade Director",
      company: "Banco Santander",
      location: "São Paulo, Brazil",
      expertise: "Emerging Markets Trade Finance",
      bio: "Specialist in Latin American trade corridors and commodity financing, with deep understanding of regional regulatory frameworks.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Klaus Mueller",
      role: "European Trade Finance Lead",
      company: "Deutsche Bank",
      location: "Frankfurt, Germany",
      expertise: "EU Trade Regulation & Green Finance",
      bio: "Leading authority on European trade finance regulations and sustainable trade finance initiatives within the EU framework.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Sharma",
      role: "South Asia Regional Head",
      company: "State Bank of India",
      location: "Mumbai, India",
      expertise: "Trade Corridor Development",
      bio: "Expert in South Asian trade finance markets, with particular focus on India-Middle East and India-Africa trade corridors.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "James Mitchell",
      role: "Africa Trade Finance Director",
      company: "Standard Bank",
      location: "Johannesburg, South Africa",
      expertise: "African Trade Development",
      bio: "Leading specialist in African trade finance markets, with extensive experience in commodity trade finance and infrastructure funding.",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const AdvisorCard = ({ advisor }: { advisor: any }) => (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="w-12 h-12 ring-2 ring-ttp-orange/20">
            <AvatarImage src={advisor.avatar} className="object-cover" />
            <AvatarFallback className="bg-ttp-orange text-white font-bold text-sm">
              {advisor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-ttp-charcoal  text-sm leading-tight">
              {advisor.name}
            </h4>
            <p className="text-ttp-orange font-medium text-xs">
              {advisor.role}
            </p>
            <p className="text-gray-600 text-xs">{advisor.company}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <MapPin className="w-3 h-3" />
              {advisor.location}
            </div>
          </div>
        </div>

        <Badge
          variant="outline"
          className="text-xs mb-2 border-ttp-purple text-ttp-purple "
        >
          {advisor.expertise}
        </Badge>

        <p className="text-xs text-gray-600 leading-relaxed">{advisor.bio}</p>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-green/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
            <span className="text-ttp-green font-medium">Expert Network</span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Global Advisory Panel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our global advisory panel consists of 50 senior executives from
            leading financial institutions worldwide, providing specialized
            expertise across key sectors and geographical markets.
          </p>
        </div>

        {/* Panel Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-ttp-orange to-ttp-orange/80 text-white bg-ttp-orange">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sector-Specific Panel</h3>
              <p className="text-white/90 mb-4">
                25 experts across trade finance, treasury, payments, and risk
                management
              </p>
              <div className="text-3xl font-bold">25</div>
              <div className="text-white/80">Industry Specialists</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ttp-purple to-ttp-purple/80 text-white bg-ttp-purple">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Geographic Panel</h3>
              <p className="text-white/90 mb-4">
                25 regional experts covering all major global markets and trade
                corridors
              </p>
              <div className="text-3xl font-bold">25</div>
              <div className="text-white/80">Regional Leaders</div>
            </CardContent>
          </Card>
        </div>

        {/* Sector-Specific Panel */}
        <div className="mb-12">
          <Card>
            <CardHeader
              className="cursor-pointer"
              onClick={() => togglePanel("sector")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-ttp-charcoal">
                    Sector-Specific Advisory Panel
                  </CardTitle>
                  <p className="text-gray-600">
                    Industry specialists across trade finance, treasury, and
                    payments
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-ttp-orange text-ttp-orange"
                  >
                    25 Advisors
                  </Badge>
                  {expandedPanel === "sector" ? (
                    <ChevronUp className="w-5 h-5 text-ttp-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ttp-orange" />
                  )}
                </div>
              </div>
            </CardHeader>

            {expandedPanel === "sector" && (
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectorAdvisors.map((advisor, index) => (
                    <AdvisorCard key={index} advisor={advisor} />
                  ))}
                  {/* Placeholder for remaining advisors */}
                  {Array.from({ length: 20 }, (_, i) => (
                    <Card key={`sector-placeholder-${i}`} className="h-full">
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <div className="text-sm text-gray-500">
                          Additional advisor profile
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Details coming soon
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Geographic Panel */}
        <div className="mb-12">
          <Card>
            <CardHeader
              className="cursor-pointer"
              onClick={() => togglePanel("geographic")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-ttp-charcoal">
                    Geographic Advisory Panel
                  </CardTitle>
                  <p className="text-gray-600">
                    Regional experts covering global markets and trade corridors
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-ttp-purple text-ttp-purple"
                  >
                    25 Advisors
                  </Badge>
                  {expandedPanel === "geographic" ? (
                    <ChevronUp className="w-5 h-5 text-ttp-purple" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ttp-purple" />
                  )}
                </div>
              </div>
            </CardHeader>

            {expandedPanel === "geographic" && (
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {geoAdvisors.map((advisor, index) => (
                    <AdvisorCard key={index} advisor={advisor} />
                  ))}
                  {/* Placeholder for remaining advisors */}
                  {Array.from({ length: 20 }, (_, i) => (
                    <Card key={`geo-placeholder-${i}`} className="h-full">
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <div className="text-sm text-gray-500">
                          Additional advisor profile
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Details coming soon
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Advisory Panel Insights
              </h3>
              <p className="mb-6 text-gray-300">
                Get exclusive access to research, market insights, and analysis
                from our global advisory panel.
              </p>
              <Button className="bg-ttp-orange hover:bg-ttp-orange/90 text-white">
                Access Panel Insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
