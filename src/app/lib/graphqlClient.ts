const endpoint = 'https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments';

export async function graphqlRequest(query: string, variables = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}
