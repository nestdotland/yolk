"use strict";
exports.__esModule = true;
exports.publish = void 0;
function publish(_a) {
  var name = _a.name,
    apiKey = _a.apiKey,
    description = _a.description,
    repository = _a.repository,
    unlisted = _a.unlisted,
    locked = _a.locked,
    malicious = _a.malicious;
  var q =
    ('\n      mutation {\n        createModule(newPackage: {\n            name: "' +
      name + '"\n            apiKey: "' + apiKey +
      '"\n            description: "' + description +
      '"\n            repository: "' + repository +
      '"\n            unlisted: ' + unlisted + "\n            locked: " +
      locked + "\n            malicious: " + malicious +
      "\n        }) {\n          ok\n          msg\n        }\n      }\n  ");
  return q;
}
exports.publish = publish;
