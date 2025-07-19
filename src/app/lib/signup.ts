const endpoint = 'https://sproutsagesolutions.in/tradetreasurypayments/tradetreasurypayments';

export async function SignupUser(name: string, lastname:string,email:string,username:string, password: string,) {
  const query = `
  mutation SignupUser {
    registerUser(input: {
      firstName: "${name}", 
      lastName: "${lastname}",
      email: "${email}",
      username: "${username}",
      password: "${password}"
    }) {
      user {
        jwtRefreshToken
        jwtAuthToken
        id
        name
        email
        firstName
        lastName
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

  console.log(result.data);
  const { jwtAuthToken, jwtRefreshToken } = result.data.registerUser.user;

  localStorage.setItem('tauthToken', jwtAuthToken);
  localStorage.setItem('trefreshToken', jwtRefreshToken);

  return query;
}
