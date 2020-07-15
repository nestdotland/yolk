import { performQuery } from "../query.ts";
import { NewModule, PackageDetails } from "../types.ts";

/**
 * Creates a new package entry in the nest.land registry.
 * @param {NewModule} newModule
 * @param {any} tar
 * @param {PackageDetails} packageDetails
 */
export async function publish(
  { name, apiKey, description, repository, unlisted, locked, malicious }:
    NewModule,
    tarFile: any,
    packageDetails: PackageDetails
) {
  let createEntry = await performQuery(`
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
  if(createEntry.data.createModule.ok) {
    await uploadTar(tarFile, packageDetails);
  }
}

/**
 * Uploads tar package
 * @param {any} tarFile
 * @param {packageDetails} PackageDetails
 * @return {Promise<Object>} Upload result
 */
async function uploadTar(tarFile: any, packageDetails: PackageDetails) {
  const blob = new Blob([tarFile]);
  const formdata = new FormData();
  formdata.append("file", blob);
  formdata.append("config", JSON.stringify(packageDetails));
  var requestOptions = {
    method: "POST",
    body: formdata,
  };
  let res = await fetch("http://localhost:8080/package", requestOptions);
  return await res.json();
}
