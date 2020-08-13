import {
  User,
  PublicUser,
  Module,
  Result,
  NewUser,
  NewModule,
  PackageDetails,
} from "./types.ts";
import * as module from "./queries/module.ts";
import * as user from "./queries/user.ts";
import * as userMutation from "./mutations/user.ts";
import * as moduleMutation from "./mutations/publish.ts";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export class Yolk {
  public url: string = "http://localhost:8080";
  constructor(url?: string) {
    this.url = url || this.url;
  }
  /**
   * Returns graphql result from the nest.land API
   * @param {string} query
   * @returns {Promise<Object>} A user result
   */
  async execute(query: string) {
    var graphql = JSON.stringify({
      query,
      variables: {},
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
    };
    let res = await fetch(`${this.url}/graphql`, requestOptions);
    console.log(await res.clone().text());
    return await res.clone().json();
  }

  /**
   * Returns module info from the nest.land registry.
   * @param {string} name
   * @returns {Promise<Result<Module>>} A module result
   */
  async modules(): Promise<Result<Module[]>> {
    return await this.execute(module.modules());
  }

  /**
   * Returns all the modules from the nest.land registry.
   * @returns {Promise<Result<Module[]>>} A list of module results
   */
  async moduleByName(name: string): Promise<Result<Module[]>> {
    return await this.execute(module.moduleByName(name));
  }

  /**
   * Returns a module and its version upload from the nest.land registry.
   * @returns {Promise<Result<Module[]>>} The module
   */
  async moduleUploadByVersion(
    name: string,
    version: string,
  ): Promise<Result<Module[]>> {
    return await this.execute(module.moduleUploadByVersion(name, version));
  }

  /**
   * Returns user info from the nest.land registry.
   * @param {string} apiKey
   * @returns {Promise<Result<User>>} A user result
   */
  async user(apiKey: string): Promise<Result<User>> {
    return await this.execute(user.user(apiKey));
  }

  /**
   * Returns public user info from the nest.land registry.
   * @param {string} name
   * @returns {Promise<Result<PublicUser>>} A public user result
   */
  async userByName(name: string): Promise<Result<PublicUser>> {
    return await this.execute(user.userByName(name));
  }

  /**
   * Returns all the users from the nest.land registry.
   * @returns {Promise<Result<PublicUser[]>>} A public user result
   */
  async users(): Promise<Result<PublicUser[]>> {
    return await this.execute(user.users());
  }

  /**
   * Creates a new package entry in the nest.land registry.
   * @param {NewUser} newUser
   * @returns {Promise<Result<User>>} The created nest.land user
   */
  async createUser(user: NewUser): Promise<Result<User>> {
    return await this.execute(
      userMutation.createUser(user.name, user.password),
    );
  }

  /**
   * Creates a new package entry in the nest.land registry.
   * @param {NewModule} newModule
   * @param {any} tar
   * @param {PackageDetails} packageDetails
   */
  async publish(
    newModule: NewModule,
    tarFile: any,
    packageDetails: PackageDetails,
  ) {
    let createEntry = await this.execute(moduleMutation.publish(newModule));
    if (createEntry.data.createModule.ok) {
      await this.uploadTar(tarFile, packageDetails);
    }
  }

  /**
   * Uploads tar package
   * @param {any} tarFile
   * @param {packageDetails} PackageDetails
   * @return {Promise<Object>} Upload result
   */
  async uploadTar(tarFile: any, packageDetails: PackageDetails) {
    const blob = new Blob([tarFile]);
    const formdata = new FormData();
    formdata.append("file", blob);
    formdata.append("config", JSON.stringify(packageDetails));
    var requestOptions = {
      method: "POST",
      body: formdata,
    };
    // let res = await fetch(`https://x2.nest.land/package`, requestOptions);
    let res = await fetch(`${this.url}/package`, requestOptions);
    console.log(await res.clone().text());
    return await res.clone().json();
  }
}
