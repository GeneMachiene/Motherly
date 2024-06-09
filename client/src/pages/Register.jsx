import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import AsyncSelect from 'react-select/async';
import AddIcon from '@mui/icons-material/Add';
import { 
  Container, Row, Col,
  Visible, Hidden,
  ScreenClassRender
 } from 'react-grid-system';
 import { styled, Button, Checkbox, FormControlLabel, FormGroup, IconButton, TextField } from '@mui/material'
import { color } from '@mui/system';

 const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Register() {
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
  
  return (
    
    <Container fluid xs sm md className='overflow-x-hidden'>
      <Row justify='between' align='center' style={{paddingLeft:20, paddingRight:20}}>
        <a href="/">
          <img src="/logo.svg" alt="Motherly Logo" className="h-9 my-3"/>
        </a>
        <ScreenClassRender render={screenClass => (<p>Screen class: {screenClass}</p>)}/>
      </Row>
      
      {/* Logo Title */}
      <Row justify="center">
        <div className="flex flex-col items-center">
          <h2 className='my-5'>Online Sign Up Form</h2>
        </div>
      </Row>

      {/* Sub Title */}
      <Row className='mb-4'>
        <Col>
          <h3 className='font-bold text-primary text-center mb-4'>New Application</h3>
          <p>
            Please fill up <span className='font-bold'>completely and correctly</span> the required information before each item below. 
            For items that are not associated to you, leave it blank. Required items are also 
            marked with an <span className='text-error'>asterisk (*)</span> so please fill it up correctly.
          </p>
        </Col>
      </Row>

      <Divider Text={"I. Personal Information"}/>

      <SectionLabel Text={"1. Name"} Hint={"Pangalan"}/>
      <Row className='mb-2'>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" required />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" required />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" required />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" required />
        </Col>
      </Row>

      <SectionLabel Wrap Text={"2. Address"} Hint={"Select region first, then province, then city, then district and your barangay"}/>
      <Row>
        <Col md={4}>
          <AsyncSelect placeholder='All Regions' className='mb-6'/>
        </Col>
        <Col md={4}>
          <AsyncSelect placeholder='All Regions' className='mb-6'/>
        </Col>
        <Col md={4}>
          <AsyncSelect placeholder='All Regions' className='mb-6'/>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <AsyncSelect placeholder='All Regions' className='mb-6'/>
        </Col>
        <Col md={8}>
          <AsyncSelect placeholder='All Regions' className='mb-6'/>
        </Col>
      </Row>
      <Row className='mb-2'>
        <Col md={6}>
          <Input name='last_name' label="Lastname (Apelyido)" required />
        </Col>
        <Col md={6}>
          <Input name='last_name' label="Lastname (Apelyido)" required />
        </Col>
      </Row>
    
      <Row>
        <Col md={3}>
          <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"Age "} Hint={"Auto Compute"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"4. Marital Status"} Hint={"Status"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"5. Sex"} Hint={"@ Birth"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"Age "} Hint={"Auto Compute"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"4. Marital Status"} Hint={"Status"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
      </Row>
      
      <Row>
        <Col md={6}>
          <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"Age "} Hint={"Auto Compute"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"4. Marital Status"} Hint={"Status"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
      </Row>

      <Row className='mb-2'>
        <Col md={6}>
          <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"Age "} Hint={"Auto Compute"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"4. Marital Status"} Hint={"Status"}/>
          <Row>
            <Col><Input name='' label='' required /></Col>
          </Row>
        </Col>
      </Row>

      <Divider Text={"II. Family"} />

      <SectionLabel Text={"15. Spouse's Name"} Hint={"Pangalan ng Asawa"}/>
      <Row>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>

      <SectionLabel Text={"16. Fathers's Name"} Hint={"Pangalan"}/>
      <Row>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>

      <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
      <Row className='mb-2'>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={3}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>


      <Divider Text={"III. Education"} />

      <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
      <Row>
        <Col md={12}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>

      <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
      <Row className='mb-2'>
        <Col md={12}>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>

      <Divider Text={"IV. Economic Profile"} />
      
      <Row>
        <Col md={6}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={6}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>

      <Divider Text={"V. Health Profile"} />
      
      <Row>
        <Col md={4}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>

      <Row className='mb-2'>
        <Col md={4}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
        <Col md={4}>
          <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
          <Input name='last_name' label="Lastname (Apelyido)" />
        </Col>
      </Row>
      
      <Divider Text={"VI. ID & Photo Attachment"} />
      <Row className='mb-2'>
        <Col md={6}>
          <SectionLabel Text={"16. ID photo"} Hint={"Submit a photo of your ID"}/>
          <IconButton 
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            className='w-full rounded-md h-72 bg-gray-200 border-dashed border-gray-500 border-2'    
          >
            <AddIcon />
            <VisuallyHiddenInput type="file" />
          </IconButton>

          <div className='flex justify-between my-6'>
            <img className='w-1/2' src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/66006283209/original/soXbQqqm9Lz8U9Nokv-kwa863riv_7ecaw.png?1614955740" />
            <img className='w-1/2' src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/66006286270/original/Sj2njXerH9Rk5QpeLpmbQdBpXDU-sZaZpg.png?1614958233" />
          </div>
        </Col>
        <Col md={6}>
          <SectionLabel Text={"16. Photo Attachment"} Hint={"Submit a selfie of you holding the ID"}/>
          <IconButton 
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            className='w-full rounded-md h-72 mb-6 bg-gray-200 border-dashed border-gray-500 border-2'    
          >
            <AddIcon />
            <VisuallyHiddenInput type="file" />
          </IconButton>
        </Col>
      </Row>

      <Divider Text={"VII. Email / Contact and Password"} />

      <SectionLabel Text={"16. Email"} Hint={"Pangalan"}/>
      <Row>
        <Col md={12}>
          <Input name='last_name' label="Lastname (Apelyido)" required/>
        </Col>
      </Row>

      <SectionLabel Text={"16. Contact Number"} Hint={"Pangalan"}/>
      <Row>
        <Col md={12}>
          <Input name='last_name' label="Lastname (Apelyido)" required/>
        </Col>
      </Row>

      <SectionLabel Text={"16. Password"} Hint={"Pangalan"}/>
      <Row className='mb-2'>
        <Col md={12}>
          <Input name='last_name' label="Lastname (Apelyido)" required/>
        </Col>
      </Row>

      <Divider Text={"VIII. Confirmation to allow the storage and use of my personal data"} />
      
      <SectionLabel Text={"16. Mother's Name"} Hint={"Pangalan"}/>
      <Row>
        <Col>
          <FormGroup>
            <FormControlLabel required control={<Checkbox />} label="The information entered above are true and correct" />
            <FormControlLabel required control={<Checkbox />} label="I have a full knowledge in providing the above information" />
            <FormControlLabel required control={<Checkbox />} label="I have a full knowledge in providing the above information" />
          </FormGroup>
        </Col>
      </Row>
      <Row className='mb-2'>
        <Col>
          <Button fullWidth variant='contained' type='submit' size='large' className='my-6 h-12'>Submit</Button>
        </Col>
      </Row>
    </Container>

  )
}

function Divider({Text}) {
  return (
    <Row className='bg-blue-950 mb-4'>
      <Col>
        <div className="flex justify-center w-full py-3 font-bold text-white">{Text}</div>
      </Col>
    </Row>
  )
}
function Input({name, label, required}) {
  return (
    <TextField
      name={name}
      fullWidth
      required={required}
      label={label}
      InputLabelProps={required? {style: { color:'red', zIndex:-1 }}: { style: {zIndex:-1}}}
      size='small'
      sx={{mb:3}}
    />
  )
}
function SectionLabel({Text, Hint, Wrap}) {
  return (
    <Row className={Wrap? 'mb-4':'mb-4 whitespace-nowrap'}>
      <Col>
        <span className='font-bold'>{Text}</span> {Hint? "- " + Hint: ""}
      </Col>
    </Row>
  )
}


export default Register