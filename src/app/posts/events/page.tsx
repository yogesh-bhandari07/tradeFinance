'use client'
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/posts/events/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/select";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Award,
  Filter,
  Search,
  Star,
} from "lucide-react";
// import { Link } from "react-router-dom";

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

interface Event {
  id: string;
  title: string;
  organizer: string;
  date: string;
  endDate?: string;
  location: string;
  region: "Asia" | "Europe" | "Americas" | "Middle East" | "Africa";
  country: string;
  type: "Conference" | "Workshop" | "Summit" | "Symposium" | "Webinar";
  topics: string[];
  attendees: string;
  description: string;
  image: string;
  featured: boolean;
  ownEvent: boolean;
  virtual: boolean;
  status: "upcoming" | "ongoing" | "completed";
  speakers: Speaker[];
  registrationUrl?: string;
  website?: string;
}

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const events: Event[] = [
    {
      id: "1",
      title: "Global Trade Finance Summit 2025",
      organizer: "TTP & ICC",
      date: "2025-03-15",
      endDate: "2025-03-17",
      location: "Singapore",
      region: "Asia",
      country: "Singapore",
      type: "Summit",
      topics: ["Trade Finance", "Digital Transformation", "Supply Chain"],
      attendees: "2,500+",
      description:
        "The premier global event for trade finance professionals, featuring regulatory updates, digital transformation insights, and networking opportunities.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      ownEvent: true,
      virtual: false,
      status: "upcoming",
      speakers: [
        {
          name: "Sarah Chen",
          title: "Senior Trade Finance Director",
          company: "HSBC",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b593?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "Mark Thompson",
          title: "Head of Digital Trade",
          company: "Standard Chartered",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
      ],
      registrationUrl: "/register/global-summit-2025",
      website: "https://globaltradefinance.com",
    },
    {
      id: "2",
      title: "Treasury & Cash Management Forum",
      organizer: "IIF & SWIFT",
      date: "2025-04-08",
      endDate: "2025-04-09",
      location: "London, UK",
      region: "Europe",
      country: "United Kingdom",
      type: "Conference",
      topics: ["Treasury Management", "Cash Management", "Risk Management"],
      attendees: "800+",
      description:
        "Interactive workshops on liquidity management, risk mitigation, and payment system innovations.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      ownEvent: false,
      virtual: true,
      status: "upcoming",
      speakers: [
        {
          name: "Emma Rodriguez",
          title: "Chief Treasury Officer",
          company: "Deutsche Bank",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
      ],
      registrationUrl: "/register/treasury-forum-2025",
    },
    {
      id: "3",
      title: "Digital Payments Revolution",
      organizer: "ADB & GTR",
      date: "2025-05-20",
      endDate: "2025-05-21",
      location: "Hong Kong",
      region: "Asia",
      country: "Hong Kong",
      type: "Summit",
      topics: ["Digital Payments", "CBDC", "Blockchain"],
      attendees: "1,200+",
      description:
        "Exploring CBDC implementation, cross-border payment innovations, and regulatory frameworks.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      ownEvent: false,
      virtual: true,
      status: "upcoming",
      speakers: [
        {
          name: "Dr. Lisa Wang",
          title: "Head of Digital Innovation",
          company: "Bank of China",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
      ],
      registrationUrl: "/register/digital-payments-2025",
    },
    {
      id: "4",
      title: "ESG in Banking Symposium",
      organizer: "Green Finance Institute",
      date: "2025-06-05",
      endDate: "2025-06-06",
      location: "New York, USA",
      region: "Americas",
      country: "United States",
      type: "Symposium",
      topics: ["ESG", "Sustainable Finance", "Green Banking"],
      attendees: "600+",
      description:
        "Sustainability and ESG considerations in modern banking and trade finance.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      ownEvent: false,
      virtual: false,
      status: "upcoming",
      speakers: [],
      registrationUrl: "/register/esg-banking-2025",
    },
    {
      id: "5",
      title: "TTP Annual Conference 2024",
      organizer: "Trade Treasury Payments",
      date: "2024-11-15",
      endDate: "2024-11-17",
      location: "Dubai, UAE",
      region: "Middle East",
      country: "United Arab Emirates",
      type: "Conference",
      topics: ["Trade Finance", "Treasury", "Payments", "Digital Innovation"],
      attendees: "1,800+",
      description:
        "Our flagship annual event bringing together industry leaders to discuss the future of trade, treasury, and payments.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      ownEvent: true,
      virtual: false,
      status: "completed",
      speakers: [
        {
          name: "Michael Rodriguez",
          title: "Chief Executive Officer",
          company: "TTP",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
      ],
      website: "https://ttpconference.com",
    },
  ];

  const topics = [
    "Trade Finance",
    "Treasury Management",
    "Digital Payments",
    "CBDC",
    "ESG",
    "Risk Management",
    "Supply Chain",
    "Blockchain",
  ];
  const regions = ["Asia", "Europe", "Americas", "Middle East", "Africa"];
  const eventTypes = [
    "Conference",
    "Workshop",
    "Summit",
    "Symposium",
    "Webinar",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic =
      selectedTopic === "all" ||
      event.topics.some((topic) =>
        topic.toLowerCase().includes(selectedTopic.toLowerCase())
      );
    const matchesRegion =
      selectedRegion === "all" || event.region === selectedRegion;
    const matchesType = selectedType === "all" || event.type === selectedType;
    const matchesStatus =
      selectedStatus === "all" || event.status === selectedStatus;

    return (
      matchesSearch &&
      matchesTopic &&
      matchesRegion &&
      matchesType &&
      matchesStatus
    );
  });

  const featuredEvents = filteredEvents.filter((event) => event.featured);
  const ownEvents = filteredEvents.filter((event) => event.ownEvent);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTopic("all");
    setSelectedRegion("all");
    setSelectedType("all");
    setSelectedStatus("all");
  };

  const EventCard = ({ event }: { event: Event }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {event.featured && (
            <Badge className="bg-ttp-orange text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          {event.ownEvent && (
            <Badge className="bg-ttp-purple text-white">
              <Award className="w-3 h-3 mr-1" />
              TTP Event
            </Badge>
          )}
          {event.virtual && (
            <Badge variant="secondary" className="bg-blue-500 text-white">
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
            className="text-xs text-ttp-green border-ttp-green"
          >
            {event.organizer}
          </Badge>
          <Badge
            variant="outline"
            className={`text-xs ${
              event.status === "upcoming"
                ? "text-blue-600 border-blue-600"
                : event.status === "ongoing"
                ? "text-green-600 border-green-600"
                : "text-gray-600 border-gray-600"
            }`}
          >
            {event.status}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-ttp-orange transition-colors">
          {event.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-ttp-orange" />
            {event.endDate ? `${event.date} - ${event.endDate}` : event.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ttp-green" />
            {event.location}, {event.country}
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-ttp-purple" />
            {event.attendees} attendees
          </div>
        </div>

        {event.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {event.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {event.topics.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{event.topics.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {event.speakers.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-600 mb-2">
              Featured Speakers:
            </p>
            <div className="flex -space-x-2">
              {event.speakers.slice(0, 3).map((speaker, index) => (
                <img
                  key={index}
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  title={`${speaker.name} - ${speaker.title}, ${speaker.company}`}
                />
              ))}
              {event.speakers.length > 3 && (
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">
                  +{event.speakers.length - 3}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          {/* <Link to={`/conferences/${event.id}`} className="flex-1"> */}
            <Button
              size="sm"
              className="w-full bg-ttp-orange hover:bg-ttp-orange/90"
            >
              View Details
            </Button>
          {/* </Link> */}
          {event.registrationUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-ttp-orange text-ttp-orange hover:bg-ttp-orange hover:text-white"
            >
              Register
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-orange/10 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-ttp-orange" />
            <span className="text-sm font-medium text-ttp-orange">
              Global Events Directory
            </span>
            <div className="w-2 h-2 bg-ttp-orange rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Industry Events & Conferences
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover leading conferences, workshops, and summits in trade
            finance, treasury, and payments worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-ttp-orange" />
            <span className="font-medium text-ttp-charcoal">
              Filter Events:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ttp-orange focus:border-transparent"
                />
              </div>
            </div>

            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">
              Showing {filteredEvents.length} of {events.length} events
            </p>
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ttp-charcoal mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-ttp-orange" />
              Featured Events
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Our Events */}
        {ownEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ttp-charcoal mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-ttp-purple" />
              TTP Events
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {ownEvents
                .filter((event) => !event.featured)
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
          </div>
        )}

        {/* All Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-ttp-charcoal mb-6">
            All Events
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEvents
              .filter((event) => !event.featured && !event.ownEvent)
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No events found matching your criteria.
            </p>
            <Button onClick={clearFilters}>Clear All Filters</Button>
          </div>
        )}
      </div>

    </div>
  );
};

export default EventsPage;
