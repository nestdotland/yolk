import { performQuery } from "../query";
import { Module, Result } from "../types";

export async function moduleByName(name: string): Promise<Result<Module>> {
  return await performQuery(`
      query {
        package(name: "${name}") {
          name
          normalizedName
          owner
          description
          repository
          latestVersion
          latestStableVersion
          packageUploadNames
          locked
          malicious
          unlisted
          updatedAt
          createdAt
        }
      }
  `);
}

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
          packageUploadNames
          locked
          malicious
          unlisted
          updatedAt
          createdAt
        }
      }
  `);
}
