import { Chip } from "@mui/material"

function AppointmentCard({appointment}) {
  return (
    //{_id, datetime_of_appointment, purpose, status, patient, user_id, createdAt, updatedAt, __v}
    <div className="box-border flex flex-col w-full bg-slate-50 shadow-lg p-3 rounded-md gap-3">
      <div className="flex flex-row items-center justify-between">
        <Chip label={appointment.status} color={'error'} />
        {appointment.datetime_of_appointment.split('T')[0]} at {appointment.datetime_of_appointment.split('T')[1].split(':')[0]} : {appointment.datetime_of_appointment.split('T')[1].split(':')[1]} 
      </div>
      <div>
        Purpose of Appointment: {appointment.purpose}
      </div>
    </div>
  )
}

export default AppointmentCard