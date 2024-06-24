import {
  Divider, Modal, Fab,
  TextField, Box, Typography,
  FormControl, InputLabel,
  Select, MenuItem, FormHelperText,
  Button,
  Alert
} from "@mui/material";
import ProfileCard from "./components/profile/ProfileCard"
import AddIcon from '@mui/icons-material/Add';
import { 
  Container, Row, Col,
 } from 'react-grid-system';
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react";
import ImageUpload from "./components/utility/ImageUpload";


function Profile() {

  const { user } = useAuthContext()

  const [addOpen, setAddOpen] = useState(false);
  const [relationship, setRelationship] = useState('');
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [error, setError] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/child/all`)
      const json = await response.json()
      
      if (response.ok){
        setData(json)
      }
    }
    fetchdata()
  }, [])

  const selectRelationship = (event) => {
    setRelationship(event.target.value);
  };

  const openModal = () => {
    setAddOpen(true);
  }

  const handleClose = () => {
    setAddOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()    
    
    const formData = new FormData();
    formData.append('file', image);

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

  // MODAL STYLING =====================================
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
  // MODAL STYLING =====================================

  return (
    <>
      <Modal
        open={addOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">Add Family Member</Typography>

            <ImageUpload setImage={setImage} image={image} setError={setError} style={{mt:3, border:0}}/>
            <FormHelperText>Upload an avatar</FormHelperText>

            <TextField required fullWidth margin="normal" label="Name" value={name} onChange={(e) => (setName(e.target.value))}/>

            <FormControl fullWidth sx={{mt:1}}>
              <InputLabel id="helper-text">Relationship</InputLabel>
              <Select
                required
                labelId="helper-text"
                id="relationship-select"
                value={relationship}
                label="Relationship"
                onChange={selectRelationship}
              >
                <MenuItem value={"Son"}>Son</MenuItem>
                <MenuItem value={"Daughter"}>Daughter</MenuItem>
                <MenuItem value={"Partner"}>Partner</MenuItem>
              </Select>
              <FormHelperText>Relationship to Child/Family Member</FormHelperText>
            </FormControl>

            <Button fullWidth variant="contained" sx={{mt:5}} type="submit">Add</Button>
          
            {error ? <Alert severity="error">{error}</Alert> : <></>}
          </Box>
        </form>
      </Modal>
      
      <Fab
        color="primary"
        aria-label="add"
        className="fixed right-0 bottom-0 m-5 mr-6"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <Container>
        <Row>
          <Col lg={5}>
            <div className="flex justify-center my-3 font-semibold bg-slate-50 p-1 rounded-full shadow-md">
              INFORMATION
            </div>
            <div className="card w-full gap-y-7">
              <ProfileCard 
                image={user ? `${import.meta.env.VITE_SERVER}/api/file/${user.image}`:""}
                name={"Mary Stewart"}
                role={"Mother"}
                bio={"Happy mother of 3 beautiful children. I work a part time job and love cooking and cleaning as a hobby."}
              />

              <div className="flex flex-col shadow-md bg-slate-50 p-3">
                <div className="card-body">
                  <span className="font-bold text-lg">Birthday</span>
                  <Divider />
                  <p>Birdthday</p>
                  <span className="font-bold text-lg">Address</span>
                  <Divider />
                  <p>Block No. Street, City , Country</p>
                  <span className="font-bold text-lg">Status</span>
                  <Divider />
                  <p>Married</p>
                  <span className="font-bold text-lg">Sex</span>
                  <Divider />
                  <p>Female</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="flex justify-center my-3 font-semibold bg-slate-50 p-1 rounded-full shadow-md">
            FAMILY PROFILE
            </div>
            
            <div className="box-border w-full h-full gap-y-7">
              {data && data.map((child)=>(
                <ProfileCard 
                  key={child._id}
                  image={`http://localhost:3000/api/file/${child.image}`}
                  name={child.name}
                  role={child.relationship}
                  child={child.relationship == "Partner"? false:true}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile