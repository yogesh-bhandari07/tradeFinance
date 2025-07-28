import React from "react";
import { Shield, Award, Users, Scale } from "lucide-react";
import { Card, CardContent } from "@/shared/components/card";   

export const GovernanceHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#1A1A1A] via-[#5B3CC4] to-[#1A1A1A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F86F03]/20 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-[#F86F03]" />
            <span className="text-[#F86F03] font-medium">Our Governance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Built on <span className="text-[#F86F03]">Trust</span> &{" "}
            <span className="text-[#108442]">Transparency</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            TTP operates under the highest standards of editorial independence,
            governance oversight, and industry ethics. Our commitment to
            unbiased, valuable content is backed by robust governance structures
            and transparent processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#F86F03] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Editorial Independence</h3>
              <p className="text-gray-300 text-sm">
                100% editorial freedom from commercial influence
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#108442] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Industry Recognition</h3>
              <p className="text-gray-300 text-sm">
                IPSO regulated with independent editorial standards
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#5B3CC4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Oversight</h3>
              <p className="text-gray-300 text-sm">
                Board of 6 industry leaders with 150+ years experience
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#F86F03] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Transparent Operations</h3>
              <p className="text-gray-300 text-sm">
                Open governance model with public accountability
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
