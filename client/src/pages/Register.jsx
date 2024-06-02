import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { 
  Container, Row, Col,
  Visible, Hidden,
  ScreenClassRender
 } from 'react-grid-system';
 import Select from 'react-select'

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
  
  
  return (
    
    <Container fluid xs sm md>
      <Row justify='between' align='center'>
        <a href="/">
          <img src="/logo.svg" alt="Motherly Logo" className="h-9 my-3"/>
        </a>
        <ScreenClassRender render={screenClass => (<p>Screen class: {screenClass}</p>)}/>
      </Row>
      
      {/* Logo Title */}
      <Row justify="center">
        <div className="flex flex-col items-center prose">
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
      <Row>
        <Col md={3}>
          <input className='input bg-red-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-red-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
      </Row>

      <SectionLabel Text={"2. Address"} Hint={"Select region first, then province, then city, then district and your barangay"}/>
      <Row>
        <Col md={3}>
          <input className='input bg-red-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-red-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
      </Row>

    
      <Row>
        <Col md={3}>
          <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"}/>
          <Row>
            <Col><input className='input bg-base-300 w-full mb-3'></input></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"Age "} Hint={"Auto Compute"}/>
          <Row>
            <Col><input className='input bg-base-300 w-full mb-3'></input></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"4. Marital Status"} Hint={"Status"}/>
          <Row>
            <Col><input className='input bg-base-300 w-full mb-3'></input></Col>
          </Row>
        </Col>
        <Col md={3}>
          <SectionLabel Text={"5. Sex"} Hint={"@ Birth"}/>
          <Row>
            <Col><input className='input bg-base-300 w-full mb-3'></input></Col>
          </Row>
        </Col>
      </Row>

      <Divider Text={"II. Family"} />

      <SectionLabel Text={"15. Spouse's Name"} Hint={"Pangalan ng Asawa"}/>
      <Row>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
        <Col md={3}>
          <input className='input bg-base-300 w-full mb-3'></input>
        </Col>
      </Row>

      <Divider Text={"III. Education"} />
    </Container>

  )
}

function Divider({Text}) {
  return (
    <Row className='bg-primary'>
      <Col>
        <div className="divider font-bold text-base-100">{Text}</div>
      </Col>
    </Row>
  )
}
function SectionLabel({Text, Hint}) {
  return (
    <Row className='my-4 whitespace-nowrap '>
      <Col>
        <span className='font-bold'>{Text}</span> - {Hint}
      </Col>
    </Row>
  )
}


export default Register