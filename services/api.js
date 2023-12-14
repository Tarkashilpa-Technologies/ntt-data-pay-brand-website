import axios from "axios";
import { DEFAULT_API_CONFIG } from "../Messages/Endpoints";

const instance = axios.create({
  baseURL: DEFAULT_API_CONFIG?.url,
  timeout: DEFAULT_API_CONFIG?.timeout, // Wait for 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export const newInstance = (token) => {
  return axios.create({
    baseURL: DEFAULT_API_CONFIG?.url,
    timeout: DEFAULT_API_CONFIG?.timeout, // Wait for 10 seconds
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};
// instance.interceptors.request.use(
//   async (req) => {
//     const token =
//       "427524ca2acc418fa469cc2d2f265d499d6b82c9695db429d35874ad50e24e7b86e81bbaa76a17a1b079444bd957b88337aa0b1822afbcb3398c328d30590263544072d44ad030d20b0af88d3ba8aa39cbc1d4bdfb35b79d7bd78e0f979667bf8018c9198a30087c23003f8be4657096bf90639fce2040e25ebab32067b299f7";

//     if (token) {
//       req.headers["Authorization"] = `Bearer ${token}`;
//       // req.headers['Content-Type'] = 'application/json';
//     }

//     return req;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  (res) => {
    // if (res?.status === 401) {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('userId');
    //   toaster('error', SESSION_EXPIRED_MESSAGE);
    //   setTimeout(() => {
    //     window.location.replace('/login');
    //   }, 500);
    // } else if (res?.headers?.token) {
    //   setLocalStorage(TOKEN, res?.headers?.token);
    // }

    return res;
  },
  async (err) => {
    return err;
  }
);

export default instance;
