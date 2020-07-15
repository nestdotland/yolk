import { performQuery } from "../query.ts";
import { User, PublicUser, Result } from "../types.ts";

/**
 * Returns user info from the nest.land registry.
 * @param {string} apiKey
 * @returns {Promise<Result<User>>} A user result
 */
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

/**
 * Returns public user info from the nest.land registry.
 * @param {string} name
 * @returns {Promise<Result<User>>} A public user result
 */
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

/**
 * Returns all the users from the nest.land registry.
 * @returns {Promise<Result<User[]>>} A public user result
 */
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
