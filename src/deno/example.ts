import { modules, users, publishModule } from "./index.ts";

let nestLandModules = await modules();
console.log(nestLandModules);

let nestLandUsers = await users();
console.log(nestLandUsers);

publishModule({
  name: "newy_mod",
  apiKey: "haha",
  description: "asd",
  repository: "asd",
  unlisted: true,
  locked: false,
  malicious: false,
}, {
  api_key: "haha",
  package_name: "newy_mod",
  wallet: "",
  entry: "index.ts",
  upload: true,
  version: "0.3.0",
}, {
  "index.ts": "console.log()",
  "hello/bruh.ts": "export hey = 'asd'"
})
