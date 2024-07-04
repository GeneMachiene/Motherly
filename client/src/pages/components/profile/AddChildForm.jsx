import { Modal, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Alert, CircularProgress } from "@mui/material";
import {MobileDatePicker} from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { useAddChild } from '../../../hooks/useAddChild'
import { Child } from '../../../models/Child';
import ImageUpload from '../utility/ImageUpload';
import dayjs from "dayjs";


function AddChild({open, close}) {
  const [error, setError] = useState()
  const [image, setImage] = useState(null)

  const { addChild, isLoading, error:apierror } = useAddChild();
  const { child, handleChildChange } = Child();

  useEffect(()=>{
    handleChildChange({target:{name:"image", value:image}})
  },[handleChildChange, image])


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await addChild({...child});
  }


  return(
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <Box 
          sx={
            {
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
            }
          }
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">Add Family Member</Typography>

          <ImageUpload setImage={setImage} image={image} setError={setError} style={{mt:3, border:0}}/>
          <FormHelperText>Upload an avatar</FormHelperText>

          <TextField
            required
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={child.name == null? '':child.name}
            onChange={handleChildChange}
          />

          <MobileDatePicker
            label="Birth Date"
            value={child.birthdate == null? dayjs():child.birthdate}
            onChange={(date) => handleChildChange({target: { name: "birthdate", value: date }})}
            maxDate={dayjs()}
            sx={{
              width:"100%",
              mt:1,
            }}
          />

          <TextField
            disabled 
            required
            fullWidth
            margin="normal"
            name="age"
            label="Age"
            value={child.age === null? 0:child.age}
          />

          <FormControl fullWidth sx={{mt:1}}>
            <InputLabel id="helper-text">Sex</InputLabel>
            <Select
              required
              labelId="helper-text"
              id="sex-select"
              name="sex"
              value={child.sex == null ? '':child.sex}
              label="Sex"
              onChange={handleChildChange}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>

          <Button fullWidth variant="contained" sx={{mt:5}} type="submit" disabled={isLoading}>
            {isLoading?<CircularProgress size={15} sx={{p:1}}/>:'Add'}
          </Button>
        
          {error || apierror ? <Alert severity="error">{error || apierror}</Alert> : <></>}
        </Box>
      </form>
    </Modal>
  )
}

export default AddChild