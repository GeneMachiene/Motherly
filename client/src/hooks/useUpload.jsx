import { useState } from "react";

export const useUpload = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  //Uploads the image file and returns a filename located on the server.
  const uploadDP = async (image) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', image);

    const imgResponse = await fetch(`${import.meta.env.VITE_SERVER}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!imgResponse.ok) {
      setIsLoading(false);
      const errorText = imgResponse.statusText;
      setError(errorText)

      console.log(`Error: ${imgResponse.status} - ${errorText}`);
    }
    else {
      setIsLoading(false);
      return await imgResponse.json();
    }
  }

  return { uploadDP, isLoading, error  };
}