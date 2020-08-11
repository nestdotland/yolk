export function createUser(name: string, password: string) {
  return (`
      mutation {
        createUser(username: "${name}", password: "${password}") {
          name
          normalizedName
          apiKey
          createdAt
        }
      }
  `);
}
