"use strict";
exports.__esModule = true;
exports.users = exports.userByName = exports.user = void 0;
function user(apiKey) {
  return ('\n      query {\n        user(apiKey: "' + apiKey +
    '") {\n          name\n          normalizedName\n          apiKey\n          modules {\n            name\n            normalizedName\n            owner\n            description\n            repository\n            latestVersion\n            latestStableVersion\n            locked\n            malicious\n            unlisted\n            updatedAt\n            createdAt\n          }\n          createdAt\n        }\n      }\n  ');
}
exports.user = user;
function userByName(name) {
  return ('\n      query {\n        userByName(name: "' + name +
    '") {\n          name\n          normalizedName\n          modules {\n            name\n            normalizedName\n            owner\n            description\n            repository\n            latestVersion\n            latestStableVersion\n            locked\n            malicious\n            unlisted\n            updatedAt\n            createdAt\n          }\n          createdAt\n        }\n      }\n  ');
}
exports.userByName = userByName;
function users() {
  return ("\n      query {\n        users {\n          name\n          normalizedName\n          modules {\n            name\n            normalizedName\n            owner\n            description\n            repository\n            latestVersion\n            latestStableVersion\n            locked\n            malicious\n            unlisted\n            updatedAt\n            createdAt\n          }\n          createdAt\n        }\n      }\n  ");
}
exports.users = users;
