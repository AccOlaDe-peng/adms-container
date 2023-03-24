import { TOKEN_KEY } from "../constant/auth";

export const getTokenAUTH = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const localStorageClear = (): void => {
    localStorage.clear();
};

export const localStorageRemoveItem = (key: string): void => {
    localStorage.removeItem(key);
};

export const localStorageLogout = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("LAYOUT_CONFIG");
    localStorage.removeItem("USER_CONFIG");
};
