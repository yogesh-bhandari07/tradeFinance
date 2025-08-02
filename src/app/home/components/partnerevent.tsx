'use client';
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Globe,
  Award,
  Filter,
} from "lucide-react";

export const PartnerEvents = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeLocation, setActiveLocation] = useState("all");

  const events = [
    {
      id: 1,
      title: "Global Trade Finance Summit 2025",
      organizer: "ICC & BAFT",
      date: "March 15-17, 2025",
      location: "Singapore",
      region: "Asia",
      type: "Conference",
      attendees: "2,500+",
      description:
        "The premier global event for trade finance professionals, featuring regulatory updates and digital transformation insights.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      virtual: false,
    },
    {
      id: 2,
      title: "Treasury & Cash Management Forum",
      organizer: "IIF & SWIFT",
      date: "April 8-9, 2025",
      location: "London, UK",
      region: "Europe",
      type: "Workshop",
      attendees: "800+",
      description:
        "Interactive workshops on liquidity management, risk mitigation, and payment system innovations.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      virtual: true,
    },
    {
      id: 3,
      title: "Digital Payments Revolution",
      organizer: "ADB & GTR",
      date: "May 20-21, 2025",
      location: "Hong Kong",
      region: "Asia",
      type: "Summit",
      attendees: "1,200+",
      description:
        "Exploring CBDC implementation, cross-border payment innovations, and regulatory frameworks.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      virtual: true,
    },
    {
      id: 4,
      title: "ESG in Banking Symposium",
      organizer: "Green Finance Institute",
      date: "June 5-6, 2025",
      location: "New York, USA",
      region: "Americas",
      type: "Symposium",
      attendees: "600+",
      description:
        "Sustainability and ESG considerations in modern banking and trade finance.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      virtual: false,
    },
  ];

  const eventTypes = [
    { id: "all", label: "All Events" },
    { id: "Conference", label: "Conferences" },
    { id: "Workshop", label: "Workshops" },
    { id: "Summit", label: "Summits" },
    { id: "Symposium", label: "Symposiums" },
  ];

  const locations = [
    { id: "all", label: "All Locations" },
    { id: "Asia", label: "Asia" },
    { id: "Europe", label: "Europe" },
    { id: "Americas", label: "Americas" },
  ];

  const filteredEvents = events.filter((event) => {
    const typeMatch = activeFilter === "all" || event.type === activeFilter;
    const locationMatch =
      activeLocation === "all" || event.region === activeLocation;
    return typeMatch && locationMatch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-orange/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-ttp-orange" />
            <span className="text-sm font-medium text-ttp-orange">
              Partner Events
            </span>
            <div className="w-2 h-2 bg-ttp-orange rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Industry Events & Conferences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join leading professionals at exclusive events organized by our
            partner associations and institutions
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-ttp-orange" />
            <span className="font-medium text-ttp-charcoal">
              Filter Events:
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Event Type Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 font-medium">Type:</span>
              {eventTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={activeFilter === type.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(type.id)}
                  className={`transition-all duration-200 ${
                    activeFilter === type.id
                      ? "bg-ttp-orange hover:bg-ttp-orange/90 text-white"
                      : "text-gray-600 hover:text-ttp-orange hover:border-ttp-orange"
                  }`}
                >
                  {type.label}
                </Button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 font-medium">
                Location:
              </span>
              {locations.map((location) => (
                <Button
                  key={location.id}
                  variant={
                    activeLocation === location.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveLocation(location.id)}
                  className={`transition-all duration-200 ${
                    activeLocation === location.id
                      ? "bg-ttp-green hover:bg-ttp-green/90 text-white"
                      : "text-gray-600 hover:text-ttp-green hover:border-ttp-green"
                  }`}
                >
                  {location.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                event.featured
                  ? "ring-2 ring-ttp-orange/20 hover:ring-ttp-orange/40"
                  : ""
              }`}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {event.featured && (
                    <Badge className="bg-ttp-orange text-white">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {event.virtual && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-500 text-white"
                    >
                      <Globe className="w-3 h-3 mr-1" />
                      Virtual
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="outline"
                    className="bg-white/90 text-ttp-charcoal border-ttp-orange"
                  >
                    {event.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="text-xs text-ttp-purple border-ttp-purple"
                  >
                    {event.organizer}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-ttp-orange transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-ttp-orange" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-ttp-green" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-ttp-purple" />
                    {event.attendees} attendees
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-ttp-orange hover:bg-ttp-orange/90"
                  >
                    Register Now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-ttp-orange text-ttp-orange hover:bg-ttp-orange hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No events found matching your filters.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setActiveFilter("all");
                setActiveLocation("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-ttp-charcoal to-ttp-charcoal/90 rounded-2xl bg-[#4e4d5b] p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated on All Events
          </h3>
          <p className="text-lg text-gray-300 mb-6 text-white">
            Get notified about upcoming conferences, workshops, and networking
            opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-ttp-orange hover:bg-ttp-orange/90">
              <Calendar className="w-5 h-5 mr-2" />
              View Event Calendar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Clock className="w-5 h-5 mr-2" />
              Set Reminders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
