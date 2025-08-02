import { EditorialBoard } from "../our-governance/components/editorial";
import { Hero } from "./components/hero";
import { MediaWall } from "./components/mediahall";
import { PartnerEvents } from "./components/partnerevent";
import { Partners } from "./components/partners";
import { PersonalizedHomepage } from "./components/personalized/personalized";
import { Publications } from "./components/publiacation";
import { ThemeHubs } from "./components/themebug";



export default function Homepage() {

return <div>

<Hero/>
<PersonalizedHomepage/>
<ThemeHubs/>
<MediaWall/>
<Publications/>
<EditorialBoard/>
<Partners/>
<PartnerEvents/>
</div>

}

