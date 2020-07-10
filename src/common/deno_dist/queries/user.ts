import { performQuery } from "../query.ts";
import { User } from "../types.ts";

export async function user(apiKey: string): Promise<User> {
  return await performQuery(`
      query {
        user(apiKey: "${apiKey}") {
          name
          normalizedName
          apiKey
          packageNames
          createdAt
        }
      }
  `);
}
