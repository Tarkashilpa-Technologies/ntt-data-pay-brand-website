// Use this import if you want to use "env.js" file
// const { API_URL } = require("../../config/env")
// Or just specify it directly like this:

export const HOST = "http://3.109.212.20:1337";

export const API_URL = `${HOST}/admin`;

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
