const localStorageTokensKey = "charity-access-token";

export const getLocalStorageTokens = () => {
  return (
    JSON.parse(window.localStorage.getItem(localStorageTokensKey)) || {
      access_token: "",
      refresh_token: "",
    }
  );
};

export const setLocalStorageTokens = (tokens) => {
  window.localStorage.setItem(localStorageTokensKey, JSON.stringify(tokens));
};

export const removeLocalStorageTokens = () => {
  window.localStorage.removeItem(localStorageTokensKey);
};
