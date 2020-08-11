import { Yolk, publishModule } from "./index.ts";

const yolk = new Yolk("https://x2.nest.land/graphql");

console.log(await yolk.users())

publishModule({
  name: "my_module",
  apiKey: "bb7b0c6784084df5993139036e18b62c",
  description: "xyz",
  repository: "github.com/xyz/xyz",
  unlisted: false,
  locked: false,
  malicious: false,
}, {
  api_key: "bb7b0c6784084df5993139036e18b62c",
  package_name: "my_module",
  wallet: null,
  entry: "index.ts",
  upload: true,
  version: "0.0.1",
}, {
  "index.ts": "console.log()",
  "hello/bruh.ts": "export hey = 'asd'",
  "smthelse.md": "import 'index.ts'",
});
