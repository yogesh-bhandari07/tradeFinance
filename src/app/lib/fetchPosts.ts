const endpoint = 'https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments';


const POSTS_QUERY = `
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
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
  }
`;

export async function fetchPosts({

    limit = 10,
    after = null,
}: {
    limit?: number;
    after?: string | null;
}) {
    const token=  localStorage.getItem('authToken');
    const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: POSTS_QUERY,
      variables: {
        first: limit,
        after,
      },
    }),
  });

  const json = await res.json();

  if (json.errors) {

    console.error('GraphQL Errors:', json.errors);
    throw new Error(json.errors[0].message || 'Error fetching posts');
  }

  return json.data.posts;
}
