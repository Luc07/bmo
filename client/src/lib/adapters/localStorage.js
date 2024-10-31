const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export async function getStorageData(key = APP_NAME) {
    const storagedData = localStorage.getItem(key);
    return storagedData ? JSON.parse(storagedData) : null;
}

export function setStorageData(data, key = APP_NAME) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function clearStorageData(key = APP_NAME) {
    localStorage.removeItem(key);
}