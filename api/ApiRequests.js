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
      const data = await response.json();
      return data;
    } else {
      throw new Error("Incorrect email or password. Please try again.");
    }
  } catch (error) {
    throw new Error("Something went wrong. Please try again.");
  }
};

export const fetchLinks = async (dispatch) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    const response = await fetch(POST_LOGIN_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: actionTypes.SET_LINKS, payload: data.links });
    } else {
      console.error("Failed to fetch links:", response.statusText);
    }
  } catch (error) {
    console.error("Failed to fetch links:", error);
  }
};
