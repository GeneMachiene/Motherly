import { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Container, Row, Col } from "react-grid-system";
import { Checkbox, CircularProgress, Fab, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import { User } from '../models/User';
import AsyncSelect from "react-select/async";
import ImageUpload from "./components/utility/ImageUpload";
import Notify from "./components/utility/Notify";
import dayjs from "dayjs";
import TaskIcon from '@mui/icons-material/Task';


function Register() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [errorMessage, seterrorMessage] = useState();

  const { user, handleUserChange } = User();
  const { signup, error, isLoading } = useSignup();

  // for debugging purposes
  // useEffect(() => {
  //   console.log("User changed:", user);
  // }, [user]);

  // Display the first Server Error
  useEffect(() => {
    if(error){
      seterrorMessage(Array.isArray(error)? error[0].msg : error)
      setSnackOpen(true);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await signup({...user});
  };

  return (
    <Container fluid xs sm md className="overflow-x-hidden pb-16 shadow-xl">

      <Title/>

      <form onSubmit={handleSubmit}>
        <PersonalInfo handleUserChange={handleUserChange} user={user} className="bg-slate-700"/>
        <HealthProfile handleUserChange={handleUserChange} user={user} />
        <PhotoID handleUserChange={handleUserChange} user={user} />
        <EmailPass handleUserChange={handleUserChange} user={user} />
        <Confirmation />

        <Fab
          variant="extended"
          aria-label="add"
          type="submit"
          disabled={isLoading}
          className="fixed bottom-4 right-3 mr-2 bg-gradient-to-r from-purple-700 to-pink-600 text-white"
        >
          {isLoading? <CircularProgress size={25} color="inherit" className="mr-3" />:<TaskIcon fontSize="medium" sx={{ mr: 1}}/>}
          <span className="font-semibold">Submit</span>
        </Fab>
      </form>

      <Notify
        open={snackOpen}
        setOpen={setSnackOpen}
        message={errorMessage || ""}
      />
    </Container>
  );
}

function Divider({ Text }) {
  return (
    <Row className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 mb-4">
      <Col>
        <div className="w-full py-3 font-bold text-purple-950">
          {Text}
        </div>
      </Col>
    </Row>
  );
}
function Input({ onChange, name, value, label, required, disabled, type }) {
  return (
    <TextField
      size="small"
      type={type}
      onChange={onChange}
      name={name}
      value={value == null ? '' : value}
      fullWidth
      required={required}
      disabled={disabled}
      label={label}
      InputLabelProps={
        required
          ? { style: { color: "red", zIndex: -1 } }
          : { style: { zIndex: -1 } }
      }
      sx={{ mb: 3 }}
    />
  );
}
function SectionLabel({ Text, Hint, Wrap }) {
  return (
    <Row className={Wrap ? "mb-4" : "mb-4 whitespace-nowrap"}>
      <Col>
        <span className="font-bold">{Text}</span> {Hint ? "- " + Hint : ""}
      </Col>
    </Row>
  );
}

function Title() {
  return(
    <Row>
      <Col md={4} className='py-6 sm:from-pink-50 sm:to-pink-50 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100'>
        {/* Logo Title */}
        <Row justify="center" align="center" className="h-full">
          <a href="/" className="border border-solid rounded-full border-purple-200 shadow-lg">
            <img src="/logo.svg" alt="Motherly Logo" className="h-9 p-3 rounded-full" />
          </a>
        </Row>
      </Col>
      <Col md={8} className='sm:py-6 py-0 bg-pink-50'>
        <Row align="center" className="h-full px-6 text-purple-950">
          <p>
            Please complete all required information <span className="font-bold">accurately</span> for 
            each item below. Leave any items that do not apply to you blank. 
            Required items are marked with an <span className="text-red-500">asterisk (*),</span> so
            ensure these are filled out correctly.
          </p>
        </Row>
      </Col>
    </Row>
  )
}
function PersonalInfo({handleUserChange, user}) {

  return(
    <>
      <Divider Text={"I. Personal Information"} />

      <SectionLabel Text={"1. Name"} Hint={"Pangalan"} />
      <Row className="mb-2">
        <Col md={3}>
          <Input
            onChange={handleUserChange}
            name="personal_information.name.last_name"
            value={user.personal_information.name.last_name}
            label="Lastname (Apelyido)"
            required
          />
        </Col>
        <Col md={3}>
          <Input
            onChange={handleUserChange}
            name="personal_information.name.first_name"
            value={user.personal_information.name.first_name}
            label="Firstname (Pangalan)"
            required
          />
        </Col>
        <Col md={3}>
          <Input
            onChange={handleUserChange}
            name="personal_information.name.middle_name"
            value={user.personal_information.name.middle_name}
            label="Middlename (Gitnang Pangalan)"
            required
          />
        </Col>
        <Col md={3}>
          <Input
            onChange={handleUserChange}
            name="personal_information.name.suffix"
            value={user.personal_information.name.suffix}
            label="Suffix/put - if no suffix"
          />
        </Col>
      </Row>

      <SectionLabel
        Wrap
        Text={"2. Address"}
        Hint={
          "Select region first, then province, then city."
        }
      />
      <Row>
        <Col md={4}>
          <AsyncSelect placeholder="All Regions" className="mb-6" />
        </Col>
        <Col md={4}>
          <AsyncSelect placeholder="All Provinces" className="mb-6" />
        </Col>
        <Col md={4}>
          <AsyncSelect
            placeholder="All Cities/Municipalities"
            className="mb-6"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={6}>
          <Input
            onChange={handleUserChange}
            name="personal_information.address.residence"
            value={user.personal_information.address.residence}
            label="Residence (House No./Block/Lot)"
            required
          />
        </Col>
        <Col md={6}>
          <Input
            onChange={handleUserChange}
            value={user.personal_information.address.street}
            name="personal_information.address.street"
            label="Street (Zone/Purok/Sitio) - Not required"
          />
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"} />
          <Row>
            <Col>
              <DatePicker
                label="Birth Date *"
                value={user.personal_information.birthdate}
                onChange={(date) => handleUserChange({target: { name: "personal_information.birthdate", value: date }})}
                maxDate={dayjs()}
                required
                sx={{
                  width:"100%",
                  mb:3,
                }}
                slotProps={{
                  actionBar: {
                    actions: ['clear'],
                  },
                  textField: {
                    size:"small",
                    InputLabelProps: {style: { color: "red", zIndex: -1 }}
                  },
                  field: {
                    name:"personal_information.birthdate"
                  }
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"Age "} Hint={"Edad"} />
          <Row>
            <Col>
              <Input
                value={user.personal_information.age}
                name="personal_information.age"
                label="Age"
                disabled={true}
              />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"4. Marital Status"} Hint={"Status"} />
          <Row>
            <Col>
              <FormControl fullWidth size="small" className="mb-4" required>
                <InputLabel className="text-red-500">Marital Status</InputLabel>
                <Select 
                  fullWidth
                  label="Marital Status"
                  value={user.personal_information.marital_status == null ? '':user.personal_information.marital_status}
                  name="personal_information.marital_status"
                  onChange={handleUserChange}
                >
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Widowed">Widowed</MenuItem>
                  <MenuItem value="Legally Separated">Legally Separated</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"5. Sex"} Hint={"@ Birth"} />
          <Row>
            <Col>
              <FormControl fullWidth size="small" className="mb-4" required>
                <InputLabel className="text-red-500">Sex</InputLabel>
                <Select 
                  fullWidth
                  label="Sex"
                  value={user.personal_information.sex == null ? '':user.personal_information.sex}
                  name="personal_information.sex"
                  onChange={handleUserChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <SectionLabel Text={"6. Place of Birth"} Hint={"Saan Pinanganak"} />
          <Row>
            <Col>
              <Input
                onChange={handleUserChange}
                name="personal_information.place_of_birth"
                value={user.personal_information.place_of_birth}
                label="Place of Birth"
                required
              />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"7. Messenger Name "} />
          <Row>
            <Col>
              <Input
                onChange={handleUserChange}
                name="personal_information.messenger_name"
                value={user.personal_information.messenger_name}
                label="Messenger Name"
              />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"8. Religion"} Hint={"Relihiyon"} />
          <Row>
            <Col>
              <Input
                onChange={handleUserChange}
                name="personal_information.religion"
                value={user.personal_information.religion}
                label="Religion"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={6}>
          <SectionLabel
            Text={"9. Language Spoken"}
            Hint={"Wikang sinasalita"}
          />
          <Row>
            <Col>
              <Input
                onChange={handleUserChange}
                name="personal_information.language_spoken"
                value={user.personal_information.language_spoken}
                label="Language Spoken"
              />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"10. TIN"} />
          <Row>
            <Col>
              <Input
                onChange={handleUserChange}
                name="personal_information.tin"
                value={user.personal_information.tin}
                label="TIN"
              />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"11. GSIS/SSS No."} />
          <Row>
            <Col>
              <Input
                onChange={handleUserChange}
                name="personal_information.gsis_or_sss"
                value={user.personal_information.gsis_or_sss}
                label="GSIS/SSS"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
function HealthProfile({handleUserChange, user}) {
  return(
    <>
      <Divider Text={"II. Health Profile"} />

      <Row>
        <Col md={4}>
          <SectionLabel Text={"12. Medical Concern"} />
          <Input
            onChange={handleUserChange}
            value={user.health_profile.medical_concern}
            name="health_profile.medical_concern"
            label="Medical Concern"
          />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"13. Dental Concern"} />
          <Input
            onChange={handleUserChange}
            value={user.health_profile.dental_concern}
            name="health_profile.dental_concern"
            label="Dental Concern"
          />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"14. Social/Emotional"} />
          <Input
            onChange={handleUserChange}
            value={user.health_profile.social_or_emotional}
            name="health_profile.social_or_emotional"
            label="Social/Emotional"
          />
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={4}>
          <SectionLabel Text={"15. Health Problems / Ailment"} />
          <Input
            value={user.health_profile.health_problems_or_ailment}
            onChange={handleUserChange}
            name="health_profile.health_problems_or_ailment"
            label="Health Problems"
          />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"16. Visual / Hearing Condition"} />
          <Input
            value={user.health_profile.visual_or_hearing_condition}
            onChange={handleUserChange}
            name="health_profile.visual_or_hearing_condition"
            label="Visual/Hearing"
          />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"17. Area of Difficulty"} />
          <Input
            value={user.health_profile.area_of_difficulty}
            onChange={handleUserChange}
            name="health_profile.area_of_difficulty"
            label="Area of Difficulty"
          />
        </Col>
      </Row>
    </>
  )
}
function PhotoID({handleUserChange}){
  const [idImage, setIdImage] = useState(null);
  const [dpImage, setDpImage] = useState(null);

  useEffect(()=>{
    handleUserChange({target:{name:"photo_references.id", value:idImage}})
  },[handleUserChange, idImage])

  useEffect(()=>{
    handleUserChange({target:{name:"photo_references.selfie", value:dpImage}})
  },[handleUserChange, dpImage])
  
  return(
    <>
      <Divider Text={"III. ID & Photo Attachment"} />
      <Row className="mb-2">
        <Col md={6}>
          <SectionLabel
            Text={"18. ID photo"}
            Hint={"Submit a photo of your ID"}
          />

          <ImageUpload setImage={setIdImage} image={idImage} width={"100%"} height={290} style={{borderRadius:2}} required/>

          <div className="flex justify-between my-6">
            <img
              className="box-border w-1/2 px-3"
              src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/66006283209/original/soXbQqqm9Lz8U9Nokv-kwa863riv_7ecaw.png?1614955740"
            />
            <img
              className="box-border w-1/2 px-3"
              src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/66006286270/original/Sj2njXerH9Rk5QpeLpmbQdBpXDU-sZaZpg.png?1614958233"
            />
          </div>
        </Col>
        <Col md={6}>
          <SectionLabel
            Text={"19. Photo Attachment"}
            Hint={"Submit a selfie of you holding the ID"}
          />

          <ImageUpload setImage={setDpImage} image={dpImage} width={"100%"} height={290} style={{borderRadius:2}} required/>

        </Col>
      </Row>
    </>
  )
}
function EmailPass({handleUserChange, user}){

  return(
    <>
      <Divider Text={"IV. Email / Contact and Password"} />

      <SectionLabel Text={"20. Email"} />
      <Row>
        <Col md={12}>
          <Input
            onChange={handleUserChange}
            name="email"
            value={user.email}
            label="Email"
            required
          />
        </Col>
      </Row>

      <SectionLabel Text={"21. Contact Number"} />
      <Row>
        <Col md={12}>
          <Input
            onChange={handleUserChange}
            name="contact_number"
            value={user.contact_number}
            label="Contact Number"
            required
          />
        </Col>
      </Row>

      <SectionLabel Text={"22. Password"} />
      <Row className="mb-2">
        <Col md={12}>
          <Input
            type="password"
            onChange={handleUserChange}
            name="password"
            value={user.password}
            label="Password"
            required
          />
        </Col>
      </Row>
    </>
  )
}
function Confirmation(){
  return(
    <>
      <Divider
        Text={
          "V. Confirmation to allow the storage and use of my personal data"
        }
      />

      <Row>
        <Col>
          <FormGroup>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="The information entered above are true and correct"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I have a full knowledge in providing the above information"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I have a full knowledge in providing the above information"
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default Register;