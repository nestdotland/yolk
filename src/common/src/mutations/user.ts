export function createUser(name: string, password: string) {
  return (`
      mutation {
        createUser(newUser: {
            name: "${name}"
            password: "${password}"
        }) {
          name
          normalizedName
          apiKey
          createdAt
        }
      }
  `);
}
