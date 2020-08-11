"use strict";
exports.__esModule = true;
exports.createUser = void 0;
function createUser(name, password) {
    return ("\n      mutation {\n        createUser(username: \"" + name + "\", password: \"" + password + "\") {\n          name\n          normalizedName\n          apiKey\n          createdAt\n        }\n      }\n  ");
}
exports.createUser = createUser;
