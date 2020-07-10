import { modules, users } from "./index.ts";

let nestLandModules = await modules();
console.log(nestLandModules);

let nestLandUsers = await users();
console.log(nestLandUsers);
