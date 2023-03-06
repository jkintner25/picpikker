// export function doLocalStorage(key, initialValue) {

//     // if item is already in localStorage:
//     // Get from local storage by key
//     const item = window.localStorage.getItem(key);

//     // If it's already in the storage, remove it from storage
//     if (item) localStorage.removeItem(key);

//     // not in local storage:
//     if (typeof window !== "undefined") {
//         window.localStorage.setItem(key, JSON.stringify(initialValue));
//     }
// };

// export function checkIfInStorage(id) {
//     let item = window.localStorage.getItem(id);
//     return item ? true : false;
//     // return true if in storage already
//     // return false if not
// }

// export function isEmpty(obj) {
//     // check if an object is empty
//     // return true if empty, false if not empty
//     for (let thing in obj) {
//         if (thing) return false;
//     }

//     return true;
// };

// export const localStorageReducer = (returnObj, key, value) => {
//     if (typeof window !== 'undefined') {
//         if (key) {
//             if (localStorage.getItem(key)) localStorage.removeItem(key)
//             else localStorage.setItem(key, value)
//         }
//         if (returnObj) {
//             let objs = Object.values(localStorage)
//             return objs;
//         }
//     }
// }

// export const clearLocalStorage = () => {
//     if (typeof window !== 'undefined') {
//         localStorage.clear()
//     }
// }

// export const checkFavorite = (storage, key) => {
//     if (storage && storage.hasOwnProperty(key)) return true
//     else return false
// }
