/**
 * A Common query result interface.
 */
export interface Result<T> {
  data: T | null;
  errors?: any;
  error?: any;
}

/**
 * Interface for creating a new nest.land user.
 */
export interface NewUser {
  name: string;
  password: string;
}

/**
 * Input interface for creating a new package upload.
 */
export interface PackageDetails {
  api_key: string;
  package_name: string;
  wallet: JWKInterface | null;
  entry: string;
  upload: boolean;
  version: string;
}

/**
 * Represents package uploads
 */
export interface Upload {
  name?: string;
  package?: string;
  entry?: string;
  version?: string;
  prefix?: string;
  malicious?: boolean;
  files?: string; // Later parsed into JSON
  createdAt?: string;
}

/**
 * Represents a nest.land user
 */
export interface User {
  name?: string;
  normalizedName?: string;
  apiKey?: string;
  modules?: Module[];
  createdAt?: string;
}

/**
 * Represents a nest.land package/module
 */
export interface Module {
  name?: string;
  normalizedName?: string;
  owner?: string;
  description?: string;
  repository?: string;
  latestVersion?: string | null;
  latestStableVersion?: string | null;
  uploads?: Upload[];
  locked?: boolean;
  malicious?: boolean;
  unlisted?: boolean;
  updatedAt?: string;
  createdAt?: string;
}

/**
 * Represents a nest.land user
 */
export interface NewModule {
  name: string;
  apiKey: string;
  description: string;
  repository: string;
  unlisted: boolean;
  locked: boolean;
  malicious: boolean;
}

/**
 * Represent a public nest.land user
 */
export interface PublicUser {
  name?: string;
  normalizedName?: string;
  modules?: Module[];
  createdAt?: string;
}
/**
 * An arweave JWK public interface
 */
export interface JWKPublicInterface {
  kty: string;
  e: string;
  n: string;
}

/**
 * An arweave keyfile interface
 */
export interface JWKInterface extends JWKPublicInterface {
  d?: string;
  p?: string;
  q?: string;
  dp?: string;
  dq?: string;
  qi?: string;
}
