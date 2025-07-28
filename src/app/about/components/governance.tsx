import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { ArrowRight, Shield, Award, Users, Scale } from "lucide-react";
import  Link  from "next/link";

export const AboutGovernanceLink = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-ttp-green/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
            <span className="text-ttp-green font-medium">
              Governance & Oversight
            </span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Our Governance Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on trust, transparency, and editorial independence. Learn more
            about our governance structure, advisory panels, and commitment to
            industry standards.
          </p>
        </div>

        <Card className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] text-white max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Comprehensive Governance
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Discover our editorial board, global advisory panel of 50+
                  industry experts, governance policies, and commitment to
                  transparent operations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ttp-orange rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">
                      Editorial Independence
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ttp-green rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">
                      IPSO Regulated
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ttp-purple rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">50+ Advisors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ttp-orange rounded-lg flex items-center justify-center">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">
                      Transparent Operations
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-ttp-orange hover:bg-ttp-orange/90 text-white font-semibold px-8 py-6 text-lg"
                >
                  <Link href="/governance">
                    Explore Our Governance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="lg:text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-6 mx-auto">
                  <Shield className="w-16 h-16 text-ttp-orange" />
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">6</div>
                    <div className="text-white/80 text-sm">
                      Editorial Board Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-white/80 text-sm">
                      Global Advisory Panel
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-white/80 text-sm">
                      Editorial Independence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
