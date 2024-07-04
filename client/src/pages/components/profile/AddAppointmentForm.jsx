import { Modal, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, Alert } from "@mui/material";
import {DatePicker, MobileDateTimePicker} from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

function AddAppointment({open, close}) {
  const [error, setError] = useState()
  const [name, setName] = useState('')
  const [relationship, setRelationship] = useState('');


  const style = {
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
  };

  const selectRelationship = (event) => {
    setRelationship(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()    
    
    const formData = new FormData();
    formData.append('file', "image");

      const imgResponse = await fetch(`${import.meta.env.VITE_SERVER}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!imgResponse.ok) {
        const errorText = await imgResponse.text();
        throw new Error(`Error: ${imgResponse.status} - ${errorText}`);
      }

      const result = await imgResponse.json();
      
      const child = {"image":result, name, relationship}

      const response = await fetch(`${import.meta.env.VITE_SERVER}/child/create`, {
        method: 'POST',
        body: JSON.stringify(child),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const json = await response.json()

      if(!response.ok) {
        console.log(json.error)
      }

      if(response.ok) {
        console.log('Child added!')
        window.location.reload()
      }
  }


  return(
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2">Schedule Appointment</Typography>
         
          <FormControl fullWidth sx={{mt:3}}>
            <InputLabel id="helper-text">Appointment for:</InputLabel>
            <Select
              required
              labelId="helper-text"
              id="appointment-select"
              value={relationship}
              label="Appointment for:"
              onChange={selectRelationship}
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
            // onChange={(date) => handleUserChange({target: { name: "personal_information.birthdate", value: date }})}
            defaultValue={dayjs()}
            minDateTime={dayjs()}
            sx={{
              width:"100%",
              mt:2,
            }}
            slotProps={{              
              field: {
                name:"personal_information.birthdate",
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
            value={name}
            onChange={(e) => (setName(e.target.value))}
          />

          <Button fullWidth variant="contained" sx={{mt:5}} type="submit">Add</Button>
        
          {error ? <Alert severity="error">{error}</Alert> : <></>}
        </Box>
      </form>
    </Modal>
  )
}

export default AddAppointment