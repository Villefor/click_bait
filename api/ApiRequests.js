import { actionTypes } from "../context/context";
import * as SecureStore from "expo-secure-store";

const POST_LOGIN_ENDPOINT = "https://clickbait-stg-544921dee7a5.herokuapp.com/users/auth/login";

const POST_CREATEUSER_ENDPOINT =
  "https://clickbait-stg-544921dee7a5.herokuapp.com/users";

export const loginUser = async (mail, pass) => {
  try {
    const response = await fetch(POST_LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail,
        password: pass,
      }),
    });

    if (response.ok) {
      const token = await response.json();
      await SecureStore.setItemAsync('accessToken', token.data.accessToken);
    } else {
      throw new Error("Incorrect email or password. Please try again.");
    }
  } catch (error) {
    throw new Error("Something went wrong. Please try again.");
  }
};

export const createUser = async (email, name, password, cpf) => {
  console.log(name, email, password, cpf);
  try {
    const response = await fetch(POST_CREATEUSER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        passwd: password,
        name: name,
        cpf: cpf,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: actionTypes.SET_NAME, payload: data.name });
      await SecureStore.setItemAsync('email', data.email);
    } else {
      console.log("Failed to create user", response);
    }
  } catch (error) {
    console.error(error);
  }
};
