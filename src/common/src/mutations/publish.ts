import { performQuery } from "../query";
import { NewModule } from "../types";

export async function publish({ name, apiKey, description, repository, unlisted, locked, malicious }: NewModule) {
  return await performQuery(`
      mutation {
        createPackage(newPackage: {
            name: "${name}"
            apiKey: "${apiKey}"
            description: "${description}"
            repository: "${repository}"
            unlisted: ${unlisted}
            locked: ${locked}
            malicious: ${malicious}
        }) {
          ok
          msg
        }
      }
  `);
}
