export const fn = {
  saveToLocal: (key, value) => window.localStorage.setItem(key, value),
  getFromLocal: (key) => window.localStorage.getItem(key),
  removeFromLocal: (key) => window.localStorage.removeItem(key),
};