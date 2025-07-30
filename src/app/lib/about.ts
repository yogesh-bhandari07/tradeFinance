const endpoint =
  "https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments";

const ABOUTUS = `query GetAboutPage {  pageBy(uri: \"about-us\") {    title    slug    aboutUs {      bannerTag      bannerHeading      bannerOriangeHeading      bannerContent      bannerTrustFactors {        icon        heading        text      }      tabSection {        heading      }      ourFoundationHeading      whoWeAreHeading      whoWeAreContent      whoWeAreCardSection {        icon        heading        tag        content      }      globalDecisionHeading      globalDecisionContent      globalDecisionTags {        tag      }      ourPurposeHeading      ourMissionHeading      ourMissionContent      ourMissionCardSection {        icon        heading        content      }      globalImpactHeading      whoWeReachHeading      whoWeReachContent      whoWeReachCardSection {        icon        number        content      }      stakeholderBottonText      stakeholderBottomTags {        tag      }      meetOurExpertsHeading      editorialBoardHeading      editorialBoardContent      editorialBoardList {        text      }      editorialBoardUser {        nodes {          id          nicename          description          avatar {            url          }        }      }      ourGovernanceIcon      ourGovernanceHeading      ourGovernanceText      ourGovernanceContent      ourGovernanceList {        list      }      ourGovernanceButtonLink      ourGovernanceButton      globalAdvisoryIcon      globalAdvisoryHeading      globalAdvisoryText      globalAdvisoryContent      globalAdvisoryNumberText {        number        text      }      globalAdvisoryButtonLink      globalAdvisoryButton      joinOurCommunityHeading      joinOurCommunityContent      ourCommunityUserIcon      ourCommunityUserText      ourCommunityFreeForeverIcon      oversightHeading      governanceFrameworkHeading      governanceFrameworkContent      comprehensiveGovernanceHeading      comprehensiveGovernanceContent      comprehensiveGovernanceList {        icon        text      }      comprehensiveGovernanceButtonLink      comprehensiveGovernanceContent      comprehensiveGovernanceIcon      comprehensiveGovernanceNumberTextList {        number        text      }    }  }}`;

export async function aboutUs() {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: ABOUTUS,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message || "Error fetching posts");
  }

  return json.data.pageBy;
}
