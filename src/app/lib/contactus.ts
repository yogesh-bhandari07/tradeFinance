const endpoint =
  "https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments";

const CONTACT = `query GetEditorialBoardUsers { 
 pageBy(uri: \"contact-us\") {    title    slug    content    contactUs {      formHeading      formShortcode      getInTouchHeading      emailHeading      emails      officeAddressHeading      address      responseTimesHeading      responseTimesContent      editorialSubmissionsHeading      editorialSubmissionsContent    }  }}`;

export async function aboutUs() {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: CONTACT,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message || "Error fetching posts");
  }

  return json.data.pageBy;
}
