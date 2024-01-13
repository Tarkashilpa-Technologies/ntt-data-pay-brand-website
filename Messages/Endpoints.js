// Use this import if you want to use "env.js" file
// const { API_URL } = require("../../config/env")
// Or just specify it directly like this:

// export const HOST = "http://65.0.181.24:1337";
export const HOST = "https://cms-uat.nttdatapay.com";

export const API_URL = `${HOST}/api`;
export const UAT_ATOM_TECH_URL = `https://caller.atomtech.in`;
export const PRODUCTION_ATOM_TECH_URL = `https://payment1.atomtech.in`;

/**
 * The options used to configure the API.
 */
// export interface ApiConfig {
//   /**
//    * The URL of the api.
//    */
//   url: string;

//   /**
//    * Milliseconds before we timeout the request.
//    */
//   timeout: number;
// }

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG = {
  url: API_URL,
  timeout: 10000,
};

export const TUTORIAL_API_ENDPOINT = "/tutorials";
export const TUTORIAL_GROUPS_API_ENDPOINT = "/tutorial-groups?populate=*&sort[0]=order:asc";
export const APIS_API_ENDPOINT = "/apis?sort[0]=order:asc";
export const TRY_IT_OUT_ENDOINT = "/api/try-it-out";
