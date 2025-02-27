const storagePrefix = "tp_app";

export const storage = {
  // persist user auth token
  getToken: (): string | null => {
    const t  =   window.localStorage.getItem(`${storagePrefix}_token`) as string;
    console.log('somevalue', t);
    return JSON.parse(
      t || 'null',
    );
  },
  setToken: (token: string) => {
    console.log("set token");
    if (!token) return;
    window.localStorage.setItem(
      `${storagePrefix}_token`,
      JSON.stringify(token),
    );
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}_token`);
  },
  // presist theme preference
  getTheme: (): string | null => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}_theme`) as string,
    );
  },
  setTheme: (theme: string) => {
    window.localStorage.setItem(
      `${storagePrefix}_theme`,
      JSON.stringify(theme),
    );
  },
  clearTheme: () => {
    window.localStorage.removeItem(`${storagePrefix}_theme`);
  },
};
