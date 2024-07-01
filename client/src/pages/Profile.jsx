import {
  Modal, Fab,
  TextField, Box, Typography,
  FormControl, InputLabel,
  Select, MenuItem, FormHelperText,
  Button,
  Alert,
  Tabs,
  Tab,
  LinearProgress,
  Zoom
} from "@mui/material";
import { 
  Container, Row, Col,
 } from 'react-grid-system';
 import { useAuthContext } from "../hooks/useAuthContext"
 import { useEffect, useState } from "react";
import ProfileCard from "./components/profile/ProfileCard"
import ImageUpload from "./components/utility/ImageUpload";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Profile() {

  const { user } = useAuthContext()

  const [addChildOpen, setAddChildOpen] = useState(false);
  const [addAppointmentOpen, setAddAppointmentOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  function openModal(modal) {
    switch(modal){
      case("child"):
        setAddChildOpen(true);
        break;
      case("appointment"):
        setAddAppointmentOpen(true);
        break;
      default:
        console.log("switch statement error, profile.jsx");
    }
  }

  const handleClose = () => {
    setAddChildOpen(false);
    setAddAppointmentOpen(false);
  }

  const fabs = [
    {
      color: 'primary',
      icon: <ChildCareIcon />,
      label: 'AddChild',
      action: () => (openModal("child"))
    },
    {
      color: 'secondary',
      icon: <CalendarMonthIcon />,
      label: 'AddAppointment',
      action: () => (openModal("appointment"))
    },
  ];
  const transitionDuration = {
    enter: 300,
    exit: 300,
  };

  return (
    <>

      <AddChild open={addChildOpen} close={handleClose}/>
      <AddAppointment open={addAppointmentOpen} close={handleClose}/>

      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={tabValue === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${tabValue === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            color={fab.color}
            className="fixed right-0 bottom-0 m-5 mr-8"
            onClick={fab.action}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}

      <Container>
        <Row align="start" justify="center">
          <Col>
            <div className="flex justify-center my-3 font-semibold bg-slate-50 p-1 rounded-full shadow-md">
              Information
            </div>
            
            <div className="card w-full gap-y-7">
              <ProfileCard
                onClick={() => {console.log("tite")}}
                image={user ? `${import.meta.env.VITE_SERVER}/api/file/${user.image}`:""}
                name={"Mary Stewart"}
                role={"Mother"}
                bio={"Happy mother of 3 beautiful children. I work a part time job and love cooking and cleaning as a hobby."}
                mother
              />
            </div>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleChangeTab} aria-label="basic tabs example">
                <Tab label="Family Profile" {...a11yProps(0)} />
                <Tab label="Appointments" {...a11yProps(1)} />
                <Tab label="Perscriptions" {...a11yProps(2)} />
              </Tabs>
              <CustomTabPanel value={tabValue} index={0}>
                <FamilyProfile/>
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={1}>
                <Appointments/>
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={2}>
                <Perscriptions/>
              </CustomTabPanel>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  )
}

function AddChild({open, close}) {
  const [error, setError] = useState()
  const [image, setImage] = useState(null)
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


  return(
    <Modal
      open={open}
      onClose={close}
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
  )
}
function AddAppointment({open, close}) {
  const [error, setError] = useState()
  const [image, setImage] = useState(null)
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


  return(
    <Modal
      open={open}
      onClose={close}
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
  )
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function FamilyProfile() {
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

  return(
    <>
      <div className="flex justify-center my-3 font-semibold bg-slate-50 p-1 rounded-full shadow-md">
        Family Profile
      </div>
        
      <div className="box-border w-full h-full gap-y-7">
        {data? 
        
          data.map((child)=>(
            <ProfileCard 
              key={child._id}
              image={`http://localhost:3000/api/file/${child.image}`}
              name={child.name}
              role={child.relationship}
            />
          ))
          :
          <LinearProgress />
        }
      </div>
    </>
  )
}
function Appointments() {
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

  return(
    <>
      <div className="flex justify-center my-3 font-semibold bg-slate-50 p-1 rounded-full shadow-md">
        Appointments
      </div>
        
      <div className="box-border w-full h-full gap-y-7">
        {data? 
        
          data.map((child)=>(
            <ProfileCard 
              key={child._id}
              image={`http://localhost:3000/api/file/${child.image}`}
              name={child.name}
              role={child.relationship}
            />
          ))
          :
          <LinearProgress />
        }
      </div>
    </>
  )
}
function Perscriptions() {
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

  return(
    <>
      <div className="flex justify-center my-3 font-semibold bg-slate-50 p-1 rounded-full shadow-md">
      Perscriptions
      </div>
        
      <div className="box-border w-full h-full gap-y-7">
        {data? 
        
          data.map((child)=>(
            <ProfileCard 
              key={child._id}
              image={`http://localhost:3000/api/file/${child.image}`}
              name={child.name}
              role={child.relationship}
            />
          ))
          :
          <LinearProgress />
        }
      </div>
    </>
  )
}
export default Profile