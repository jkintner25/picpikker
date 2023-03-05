export function useLocalStorage(key, initialValue) {

    // if item is already in localStorage:

    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    if (item) return item;

    // not in local storage:

    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
    }
};
