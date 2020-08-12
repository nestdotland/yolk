import { Yolk, publishModule } from "./index.ts";

const yolk = new Yolk("http://localhost:8080/graphql");

publishModule({
  name: "my_module2",
  apiKey: "haha", // add user api key here
  description: "xyz",
  repository: "github.com/xyz/xyz",
  unlisted: false,
  locked: false,
  malicious: false,
}, {
  api_key: "haha", // add user api key here
  package_name: "my_module2",
  wallet: null, // add you keyfile json here
  entry: "index.ts",
  upload: true,
  version: "0.0.1",
}, {
  "index.ts": "console.log()",
  "hello/bruh.ts": "export hey = 'asd'",
  "smthelse.md": "import 'index.ts'",
});
