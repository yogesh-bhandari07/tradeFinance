import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/dialog";
import { Separator } from "@/shared/components/separator";
import { 
  Linkedin, 
  Mail, 
  User, 
  Award,
  BookOpen,
  MessageCircle,
  ExternalLink,
  MapPin,
  Building2
} from "lucide-react";
import { CompanyPersonnel as PersonnelType } from "@/hooks/useCompanies";

interface InteractiveTeamProfilesProps {
  personnel: PersonnelType[];
  loading: boolean;
}

export const InteractiveTeamProfiles = ({ personnel, loading }: InteractiveTeamProfilesProps) => {

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Team & Leadership</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-muted rounded-full" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!personnel || personnel.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Team & Leadership</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No team information available</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const featuredPersonnel = personnel.filter(p => p.is_featured);
  const otherPersonnel = personnel.filter(p => !p.is_featured);

  // Mock additional data for enhanced profiles
  const getEnhancedProfile = (person: PersonnelType) => ({
    ...person,
    experience: Math.floor(Math.random() * 15) + 5,
    location: person.title?.includes('Head') ? 'London, UK' : 'Singapore',
    expertise: ['Trade Finance', 'Digital Banking', 'Risk Management'].slice(0, Math.floor(Math.random() * 3) + 1),
    recentActivity: [
      { type: 'article', title: 'Future of Trade Finance', date: '2024-01-15' },
      { type: 'webinar', title: 'Digital Banking Trends', date: '2024-01-10' },
      { type: 'interview', title: 'Industry Insights', date: '2024-01-05' }
    ].slice(0, Math.floor(Math.random() * 3) + 1),
    achievements: [
      'Certified Trade Finance Professional',
      'Digital Innovation Award 2023',
      'Industry Speaker at 50+ Events'
    ].slice(0, Math.floor(Math.random() * 3) + 1)
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Leadership Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Featured Personnel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPersonnel.map((person) => {
              const enhanced = getEnhancedProfile(person);
              return (
                <Dialog key={person.id}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer">
                      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 ">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <Avatar className="w-16 h-16 ring-2 ring-primary/20">
                                <AvatarImage src={person.avatar_url} alt={person.name} />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                                  {person.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-1">
                                <h4 className="font-semibold group-hover:text-primary transition-colors text-ttp-charcoal">
                                  {person.name}
                                </h4>
                                {person.title && (
                                  <p className="text-sm text-muted-foreground text-ttp-charcoal">{person.title}</p>
                                )}
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <MapPin className="w-3 h-3 text-ttp-charcoal" />
                                  {enhanced.location}
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex flex-wrap gap-1">
                                {enhanced.expertise.map((skill, index) => (
                                  <Badge key={index} variant="outline" className="text-xs text-ttp-charcoal" >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-3 pt-2">
                                {person.linkedin_url && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(person.linkedin_url, '_blank');
                                    }}
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </Button>
                                )}
                                {person.email && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(`mailto:${person.email}`, '_blank');
                                    }}
                                  >
                                    <Mail className="w-4 h-4" />
                                  </Button>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Mock contact functionality
                                  }}
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="sr-only">Team Member Profile</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start gap-6">
                        <Avatar className="w-24 h-24 ring-4 ring-primary/20">
                          <AvatarImage src={person.avatar_url} alt={person.name} />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xl">
                            {person.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-2xl font-bold">{person.name}</h3>
                            {person.title && (
                              <p className="text-lg text-muted-foreground">{person.title}</p>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {enhanced.experience} years experience
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-ttp-charcoal">
                              {enhanced.location}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            {person.linkedin_url && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(person.linkedin_url, '_blank')}
                              >
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                              </Button>
                            )}
                            {person.email && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(`mailto:${person.email}`, '_blank')}
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Email
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Bio */}
                      {person.bio && (
                        <div>
                          <h4 className="font-semibold mb-2">About</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {person.bio}
                          </p>
                        </div>
                      )}
                      
                      {/* Expertise */}
                      <div>
                        <h4 className="font-semibold mb-3">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {enhanced.expertise.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Recent Activity */}
                      <div>
                        <h4 className="font-semibold mb-3">Recent Activity</h4>
                        <div className="space-y-3">
                          {enhanced.recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                                {activity.type === 'article' && <BookOpen className="w-4 h-4" />}
                                {activity.type === 'webinar' && <User className="w-4 h-4" />}
                                {activity.type === 'interview' && <MessageCircle className="w-4 h-4" />}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm">{activity.title}</p>
                                <p className="text-xs text-muted-foreground">{activity.date}</p>
                              </div>
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3">Achievements & Certifications</h4>
                        <div className="space-y-2">
                          {enhanced.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Award className="w-4 h-4 text-primary" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
          
          {/* Other Personnel */}
          {otherPersonnel.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4 text-lg">Team Members</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherPersonnel.map((person) => (
                  <div key={person.id} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={person.avatar_url} alt={person.name} />
                      <AvatarFallback className="text-xs bg-gradient-to-br from-primary/20 to-secondary/20">
                        {person.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{person.name}</h4>
                      {person.title && (
                        <p className="text-xs text-muted-foreground truncate text-ttp-charcoal">{person.title}</p>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {person.linkedin_url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => window.open(person.linkedin_url, '_blank')}
                        >
                          <Linkedin className="w-3 h-3" />
                        </Button>
                      )}
                      {person.email && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => window.open(`mailto:${person.email}`, '_blank')}
                        >
                          <Mail className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};