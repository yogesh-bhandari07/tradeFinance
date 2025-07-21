import React, { useState } from "react";
import { Card, CardContent } from "@/app/posts/events/components/card";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/dialog";
import { Input } from "@/shared/components/input";
import { Textarea } from "@/shared/components/textarea";
import { Company } from "../../../types/directorycompany";
import {
  Building2,
  ExternalLink,
  Play,
  Podcast,
  Award,
  Star,
  Shield,
  ArrowRight,
  Calendar,
  MapPin,
  Globe,
  Mail,
} from "lucide-react";

interface SponsoredCompanyCardProps {
  company: Company;
  className?: string;
}

export const SponsoredCompanyCard: React.FC<SponsoredCompanyCardProps> = ({
  company,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead form submitted:", formData);
    // Handle lead capture logic here
    setLeadFormOpen(false);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Card
      className={`border-2 border-ttp-orange/20 bg-gradient-to-br from-white to-ttp-orange/5 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-16 w-16 object-contain rounded-lg border border-gray-200"
                />
              ) : (
                <div className="h-16 w-16 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-ttp-orange text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
                {company.badges?.map((badge) => (
                  <Badge key={badge.id} variant="outline" className="text-xs">
                    {badge.text}
                  </Badge>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {company.name}
              </h3>
              <p className="text-lg text-gray-600 mb-3 leading-relaxed">
                {company.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                {company.headquarters && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{company.headquarters}</span>
                  </div>
                )}
                {company.founded && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {company.founded}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>{company.regions.length} regions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Dialog open={leadFormOpen} onOpenChange={setLeadFormOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-ttp-orange hover:bg-ttp-orange/90">
                    Book a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Get in touch with {company.name}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-ttp-orange hover:bg-ttp-orange/90"
                    >
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {company.website && (
                <Button variant="outline" asChild>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="px-6 pb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="ttp-content">TTP Content</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4">
              <div className="space-y-4">
                {company.productTypes && company.productTypes.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Products & Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.productTypes.map((product) => (
                        <Badge
                          key={product}
                          variant="outline"
                          className="bg-ttp-green/10 text-ttp-green"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {company.complianceTags &&
                  company.complianceTags.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Compliance & Standards
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {company.complianceTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-ttp-purple/10 text-ttp-purple"
                          >
                            <Shield className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </TabsContent>

            <TabsContent value="media" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company.mediaContent?.map((media) => (
                  <Card key={media.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        {media.type === "video" && (
                          <Play className="w-5 h-5 text-ttp-orange" />
                        )}
                        {media.type === "podcast" && (
                          <Podcast className="w-5 h-5 text-ttp-green" />
                        )}
                        <h5 className="font-medium text-gray-900">
                          {media.title}
                        </h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {media.description}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={media.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Watch Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ttp-content" className="mt-4">
              <div className="space-y-3">
                {company.ttlContent?.map((content) => (
                  <Card key={content.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-ttp-orange" />
                        <Badge variant="outline" className="text-xs">
                          {content.type.toUpperCase()}
                        </Badge>
                        {content.issueNumber && (
                          <Badge variant="outline" className="text-xs">
                            Issue {content.issueNumber}
                          </Badge>
                        )}
                      </div>
                      <h5 className="font-medium text-gray-900 mb-1">
                        {content.title}
                      </h5>
                      <p className="text-sm text-gray-600 mb-2">
                        {content.excerpt}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={content.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-ttp-orange hover:bg-ttp-orange/90"
                    onClick={() => setLeadFormOpen(true)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Request Information
                  </Button>
                  {company.website && (
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};
