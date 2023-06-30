
export const getLocalStorage = (key) => {
  if (localStorage) {
    return localStorage.getItem(key);
  } else {
    return null;
  }
};
export const setLocalStorage = (key, data) => {
  if (localStorage) {
    return  localStorage.setItem(key, data);
  } else {
    return null;
  }
 
};
export const clearLocalStorage = () => {
  if (localStorage ) {
    window?.localStorage?.clear();
  }
};
export const getSessionStorage = (key) => {
  if (sessionStorage) {
    return sessionStorage.getItem(key);
  } else {
    return null;
  }
};
export const setSessionStorage = (key, data) => {
  if (localStorage) {
    sessionStorage.setItem(key, data);
  }
};
export const clearSessionStorage = () => {
  if (sessionStorage) {
    window?.sessionStorage?.clear();
  }
};
