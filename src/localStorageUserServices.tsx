import { User, AccessToken } from "./interfaces/user";

export const saveUser = (user: User) => {
  const userAsString = JSON.stringify(user);

  localStorage.setItem("user", userAsString);
};

export const saveUserToken = (token: AccessToken) => {
  const tokenAsString = JSON.stringify(token);

  localStorage.setItem("userToken", tokenAsString);
};

export const getUserToken = (): AccessToken => {
  const rawToken = localStorage.getItem("userToken");
  return rawToken ? JSON.parse(rawToken) : null;
};

export const logOutUser = (token: AccessToken) => {
  const tokenAsString = JSON.stringify(token);

  localStorage.removeItem("userToken");
};
