import { performQuery } from "../query";
import { Module } from "../types";

export async function moduleByName(name: string): Promise<Module> {
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

export async function modules(): Promise<Module[]> {
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
