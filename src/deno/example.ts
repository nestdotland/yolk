import { Yolk, publishModule } from "./index.ts";

const yolk = new Yolk();
let nestLandModules = await yolk.modules();
console.log(nestLandModules);

let nestLandUsers = await yolk.users();
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
  wallet: null,
  entry: "index.ts",
  upload: true,
  version: "0.4.0",
}, {
  "index.ts": "console.log()",
  "hello/bruh.ts": "export hey = 'asd'",
  "smthelse.md": "import 'index.ts'",
});
