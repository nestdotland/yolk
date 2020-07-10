export interface User {
  name: string;
  normalizedName: string;
  apiKey: string;
  packageNames: string[];
  createdAt: string;
}

export interface Module {
  name: string;
  normalizedName: string;
  owner: string;
  description: string;
  repository: string;
  latestVersion: string | null;
  latestStableVersion: string | null;
  packageUploadNames: string[];
  locked: boolean;
  malicious: boolean;
  unlisted: boolean;
  updatedAt: string;
  createdAt: string;
}

export interface NewModule {
  name: string;
  apiKey: string;
  description: string;
  repository: string;
  unlisted: boolean;
  locked: boolean;
  malicious: boolean;
}

export interface PublicUser {
  name: string;
  normalizedName: string;
  packageNames: string[];
  createdAt: string;
}
