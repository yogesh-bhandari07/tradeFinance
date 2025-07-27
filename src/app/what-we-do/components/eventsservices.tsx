import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Coffee, Users, FileText, Mic, Calendar, Globe } from "lucide-react";

export const EventsServices = () => {
  const eventTypes = [
    {
      icon: Coffee,
      title: "TTP Breakfast Clubs",
      description:
        "Intimate breakfast meetings bringing together senior executives for strategic discussions on key market topics.",
      features: [
        "C-suite networking",
        "Market insights",
        "Regulatory updates",
        "Strategic discussions",
      ],
      frequency: "Monthly",
      audience: "25-30 executives",
      locations: ["London", "Singapore", "New York", "Dubai"],
      color: "border-[#F16814]",
    },
    {
      icon: Users,
      title: "Executive Roundtables",
      description:
        "Closed-door executive roundtables focused on specific challenges and opportunities in trade finance.",
      features: [
        "Peer-to-peer learning",
        "Solution development",
        "Best practice sharing",
        "Strategic planning",
      ],
      frequency: "Quarterly",
      audience: "15-20 executives",
      locations: ["Global", "Virtual options"],
      color: "border-[#994fb2]",
    },
    {
      icon: FileText,
      title: "Whitepaper Roundtables",
      description:
        "Collaborative roundtables that result in co-authored research papers and industry reports.",
      features: [
        "Research collaboration",
        "Data collection",
        "Expert insights",
        "Publication strategy",
      ],
      frequency: "Bi-annual",
      audience: "20-25 experts",
      locations: ["Major financial centers"],
      color: "border-[#7fb44a]",
    },
    {
      icon: Mic,
      title: "Conference Coverage",
      description:
        "Comprehensive conference coverage including live reporting, interviews, and post-event analysis.",
      features: [
        "Live coverage",
        "Executive interviews",
        "Key takeaways",
        "Market analysis",
      ],
      frequency: "Ongoing",
      audience: "Global reach",
      locations: ["Worldwide"],
      color: "border-[#3E3D4C]",
    },
  ];

  const upcomingEvents = [
    {
      title: "Trade Finance Innovation Summit",
      date: "March 15, 2024",
      location: "London",
      type: "Breakfast Club",
      focus: "AI and automation in trade finance",
      attendees: 28,
    },
    {
      title: "Treasury Risk Management Roundtable",
      date: "April 8, 2024",
      location: "Singapore",
      type: "Executive Roundtable",
      focus: "Managing currency volatility in Asia",
      attendees: 18,
    },
    {
      title: "Cross-Border Payments Whitepaper",
      date: "May 22, 2024",
      location: "New York",
      type: "Research Roundtable",
      focus: "Future of correspondent banking",
      attendees: 22,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-green/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
            <span className="text-ttp-green font-medium">
              Executive Engagement
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ttp-charcoal mb-8">
            Events & Roundtables
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our exclusive events bring together senior executives from the
            global trade and treasury community for strategic discussions,
            networking, and collaborative research initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-l-4 ${event.color} bg-white`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-ttp-green/10 transition-colors">
                    <event.icon className="w-5 h-5 text-ttp-charcoal group-hover:text-ttp-green transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-ttp-charcoal group-hover:text-ttp-green transition-colors">
                    {event.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="grid grid-cols-3 gap-4 text-xs text-gray-500 mb-4">
                  <div>
                    <div className="font-medium text-ttp-charcoal">
                      Frequency
                    </div>
                    <div>{event.frequency}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ttp-charcoal">
                      Audience
                    </div>
                    <div>{event.audience}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ttp-charcoal">
                      Locations
                    </div>
                    <div>{event.locations.join(", ")}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {event.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs text-ttp-charcoal">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-ttp-charcoal mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="border-ttp-green text-ttp-green text-xs"
                    >
                      {event.type}
                    </Badge>
                    <div className="text-right text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Globe className="w-3 h-3" />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold text-ttp-charcoal mb-2 group-hover:text-ttp-green transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-3">{event.focus}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      {event.attendees} attendees
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Wrap Coverage */}
        <Card className="bg-ttp-green text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Comprehensive Event Coverage
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Every event includes professional coverage with editorial wrap-up,
              key insights, and syndicated content distribution to our global
              network of 160k+ professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Live Coverage",
                "Executive Interviews",
                "Key Takeaways",
                "Editorial Syndication",
              ].map((service) => (
                <Badge
                  key={service}
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
