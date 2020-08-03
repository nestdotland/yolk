"use strict";
exports.__esModule = true;
exports.moduleUploadByVersion = exports.modules = exports.moduleByName = void 0;
function moduleByName(name) {
  return ('\n      query {\n        module(name: "' + name +
    '") {\n          name\n          normalizedName\n          owner\n          description\n          repository\n          latestVersion\n          latestStableVersion\n          uploads {\n            name\n            package\n            entry\n            version\n            prefix\n            malicious\n            files\n            createdAt\n          }\n          locked\n          malicious\n          unlisted\n          updatedAt\n          createdAt\n        }\n      }\n  ');
}
exports.moduleByName = moduleByName;
function modules() {
  return ("\n      query {\n        modules {\n          name\n          normalizedName\n          owner\n          description\n          repository\n          latestVersion\n          latestStableVersion\n          uploads {\n            name\n            package\n            entry\n            version\n            prefix\n            malicious\n            files\n            createdAt\n          }\n          locked\n          malicious\n          unlisted\n          updatedAt\n          createdAt\n        }\n      }\n  ");
}
exports.modules = modules;
function moduleUploadByVersion(name, version) {
  return ("\n      query {\n        module(name: " + name +
    ") {\n          name\n          normalizedName\n          owner\n          description\n          repository\n          latestVersion\n          latestStableVersion\n          upload(version: " +
    version +
    ") {\n            name\n            package\n            entry\n            version\n            prefix\n            malicious\n            files\n            createdAt\n          }\n          locked\n          malicious\n          unlisted\n          updatedAt\n          createdAt\n        }\n      }\n  ");
}
exports.moduleUploadByVersion = moduleUploadByVersion;
