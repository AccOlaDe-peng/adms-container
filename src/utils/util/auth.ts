import { TOKEN_KEY } from "../constant/auth";

export const getTokenAUTH = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};
