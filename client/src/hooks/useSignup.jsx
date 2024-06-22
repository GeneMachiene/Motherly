import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useUpload } from "./useUpload"

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const { uploadDP, error:uploadError } = useUpload();

  const signup = async (user) => {

    setIsLoading(true);
    setError(null);

    // upload images and replace values with reference/filename
    const id = await uploadDP(user.photo_references.id);
    const selfie = await uploadDP(user.photo_references.selfie);
    const photo_references = {
      id: id,
      selfie: selfie,
    }
    delete user.photo_references;
    user = {...user, photo_references};
    
    if(uploadError){
      setIsLoading(false);
      setError(uploadError);
    }
    else{
      
      const response = await fetch(import.meta.env.VITE_SERVER + "/user/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const json = await response.json();

      if (!response.ok) {
        // Delete uploaded image if error occurs. (This is not optimal, fix in the future => do not upload till all fields are correct)
        await fetch(import.meta.env.VITE_SERVER + `/api/file/${id}`, {
          method: "DELETE",
        });
        await fetch(import.meta.env.VITE_SERVER + `/api/file/${selfie}`, {
          method: "DELETE",
        });

        setIsLoading(false);
        setError(json.errors || json.error)
        
        console.log(json.errors || json.error);
      }
      if (response.ok) {
        setIsLoading(false);

        // save user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);

        window.location.href = "/";
      }
    }

  };

  return { signup, isLoading, error };
};
