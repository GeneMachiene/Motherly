import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Button, CircularProgress, TextField } from '@mui/material';
import { 
  Container, Row, Col,
  Visible, Hidden
 } from 'react-grid-system';

function Login() {
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }


  return (
    
        <Container fluid>
          <Row align="center" justify='center' className='h-screen'>

            <Hidden xs sm md>
              <Col lg={6} 
                style={{
                  display:'flex',
                  zIndex:'1',
                  flexDirection:'column',
                  padding:'0px 100px',
                  height:'100vh',
                  alignItems:'start',
                  justifyContent:'center',
                  boxShadow:'5px 0px 20px #00000050'
                }}>

                <a href="/">
                    <img src="/logo.svg" alt="Motherly Logo" className="h-7"/>
                </a>
                <h1 className='p-0 mt-0 font-bold tracking-wide'>START TRACKING</h1>
                <p className="m-0 text-justify">Welcome to Motherly, the ultimate companion app for moms to effortlessly track and manage their childrens health, from baby book milestones to recent checkups and medical records, all in one convenient place.</p>
              </Col>
            </Hidden>

            <Col lg={6} xs={12} sm={12}
              style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
              }}
              className='bg-gradient-to-br from-purple-300 via-blue-300 to-pink-100'>

              <div className="w-full h-96 p-10 max-w-sm shadow-2xl bg-slate-50 rounded-sm">

                {/* ---------------------------------------------------------------- Main form ---------------------------------------------------------------- */}
                <form className="flex flex-col h-full justify-between" onSubmit={handleSubmit}>
                  <Visible xs sm md>
                    <a href="/" className='flex place-content-center'>
                      <img src="/logo.svg" alt="Motherly Logo" className="h-9"/>
                    </a>
                  </Visible>

                  <Visible lg xl xxl>
                    <h2>Login</h2>
                  </Visible>

                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="standard"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="standard"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className='flex flex-col w-ful gap-3'>
                    <a href="/signup">No account? Create one here</a>
                  
                    <Button
                      variant='contained'
                      size='large'
                      disabled={isLoading}
                      type='submit'
                    >
                      <span className='flex items-center gap-3 transition-all'>
                        {isLoading ? <CircularProgress color='inherit' size={20} /> : ""}
                        Login
                      </span>
                    </Button>
                    
                    {error && 
                      <div role="alert" className="flex items-center gap-2 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {error}
                      </div>
                    }
                  </div>

                </form>
              </div>

            </Col>
          </Row>
        </Container>

  )
}

export default Login