"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Yolk = void 0;
var module = require("./queries/module");
var user = require("./queries/user");
var userMutation = require("./mutations/user");
var moduleMutation = require("./mutations/publish");
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var Yolk = /** @class */ (function () {
    function Yolk(url) {
        this.url = "http://localhost:8080/graphql";
        this.url = url || this.url;
    }
    /**
    * Returns graphql result from the nest.land API
    * @param {string} query
    * @returns {Promise<Object>} A user result
    */
    Yolk.prototype.execute = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var graphql, requestOptions, res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        graphql = JSON.stringify({
                            query: query,
                            variables: {}
                        });
                        requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: graphql
                        };
                        return [4 /*yield*/, fetch(this.url, requestOptions)];
                    case 1:
                        res = _c.sent();
                        _b = (_a = console).log;
                        return [4 /*yield*/, res.clone().text()];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [4 /*yield*/, res.clone().json()];
                    case 3: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Returns module info from the nest.land registry.
     * @param {string} name
     * @returns {Promise<Result<Module>>} A module result
     */
    Yolk.prototype.modules = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(module.modules())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all the modules from the nest.land registry.
     * @returns {Promise<Result<Module[]>>} A list of module results
     */
    Yolk.prototype.moduleByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(module.moduleByName(name))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a module and its version upload from the nest.land registry.
     * @returns {Promise<Result<Module[]>>} The module
     */
    Yolk.prototype.moduleUploadByVersion = function (name, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(module.moduleUploadByVersion(name, version))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns user info from the nest.land registry.
     * @param {string} apiKey
     * @returns {Promise<Result<User>>} A user result
     */
    Yolk.prototype.user = function (apiKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(user.user(apiKey))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns public user info from the nest.land registry.
     * @param {string} name
     * @returns {Promise<Result<PublicUser>>} A public user result
     */
    Yolk.prototype.userByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(user.userByName(name))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all the users from the nest.land registry.
     * @returns {Promise<Result<PublicUser[]>>} A public user result
     */
    Yolk.prototype.users = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(user.users())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a new package entry in the nest.land registry.
     * @param {NewUser} newUser
     * @returns {Promise<Result<User>>} The created nest.land user
     */
    Yolk.prototype.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(userMutation.createUser(user.name, user.password))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a new package entry in the nest.land registry.
     * @param {NewModule} newModule
     * @param {any} tar
     * @param {PackageDetails} packageDetails
     */
    Yolk.prototype.publish = function (newModule, tarFile, packageDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var createEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.execute(moduleMutation.publish(newModule))];
                    case 1:
                        createEntry = _a.sent();
                        if (!createEntry.data.createModule.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.uploadTar(tarFile, packageDetails)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Uploads tar package
     * @param {any} tarFile
     * @param {packageDetails} PackageDetails
     * @return {Promise<Object>} Upload result
     */
    Yolk.prototype.uploadTar = function (tarFile, packageDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var blob, formdata, requestOptions, res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        blob = new Blob([tarFile]);
                        formdata = new FormData();
                        formdata.append("file", blob);
                        formdata.append("config", JSON.stringify(packageDetails));
                        requestOptions = {
                            method: "POST",
                            body: formdata
                        };
                        return [4 /*yield*/, fetch("http://localhost:8080/package", requestOptions)];
                    case 1:
                        res = _c.sent();
                        _b = (_a = console).log;
                        return [4 /*yield*/, res.clone().text()];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [4 /*yield*/, res.clone().json()];
                    case 3: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    return Yolk;
}());
exports.Yolk = Yolk;
