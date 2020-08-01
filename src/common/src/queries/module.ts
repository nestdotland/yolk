import { performQuery } from "../query";
import { Module, Result } from "../types";

/**
 * Returns module info from the nest.land registry.
 * @param {string} name
 * @returns {Promise<Result<Module>>} A module result
 */
export async function moduleByName(name: string): Promise<Result<Module>> {
  return await performQuery(`
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

/**
 * Returns all the modules from the nest.land registry.
 * @returns {Promise<Result<Module[]>>} A list of module results
 */
export async function modules(): Promise<Result<Module[]>> {
  return await performQuery(`
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
