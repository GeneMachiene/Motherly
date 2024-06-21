import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (user) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(import.meta.env.VITE_SERVER + "/user/signup", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.errors)
      
      console.log(json.errors);
    }
    if (response.ok) {
      // save user to locak storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);

      window.location.href = "/";
    }
  };

  return { signup, isLoading, error };
};
