import { performQuery } from "../query";
import { NewUser, Result, User } from "../types";

/**
 * Creates a new package entry in the nest.land registry.
 * @param {NewUser} newUser
 * @returns {}
 */
export async function createUser(newUser: NewUser): Promise<Result<User>> {
  return await performQuery(`
      mutation {
        createUser(newUser: {
            name: "${newUser.name}"
            password: "${newUser.password}"
        }) {
          name
          normalizedName
          apiKey
          packageNames
          createdAt
        }
      }
  `);
}