export function user(apiKey: string): string {
  return (`
      query {
        user(apiKey: "${apiKey}") {
          name
          normalizedName
          apiKey
          modules {
            name
            normalizedName
            owner
            description
            repository
            latestVersion
            latestStableVersion
            locked
            malicious
            unlisted
            updatedAt
            createdAt
          }
          createdAt
        }
      }
  `);
}

export function userByName(name: string): string {
  return (`
      query {
        userByName(name: "${name}") {
          name
          normalizedName
          modules {
            name
            normalizedName
            owner
            description
            repository
            latestVersion
            latestStableVersion
            locked
            malicious
            unlisted
            updatedAt
            createdAt
          }
          createdAt
        }
      }
  `);
}

export function users(): string {
  return (`
      query {
        users {
          name
          normalizedName
          modules {
            name
            normalizedName
            owner
            description
            repository
            latestVersion
            latestStableVersion
            locked
            malicious
            unlisted
            updatedAt
            createdAt
          }
          createdAt
        }
      }
  `);
}
