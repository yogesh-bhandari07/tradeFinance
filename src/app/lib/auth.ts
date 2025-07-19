const endpoint = 'https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments';

export async function loginUser(username: string, password: string) {
  const query = `
    mutation Login {
      login(input: { username: "${username}", password: "${password}" }) {
        authToken
        user {
          id
          name
          email
          jwtRefreshToken
          jwtAuthToken
        }
      }
    }
  `;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message || 'Login failed');
  }

  const { authToken, user } = result.data.login;

  // Save token to localStorage
  localStorage.setItem('tauthToken', authToken);
  localStorage.setItem('user', JSON.stringify(user));

  return user;
}
