import { performQuery } from "../query";
import { User, PublicUser, Result } from "../types";

export async function user(apiKey: string): Promise<Result<User>> {
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

export async function userByName(name: string): Promise<Result<PublicUser>> {
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

export async function users(): Promise<Result<PublicUser[]>> {
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
