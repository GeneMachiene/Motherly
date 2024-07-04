import { useState } from "react";
import { useUpload } from "./useUpload"
import { useAuthContext } from "./useAuthContext";

export const useAddChild = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { uploadDP, error:uploadError } = useUpload();
  const { user } = useAuthContext()


  const addChild = async (child) => {

    setIsLoading(true);
    setError(null);
    
    // upload images and replace values with reference/filename
    const imageName = await uploadDP(child.image);
    child.image = imageName;

    if(uploadError){
      setIsLoading(false);
      setError(uploadError);
    }
    else{

      // add user email to object
      child.user_id = user.email;
      
      console.log('child', child)
      const response = await fetch(`${import.meta.env.VITE_SERVER}/child/create`, {
        method: 'POST',
        body: JSON.stringify(child),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const json = await response.json()

      if(!response.ok) {
        // Delete uploaded image if error occurs. (This is not optimal, fix in the future => do not upload till all fields are correct)
        await fetch(import.meta.env.VITE_SERVER + `/api/file/${imageName}`, {
          method: "DELETE",
        });

        setIsLoading(false);
        setError(json.error)
        console.log(json.error)
      }

      if(response.ok) {
        setIsLoading(false);
        console.log('Child added!')
      }
    }
  }

  return { addChild, isLoading, error };
};
