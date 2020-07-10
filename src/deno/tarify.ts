import { Tar } from "https://deno.land/std/archive/tar.ts";
const tar = new Tar();

export async function createTar() {
  const content = new TextEncoder().encode(
    "console.log('Bruh, this is nest.land!')",
  );
  await tar.append("mod.ts", {
    reader: new Deno.Buffer(content),
    contentSize: content.byteLength,
  });

  const writer = await Deno.open(
    "./test_module.tar",
    { write: true, create: true },
  );
  await Deno.copy(tar.getReader(), writer);
}
