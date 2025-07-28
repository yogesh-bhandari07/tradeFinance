import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/tabs";
import { MediaPlatform } from "@/app/what-we-do/components/mediaplatform";
import { AgencyServices } from "@/app/what-we-do/components/agenecyservices";
import { EventsServices } from "@/app/what-we-do/components/eventsservices";

export const WhatWeDoTabs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="editorial" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="editorial"
              className="text-sm font-medium text-ttp-charcoal data-[state=active]:bg-[#F16814] data-[state=active]:text-white"
            >
              Editorial Platform
            </TabsTrigger>
            <TabsTrigger
              value="agency"
              className="text-sm font-medium text-ttp-charcoal data-[state=active]:bg-[#994fb2] data-[state=active]:text-white"
            >
              Agency Services
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="text-sm font-medium text-ttp-charcoal data-[state=active]:bg-[#7fb44a] data-[state=active]:text-white "
            >
              Events & Roundtables
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editorial" className="space-y-8">
            <MediaPlatform />
          </TabsContent>

          <TabsContent value="agency" className="space-y-8">
            <AgencyServices />
          </TabsContent>

          <TabsContent value="events" className="space-y-8">
            <EventsServices />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
