
export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};
export const clearLocalStorage = () => {
  window?.localStorage?.clear();
  window?.sessionStorage?.clear();
};
export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};
export const setSessionStorage = (key, data) => {
  sessionStorage.setItem(key, data);
};
