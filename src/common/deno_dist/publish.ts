import { createPackage } from "./query.ts";

export default async function publish() {
  console.log(await createPackage(`
      mutation {
        createPackage(newPackage: {
            name: "autopilot"
            apiKey: "haha"
            description: "Cross-platform desktop automation"
            repository: "https://github.com/divy-work/autopilot-deno"
            unlisted: false
            locked: false
            malicious: false
        }) {
          ok
        }
      }
  `));
}
