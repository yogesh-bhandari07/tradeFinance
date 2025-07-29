import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Card, CardContent } from "@/shared/components/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/dialog";
import { Input } from "@/shared/components/input";
import { Label } from "@/shared/components/label";
import { Textarea } from "@/shared/components/textarea";
import { 
  Building2, 
  ExternalLink, 
  Globe, 
  MapPin, 
  Users, 
  Calendar, 
  Shield, 
  Star, 
  Phone, 
  Mail,
  Award,
  Eye,
  Bookmark,
  Share2
} from "lucide-react";
import { useState } from "react";
// import { toast } from "sonner";
import { Company } from "@/hooks/useCompanies";

interface EnhancedCompanyHeroProps {
  company: Company;
}

export const EnhancedCompanyHero = ({ company }: EnhancedCompanyHeroProps) => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone: '',
    message: '',
  });

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email) {
      return;
    }

    setIsSubmitting(true);
    try {
     
      setLeadFormOpen(false);
      setFormData({ full_name: '', email: '', company_name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Lead submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${company.name} - Company Profile`,
          text: company.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    //   toast.success('Link copied to clipboard!');
    }
  };

//   const customBranding = company.custom_branding || {};
//   const heroStyle = customBranding.hero_background 
//     ? { background: customBranding.hero_background }
//     : {};

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--muted)/0.1),transparent_70%)]" />
      
      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-6">
              {company.logo_url ? (
                <div className="relative">
                  <img 
                    src={company.logo_url} 
                    alt={`${company.name} logo`}
                    className="w-24 h-24 object-contain rounded-xl bg-white/90 p-3 shadow-lg border"
                  />
                  {company.verified && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-12 h-12 text-primary" />
                </div>
              )}
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-ttp-charcoal">
                      {company.name}
                    </h1>
                    <div className="flex gap-2">
                      {company.verified && (
                        <Badge variant="secondary" className="gap-1 bg-green-100 text-green-800 border-green-200">
                          <Shield className="w-3 h-3" />
                          Verified
                        </Badge>
                      )}
                      {company.featured && (
                        <Badge variant="default" className="gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          <Star className="w-3 h-3" />
                          Featured
                        </Badge>
                      )}
                      {company.sponsored && (
                        <Badge 
                          variant="outline" 
                          className="gap-1 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 text-ttp-charcoal"
                        >
                          <Award className="w-3 h-3" />
                          Sponsored
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-ttp-charcoal" />
                                              <div className="text-ttp-charcoal">

                      {company.company_type!.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </div>
                    </div>
                    {company.industry && (
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4 text-ttp-charcoal" />
                        <div className="text-ttp-charcoal">

                        {company.industry}
                        </div>
                      </div>
                    )}
                    {company.headquarters && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-ttp-charcoal" />
                        <div className="text-ttp-charcoal">

                        {company.headquarters}
                        </div>
                      </div>
                    )}
                    {company.employee_count && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-ttp-charcoal" />
                                                <div className="text-ttp-charcoal">

                        {company.employee_count} employees
                        </div>
                      </div>
                    )}
                    {company.founded && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-ttp-charcoal" />
                        <div className="text-ttp-charcoal">
                        Founded {company.founded}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {company.description && (
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-ttp-charcoal">
                    {company.description}
                  </p>
                )}

                {/* Enhanced Social Actions */}
                <div className="flex items-center gap-3 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="gap-2"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Saved' : 'Save'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4 text-ttp-charcoal" />
                    <span className="text-ttp-charcoal">1.2k views</span>
                  </div>
                </div>

                {/* USPs with enhanced styling */}
                {company.usps && company.usps.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-ttp-charcoal">Key Strengths</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {company.usps.map((usp, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm p-3 rounded-lg bg-gradient-to-r from-[#F16814]/5 to-transparent border border-[#F16814]/10">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full bg-ttp-orange" />
                          <div className="text-ttp-charcoal"> 

                          {usp}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enhanced Tags */}
                {company.tags && company.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {company.tags.slice(0, 6).map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 transition-colors cursor-pointer text-ttp-charcoal"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {company.tags.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{company.tags.length - 6} more
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Card */}
          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-4 shadow-xl border-primary/10">
              <CardContent className="p-6 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-br from-[#F16814]/5 to-secondary/5 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary text-ttp-orange">98%</div>
                    <div className="text-xs text-muted-foreground text-ttp-charcoal">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary text-ttp-orange/2">15+</div>
                    <div className="text-xs text-muted-foreground text-ttp-charcoal">Years Experience</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {company.website_url && (
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 hover:bg-primary/5"
                      onClick={() => window.open(company.website_url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </Button>
                  )}
                  
                  <Dialog open={leadFormOpen} onOpenChange={setLeadFormOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-[#F16814] hover:opacity-90">
                        Request Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-ttp-charcoal">Request Demo from {company.name}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmitLead} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="full_name"  className="text-ttp-charcoal">Full Name *</Label>
                            <Input
                              id="full_name"
                              className="border-ttp-charcoal text-black"
                              value={formData.full_name}
                              onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-ttp-charcoal">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                                                            className="border-ttp-charcoal text-black"

                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company_name" className="text-ttp-charcoal">Company</Label>
                            <Input
                              id="company_name"
                              value={formData.company_name}
                              onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
                              className="border-ttp-charcoal text-black"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-ttp-charcoal">Phone</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                              className="border-ttp-charcoal text-black"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-ttp-charcoal">Message</Label>
                          <Textarea
                            id="message"
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Tell us about your requirements..."
                              className="border-ttp-charcoal text-black"
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Send Request'}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Contact Info */}
                {(company.contact_email || company.contact_phone) && (
                  <div className="pt-4 border-t space-y-3">
                    <h4 className="font-medium text-sm text-ttp-charcoal">Direct Contact</h4>
                    {company.contact_email && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 text-ttp-charcoal" />
                        <a 
                          href={`mailto:${company.contact_email}`} 
                          className="hover:text-foreground transition-colors"
                        >
                          <div className="text-ttp-charcoal">
                          {company.contact_email}
                          </div>
                        </a>
                      </div>
                    )}
                    {company.contact_phone && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4 text-ttp-charcoal" />
                        <a 
                          href={`tel:${company.contact_phone}`} 
                          className="hover:text-foreground transition-colors"
                        >
                          <span className="text-ttp-charcoal">

                          {company.contact_phone}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Coverage */}
                {company.regions && company.regions.length > 0 && (
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-sm mb-2 text-black">Global Presence</h4>
                    <div className="flex flex-wrap gap-1">
                      {company.regions.slice(0, 4).map((region, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs hover:bg-primary/10 transition-colors text-black"
                        >
                          {region}
                        </Badge>
                      ))}
                      {company.regions.length > 4 && (
                        <Badge variant="outline" className="text-xs text-black">
                          +{company.regions.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};