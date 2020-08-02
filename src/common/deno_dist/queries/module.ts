export function moduleByName(name: string): string {
  return (`
      query {
        module(name: "${name}") {
          name
          normalizedName
          owner
          description
          repository
          latestVersion
          latestStableVersion
          uploads {
            name
            package
            entry
            version
            prefix
            malicious
            files
            createdAt
          }
          locked
          malicious
          unlisted
          updatedAt
          createdAt
        }
      }
  `);
}

export function modules(): string {
  return (`
      query {
        modules {
          name
          normalizedName
          owner
          description
          repository
          latestVersion
          latestStableVersion
          uploads {
            name
            package
            entry
            version
            prefix
            malicious
            files
            createdAt
          }
          locked
          malicious
          unlisted
          updatedAt
          createdAt
        }
      }
  `);
}

export function moduleUploadByVersion(name: string, version: string): string {
  return (`
      query {
        module(name: ${name}) {
          name
          normalizedName
          owner
          description
          repository
          latestVersion
          latestStableVersion
          upload(version: ${version}) {
            name
            package
            entry
            version
            prefix
            malicious
            files
            createdAt
          }
          locked
          malicious
          unlisted
          updatedAt
          createdAt
        }
      }
  `);
}
