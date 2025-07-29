import React from "react";
import { WhatWeDoHero } from "@/app/what-we-do/components/hero";
import { WhatWeDoTabs } from "@/app/what-we-do/components/whatwedo";
import { WhatWeDoCTA } from "@/app/what-we-do/components/cta";

const WhatWeDoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <WhatWeDoHero />
        <WhatWeDoTabs />
        <WhatWeDoCTA />
      </main>
    </div>
  );
};

export default WhatWeDoPage;
