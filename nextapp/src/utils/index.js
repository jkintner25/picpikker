export function doLocalStorage(key, initialValue) {

    // if item is already in localStorage:

    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // If it's already in the storage, remove it from storage
    if (item) localStorage.removeItem(key);

    // not in local storage:

    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
    }
};

export function checkIfInStorage(imgId) {

    // return true if in storage already
    const item = window.localStorage.getItem(imgId);
    return item ? true : false;
    // return false if not
}

export function isEmpty(obj) {
    // check if an object is empty
    // return true if empty, false if not empty
    for (let thing in obj) {
        if (thing) return false;
    }

    return true;
};
