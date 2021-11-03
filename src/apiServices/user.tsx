import { ApiResponse } from "../interfaces/response";
import { AccessToken, User, UserCreateErrorResponse } from "../interfaces/user";
import { baseUrl } from "./general";


export const createUser = async (
    username: string,
    email: string,
    password: string
  ): Promise<ApiResponse<User | UserCreateErrorResponse>> => {
    const body = {
      username: username,
      email: email,
      password: password,
    };
  
    const url = `${baseUrl}/users`;
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    const userOrError = await response.json();
  
    return {
      statusCode: response.status,
      data: userOrError,
    };
  };
  
  export const loginUser = async (
    username: string,
    password: string
  ): Promise<ApiResponse<AccessToken>> => {
    const url = `${baseUrl}/users/token`;
  
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
  
    const response = await fetch(url, {
      body: formData,
      method: "post",
    });
  
    const jsonData = (await response.json()) as AccessToken;
  
    return {
      statusCode: response.status,
      data: jsonData,
    };
  };
  
  export const getUser = async (
    token: string
  ): Promise<ApiResponse<User>> => {
    const url = `${baseUrl}/users/me`;
  
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = (await response.json()) as User;
  
    return {
      statusCode: response.status,
      data: user,
    };
  };
  
  export const changeDisplayName = async (
    displayName: string,
    token: AccessToken
  ): Promise<ApiResponse<User | UserCreateErrorResponse>> => {
    const body = {
      display_name: displayName,
    };
  
    const url = `${baseUrl}/users/me`;
  
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    const userOrError = await response.json();
  
    return {
      statusCode: response.status,
      data: userOrError,
    };
  };
  