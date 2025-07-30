'use client';
import React, { useState, useEffect } from "react";
import { Button } from "@/shared/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { Input } from "@/shared/components/input";
import { Label } from "@/shared/components/label";
import { Textarea } from "@/shared/components/textarea";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { aboutUs } from "../lib/contactus";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contactData, setContactData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await aboutUs();
        setContactData(res);
      } catch (err) {
        console.error("Failed to fetch contact data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <div className="p-10 text-center text-xl">Loading...</div>;
  }

  const {
    title,
    content,
    contactUs: {
      formHeading,
      getInTouchHeading,
      emailHeading,
      emails,
      officeAddressHeading,
      address,
      responseTimesHeading,
      responseTimesContent,
      editorialSubmissionsHeading,
      editorialSubmissionsContent,
    } = {},
  } = contactData || {};

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title || "Contact "}</h1>
            {content && (
              <p className="text-xl md:text-2xl leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: content }} />
              </p>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-ttp-charcoal mb-8">
                  {formHeading || "Send us a message"}
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-ttp-charcoal">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 text-[#1A1A1A] bg-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-ttp-charcoal">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 text-[#1A1A1A] bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-ttp-charcoal">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1 text-[#1A1A1A] bg-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-ttp-charcoal">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 text-[#1A1A1A] bg-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-ttp-charcoal">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 text-[#1A1A1A] bg-white"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-[#EF6C00] hover:bg-[#EF6C00]/90">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-ttp-charcoal mb-8">
                  {getInTouchHeading || "Get in touch"}
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-ttp-orange">
                        <Mail className="h-5 w-5 mr-2" />
                        {emailHeading || "Email Us"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div dangerouslySetInnerHTML={{ __html: emails || "" }} />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-ttp-orange">
                        <MapPin className="h-5 w-5 mr-2" />
                        {officeAddressHeading || "Office Address"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-ttp-charcoal">
                      <div dangerouslySetInnerHTML={{ __html: address || "" }} />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-ttp-orange">
                        <Clock className="h-5 w-5 mr-2" />
                        {responseTimesHeading || "Response Times"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div dangerouslySetInnerHTML={{ __html: responseTimesContent || "" }} />
                    </CardContent>
                  </Card>
                </div>

                {editorialSubmissionsHeading && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-ttp-charcoal mb-4">
                      {editorialSubmissionsHeading}
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div dangerouslySetInnerHTML={{ __html: editorialSubmissionsContent || "" }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
