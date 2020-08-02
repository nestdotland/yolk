import { NewModule } from "../types";

export function publish(
  { name, apiKey, description, repository, unlisted, locked, malicious }:
    NewModule,
): string {
  return (`
      mutation {
        createModule(newPackage: {
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
