import { Modal, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, Alert, CircularProgress } from "@mui/material";
import {DatePicker, MobileDateTimePicker} from "@mui/x-date-pickers";
import { useAddAppointment } from "../../../hooks/useAddAppointment"
import { Appointment } from '../../../models/Appointment';
import dayjs from "dayjs";

function AddAppointment({state, setState}) {

  const { addAppointment, isLoading, error } = useAddAppointment();
  const { appointment, handleAppointmentChange } = Appointment();


  const handleSubmit = async (e) => {
    e.preventDefault()    

    await addAppointment({...appointment});

    if(error){
      console.log(error) // this doesn't work for first time runs
    }
    else{
      setState(false);
      window.location.reload();
    }
  }


  return(
    <Modal
      open={state}
      onClose={()=>(setState(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
            minWidth: 250,
            alignItems: 'center'
          }}
        >

          <Typography id="modal-modal-title" variant="h6" component="h2">Schedule Appointment</Typography>
         
          <FormControl fullWidth sx={{mt:3}}>
            <InputLabel id="helper-text">Appointment for:</InputLabel>
            <Select
              required
              labelId="helper-text"
              id="appointment-select"
              name="patient"
              value={appointment.patient == null ? '':appointment.patient}
              label="Appointment for:"
              onChange={handleAppointmentChange}
            >
              <MenuItem value={"Mother"}>Mother</MenuItem>
              <MenuItem value={"Child"}>Child</MenuItem>
              <MenuItem value={"Partner"}>Partner</MenuItem>
            </Select>
            {/* <FormHelperText>Who&apos;s the appointment for?</FormHelperText> */}
          </FormControl>

          <DatePicker
            label="Date Today"
            disabled
            value={dayjs()}
            sx={{
              width:"100%",
              mt:2,
            }}
          />

          <MobileDateTimePicker
            label="Appointment Date"
            onChange={(date) => handleAppointmentChange({target: { name: "datetime_of_appointment", value: date }})}
            minDateTime={dayjs().add(1, 'day')}
            value={appointment.birthdate == null? dayjs().add(1, 'day'):appointment.birthdate}
            sx={{
              width:"100%",
              mt:2,
            }}
            slotProps={{              
              field: {
                name:"datetime_of_appointment",
              }
            }}
          />
          
          <TextField
            multiline
            required
            fullWidth
            rows={3}
            margin="normal"
            label="Purpose"
            name="purpose"
            value={appointment.purpose == null? '':appointment.purpose}
            onChange={handleAppointmentChange}
          />

          <Button fullWidth variant="contained" sx={{mt:5}} type="submit" disabled={isLoading}>
            {isLoading?<CircularProgress size={15} sx={{p:1}}/>:'Add'}
          </Button>
        
          {error ? <Alert severity="error">{error.msg}</Alert> : <></>}
        </Box>
      </form>
    </Modal>
  )
}

export default AddAppointment