import { Tar } from "https://deno.land/std/archive/tar.ts";
import * as yolk from "./index.ts";
import { NewModule, PackageDetails } from "../common/deno_dist/types.ts";

export async function publishModule(newModule: NewModule, packageDetails: PackageDetails, files: { [x: string]: string }) {
  const tar = new Tar();
  console.log(files);
  for (const k in files) {
    if (files.hasOwnProperty(k)) {
      const content = new TextEncoder().encode(files[k]);
      await tar.append(k, {
        reader: new Deno.Buffer(content),
        contentSize: content.byteLength,
      });
    }
  }
  await yolk.publish(newModule, await Deno.readAll(tar.getReader()), packageDetails);
}
