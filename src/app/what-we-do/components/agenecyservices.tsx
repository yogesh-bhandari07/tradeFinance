// import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/dialog";
import {
  PenTool,
  Video,
  MessageSquare,
  Users,
  FileText,
  Award,
  ChevronRight,
} from "lucide-react";

export const AgencyServices = () => {
//   const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const services = [
    {
      icon: PenTool,
      title: "Content & Ghostwriting",
      description:
        "Premium content creation and ghostwriting services for executives and institutions.",
      features: [
        "Executive bylines",
        "Thought leadership articles",
        "White papers",
        "Case studies",
        "Research reports",
      ],
      color: "border-[#F16814]",
    },
    {
      icon: Video,
      title: "Video & Podcast Production",
      description:
        "Professional video and podcast production services with full post-production support.",
      features: [
        "Executive interviews",
        "Corporate documentaries",
        "Webinar production",
        "Podcast series",
        "Event coverage",
      ],
      color: "border-[#994fb2]",
    },
    {
      icon: MessageSquare,
      title: "Messaging & Positioning",
      description:
        "Strategic messaging and positioning consultancy for complex financial services and fintech companies.",
      features: [
        "Brand positioning",
        "Message architecture",
        "Competitive analysis",
        "Value proposition",
        "Go-to-market strategy",
      ],
      color: "border-[#7fb44a]",
    },
    {
      icon: Users,
      title: "Event Programming",
      description:
        "Complete event programming and speaker training services for conferences and corporate events.",
      features: [
        "Conference programming",
        "Speaker training",
        "Panel moderation",
        "Event strategy",
        "Media training",
      ],
      color: "border-[#3E3D4C]",
    },
    {
      icon: FileText,
      title: "Research & Co-authorship",
      description:
        "Collaborative research projects and co-authored reports with industry-leading institutions.",
      features: [
        "Market research",
        "Industry reports",
        "Survey design",
        "Data analysis",
        "Publication strategy",
      ],
      color: "border-[#F16814]",
    },
    {
      icon: Award,
      title: "Strategic Communications",
      description:
        "Integrated strategic communications campaigns for product launches and corporate initiatives.",
      features: [
        "PR campaigns",
        "Media relations",
        "Crisis communications",
        "Executive profiling",
        "Stakeholder engagement",
      ],
      color: "border-[#994fb2]",
    },
  ];

  const caseStudies = [
    {
      id: "wells-fargo",
      client: "Wells Fargo",
      title: "Trade Finance Digital Transformation",
      description:
        "Comprehensive content strategy and executive positioning campaign for Wells Fargo's digital trade finance initiative.",
      results: [
        "40% increase in thought leadership visibility",
        "25 executive bylines published",
        "200k+ professional reach",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "adb",
      client: "Asian Development Bank",
      title: "Trade Finance Gap Research",
      description:
        "Co-authored research report on the Asian trade finance gap, featuring comprehensive market analysis and policy recommendations.",
      results: [
        "500+ media mentions",
        "10 country policy adoptions",
        "IMF collaboration achieved",
      ],
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "icc",
      client: "International Chamber of Commerce",
      title: "Global Trade Digitization Campaign",
      description:
        "Multi-channel campaign promoting digital trade solutions, including video series, executive interviews, and policy briefings.",
      results: [
        "1M+ global impressions",
        "50+ expert interviews",
        "30 country engagement",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#994fb2]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-purple rounded-full"></div>
            <span className="text-ttp-purple font-medium">
              White-Label Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ttp-charcoal mb-8">
            Agency Services
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From content creation to strategic communications, we provide
            comprehensive agency services that help our clients build authority,
            engage stakeholders, and drive business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-l-4 ${service.color} bg-white`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-ttp-purple/10 transition-colors">
                    <service.icon className="w-5 h-5 text-ttp-charcoal group-hover:text-ttp-purple transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-ttp-charcoal group-hover:text-ttp-purple transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs text-ttp-charcoal">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-ttp-charcoal mb-8 text-center">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Dialog key={study.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-[#3E3D4C] to-[#994fb2] relative overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white">
                          {study.client}
                        </h4>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h5 className="font-bold text-ttp-charcoal mb-2 group-hover:text-ttp-orange transition-colors">
                        {study.title}
                      </h5>
                      <p className="text-sm text-gray-600 mb-4">
                        {study.description}
                      </p>
                      <div className="flex items-center text-ttp-orange text-sm font-medium">
                        View Case Study
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">
                      {study.client}: {study.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                    <div>
                      <h4 className="font-bold text-ttp-charcoal mb-3">
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
                            <span className="text-sm text-gray-600">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
