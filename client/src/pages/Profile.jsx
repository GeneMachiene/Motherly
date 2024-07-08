import { Fab, Box, Tabs, Tab, LinearProgress, Zoom } from "@mui/material";
import { Container, Row, Col } from 'react-grid-system';
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react";
import ProfileCard from "./components/profile/ProfileCard"
import NoData from "./components/utility/NoData"
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddAppointment from "./components/profile/AddAppointmentForm";
import AddChild from "./components/profile/AddChildForm";
import AppointmentCard from "./components/profile/AppointmentCard";

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

      <AddChild state={addChildOpen} setState={setAddChildOpen}/>
      <AddAppointment state={addAppointmentOpen} setState={setAddAppointmentOpen}/>

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
            <div className="card w-full gap-y-7 my-3">
              <ProfileCard
                onClick={() => {console.log("tite")}}
                image={user ? `${import.meta.env.VITE_SERVER}/api/file/${user.image}`:""}
                name={"Mary Stewart"}
                role={"Mother"}
                bio={"Happy mother of 3 beautiful children. I work a part time job and love cooking and cleaning as a hobby."}
                mother
              />
            </div>

            <Box>
              <Tabs 
                value={tabValue}
                onChange={handleChangeTab}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="scrollable auto tabs example"
                className="mb-3"
              >
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
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/child/${user.email}`);

      const json = await response.json()
      
      if (response.ok){
        setData(json)
      }
    }
    fetchdata()
  }, [user.email])

  return(
    <div className="flex flex-col box-border w-full h-full gap-y-3 mb-6">
      {data ? 
        
        data.length === 0 ?  
        <NoData text={"Click on the floating button to add a family member."}/>
        :
        data.toReversed().map((child)=>(
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
  )
}
function Appointments() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/appointments/`)
      const json = await response.json()
      
      if (response.ok){
        setData(json)
      }
    }
    fetchdata()
  }, [])

  return(
    <div className="flex flex-col box-border w-full h-full gap-y-3 mb-6">
      {data ? 
        
        data.length === 0 ?  
        <NoData text={"Click on the floating button to add an appointment."}/>
        :
        data.toReversed().map((appointment)=>(
          <AppointmentCard key={appointment._id}/>
        ))
        :
        <LinearProgress />
      }
    </div>
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
  )
}
export default Profile