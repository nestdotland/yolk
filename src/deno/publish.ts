import { Tar } from "https://deno.land/std/archive/tar.ts";
import { NewModule, PackageDetails } from "../common/deno_dist/types.ts";
import { Yolk } from "../common/deno_dist/index.ts";

interface StringMap {
  [x: string]: string;
}

export interface PublishModule {
  name: string;
  apiKey: string;
  description: string;
  repository: string;
  unlisted: boolean;
  locked: boolean;
  malicious: boolean;
  // TODO(@divy-work): add jwk interface as wallet type
  wallet: any | null;
  entry: string;
  upload: boolean;
  version: string;
}

export async function publish(
  module: PublishModule,
  files: StringMap,
  endpoint?: string,
): Promise<void> {
  return await publishModule(
    module,
    { ...module, api_key: module.apiKey, package_name: module.name },
    files,
    endpoint || "http://localhost:8080",
  );
}

async function publishModule(
  newModule: NewModule,
  packageDetails: PackageDetails,
  files: StringMap,
  endpoint: string,
) {
  const tar = new Tar();
  const yolk = new Yolk(endpoint);
  for (const k in files) {
    if (files.hasOwnProperty(k)) {
      const content = new TextEncoder().encode(files[k]);
      await tar.append(k, {
        reader: new Deno.Buffer(content),
        contentSize: content.byteLength,
      });
    }
  }
  return await yolk.publish(
    newModule,
    await Deno.readAll(tar.getReader()),
    packageDetails,
  );
}
