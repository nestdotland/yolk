import { performQuery } from "../query.ts";
import { User, PublicUser } from "../types.ts";

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

export async function userByName(name: string): Promise<PublicUser> {
  return await performQuery(`
      query {
        userByName(name: "${name}") {
          name
          normalizedName
          packageNames
          createdAt
        }
      }
  `);
}

export async function users(): Promise<PublicUser[]> {
  return await performQuery(`
      query {
        users {
          name
          normalizedName
          packageNames
          createdAt
        }
      }
  `);
}
