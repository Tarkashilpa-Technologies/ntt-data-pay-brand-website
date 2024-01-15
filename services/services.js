import axios from "axios";
import {
  APIS_API_ENDPOINT,
  GET_API_ENDPOINT,
  TUTORIAL_API_ENDPOINT,
  TUTORIAL_GROUPS_API_ENDPOINT,
} from "../Messages/Endpoints";
import instance from "./api";

export const tutorialDataApi = async () => {
  try {
    const response = await instance?.get(`${TUTORIAL_API_ENDPOINT}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const tutorialGroupDataApi = async () => {
  try {
    const response = await instance?.get(`${TUTORIAL_GROUPS_API_ENDPOINT}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const apisDataApi = async () => {
  try {
    const response = await instance?.get(`${APIS_API_ENDPOINT}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const useCaseDataApi = async (id) => {
  try {
    const response = await instance?.get(
      `${TUTORIAL_API_ENDPOINT}/${id}?populate=*`
    );
    return response;
  } catch (error) {
    return error;
  }
};

// Define a function that makes an API request based on the HTTP method.
export const makeAnyMethodAPICall = async (
  method,
  url,
  data = null,
  headers = {}
) => {
  const config = {
    method, // HTTP method (GET, POST, PUT, DELETE, etc.)
    url, // API endpoint URL
    headers, // Request headers (optional)
  };

  // Add data to the request if it's provided (for POST, PUT, etc. requests).
  if (data) {
    config.encData = data;
  }

  // Use Axios to make the API request.
  return axios(config)
    .then((response) => {
      console.log(response);
      // Handle the successful response here
      return response;
    })
    .catch((error) => {
      // Handle any errors here
      throw error;
    });
};
export const singleApiDataApi = async (id) => {
  try {
    const response = await instance?.get(`${GET_API_ENDPOINT}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
