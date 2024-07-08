import dayjs from "dayjs";
import { useImmer } from "use-immer";

const emptyAppointment = {
  datetime_of_appointment: dayjs(),
  purpose: null,
  status: "Pending",
  patient: null,
  user_id: null,
}

export const Appointment = () => {
  const [appointment, updateAppointment] = useImmer(emptyAppointment);

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;

    updateAppointment((draft) => {
      switch (name) {
        case "datetime_of_appointment":
          draft.datetime_of_appointment = value;
          break;
        case "purpose":
          draft.purpose = value;
          break;
        case "patient":
            draft.patient = value;
            break;
        default:
          break;
      }
    });
  };

  return {appointment, handleAppointmentChange}
};