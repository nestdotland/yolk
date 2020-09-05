import { Yolk, publish } from "./index.ts";

const yolk = new Yolk("http://localhost:8080");

publish(
  {
    name: "my_module2",
    apiKey: "haha", // add user api key here
    description: "xyz",
    repository: "github.com/xyz/xyz",
    unlisted: false,
    locked: false,
    malicious: false,
    wallet: null, // add you keyfile json here
    entry: "index.ts",
    upload: true,
    version: "0.0.2",
  },
  {
    "index.ts": "console.log()",
    "hello/bruh.ts": "export hey = 'asd'",
    "smthelse.md": "import 'index.ts'",
  },
);
