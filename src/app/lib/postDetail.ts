

const endpoint =
  "https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments";

const POSTS_QUERY = `
 query GetSinglePost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      slug
      uri
      content
      excerpt
      date
      categories {
        edges {
          node {
            id
            name
            slug
            uri
          }
        }
      }
      tags {
        nodes {
          id
          name
          slug
          uri
        }
      }
      featuredImage {
        node {
          altText
          mediaDetails {
            sizes {
              name
              sourceUrl
            }
          }
        }
      }
      singlePostPage {
        downloadPdfButton
        downloadPdfLink
        downloadPdfContent
      }
      author {
        node {
          id
          databaseId
          name
          firstName
          lastName
          description
          avatar {
            url
          }
        }
      }
    }
  }
`;

const SINGLE_POST_SETTINGS_QUERY = `
  query GetSinglePostSettings {
    singlePostSettings {
      singlePostPageThemeOption {
        bottomSectionHeading
        bottomSectionContent
        newsletterButton
        newsletterButtonLink
        coursesButton
        coursesButtonLink
        heading
        description
        subscribeFreeButton
        subscribeFreeButtonLink
        addScript
        newsletterHeading
        newsletterDescription
        newsletterFormShortcode
        newsletterBottomContent
        advertisementScript
        advertisementImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

const RELATED_ARTICLES_QUERY = `
  query GetRelatedArticles($categoryId: [ID]!) {
    posts(where: { categoryIn: $categoryId }, first: 3) {
      nodes {
        title
        slug
        date
        excerpt
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            mediaDetails {
              sizes {
                name
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

const SAVE_ARTICLE=`
{
  "query": "mutation SavePostToFavorites { savePostToFavorites(input: { postId: $POSTID }) { success } }"
}
`;



export async function fetchArticle(id: string) {
  const token=  localStorage.getItem('tauthToken');
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: SAVE_ARTICLE,
      variables: { id },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message || "Error fetching posts");
  }

  return json.data.post;
}
export async function fetchPosts(slug: string) {
  // const token=  localStorage.getItem('authToken');
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: POSTS_QUERY,
      variables: { slug },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message || "Error fetching posts");
  }

  return json.data.post;
}

export async function fetchSinglePostSettings() {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: SINGLE_POST_SETTINGS_QUERY,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message || "Error fetching posts");
  }
  return json.data.singlePostSettings.singlePostPageThemeOption;
}

export async function fetchRelatedPosts(categoryId: string[]) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: RELATED_ARTICLES_QUERY,
      variables: {
        categoryId,
      },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(
      json.errors[0].message || "Error fetching related articles"
    );
  }

  return {
    nodes: json.data.posts.nodes,
  };
}
