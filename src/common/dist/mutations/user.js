"use strict";
exports.__esModule = true;
exports.createUser = void 0;
function createUser(name, password) {
    return ("\n      mutation {\n        createUser(newUser: {\n            name: \"" + name + "\"\n            password: \"" + password + "\"\n        }) {\n          name\n          normalizedName\n          apiKey\n          createdAt\n        }\n      }\n  ");
}
exports.createUser = createUser;
