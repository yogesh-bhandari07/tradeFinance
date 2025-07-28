"use client";
import React, { useState } from "react";
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Get in touch with our team. We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-ttp-charcoal mb-8">
                  Send us a message
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-ttp-charcoal">
                            Full Name *
                          </Label>
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
                          <Label htmlFor="email" className="text-ttp-charcoal">
                            Email Address *
                          </Label>
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
                        <Label htmlFor="company" className="text-ttp-charcoal">
                          Company/Organization
                        </Label>
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
                        <Label htmlFor="subject" className="text-ttp-charcoal">
                          Subject *
                        </Label>
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
                        <Label htmlFor="message" className="text-ttp-charcoal">
                          Message *
                        </Label>
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

                      <Button
                        type="submit"
                        className="w-full bg-[#EF6C00] hover:bg-[#EF6C00]/90"
                      >
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
                  Get in touch
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-ttp-orange">
                        <Mail className="h-5 w-5 mr-2" />
                        Email Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-2">
                        For general inquiries:{" "}
                        <a
                          href="mailto:info@tradetreasurypayments.com"
                          className="text-ttp-orange hover:underline"
                        >
                          info@tradetreasurypayments.com
                        </a>
                      </p>
                      <p className="text-gray-700 mb-2">
                        Editorial:{" "}
                        <a
                          href="mailto:editorial@tradetreasurypayments.com"
                          className="text-ttp-orange hover:underline"
                        >
                          editorial@tradetreasurypayments.com
                        </a>
                      </p>
                      <p className="text-gray-700">
                        Partnerships:{" "}
                        <a
                          href="mailto:partnerships@tradetreasurypayments.com"
                          className="text-ttp-orange hover:underline"
                        >
                          partnerships@tradetreasurypayments.com
                        </a>
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-ttp-orange">
                        <MapPin className="h-5 w-5 mr-2" />
                        Office Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Trade & Transaction Finance Media Services Ltd
                        <br />
                        34-35 Clarges Street
                        <br />
                        London W1J 7EJ
                        <br />
                        United Kingdom
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-ttp-orange">
                        <Clock className="h-5 w-5 mr-2" />
                        Response Times
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-2">
                        <strong>General Inquiries:</strong> We typically respond
                        within 24-48 hours
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Editorial Submissions:</strong> Response within
                        1 week
                      </p>
                      <p className="text-gray-700">
                        <strong>Press Inquiries:</strong> Same-day response
                        during business hours
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Editorial Guidelines */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-ttp-charcoal mb-4">
                    Editorial Submissions
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      We welcome contributions from industry experts and thought
                      leaders. Before submitting, please review our editorial
                      guidelines:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Original content only</li>
                      <li>Minimum 800 words</li>
                      <li>Industry-relevant topics</li>
                      <li>Professional tone and perspective</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
