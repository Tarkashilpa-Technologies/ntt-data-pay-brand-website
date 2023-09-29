import {
  APIS_API_ENDPOINT,
  TUTORIAL_API_ENDPOINT,
  TUTORIAL_GROUPS_API_ENDPOINT,
} from "../config/APIEndpoints";
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
