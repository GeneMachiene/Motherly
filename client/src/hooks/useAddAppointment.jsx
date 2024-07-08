import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useAddAppointment = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { user } = useAuthContext()


  const addAppointment = async (appointment) => {

    setIsLoading(true);
    setError(null);    

    // add user email to object
    appointment.user_id = user.email;

    const response = await fetch(`${import.meta.env.VITE_SERVER}/appointments/create`, {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if(!response.ok) {
      setIsLoading(false);
      setError(json.errors[0])
      console.log(json.errors[0])
    }

    if(response.ok) {
      setIsLoading(false);
      console.log('Appointment added!')
    }
  }

  return { addAppointment, isLoading, error };
};
