import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
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
    
        <Container fluid lg xl xxl>
          <Row align="center" justify='center' className='h-screen'>
            <Hidden xs sm md>
              <Col lg={7} style={{display:'flex', padding:'0px 100px', height:'100vh', alignItems:'center'}}>
                <div className="prose prose-lg text-left">
                  <a href="/">
                    <img src="/logo.svg" alt="Motherly Logo" className="h-9"/>
                  </a>
                  <h1>Start tracking</h1>
                  <p className="py-6">Welcome to Motherly, the ultimate companion app for moms to effortlessly track and manage their childrens health, from baby book milestones to recent checkups and medical records, all in one convenient place.</p>
                </div>
              </Col>
            </Hidden>
            <Col lg={5} xs={12} sm={12} style={{display:'flex', justifyContent:'center'}}>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                {/* ---------------------------------------------------------------- Main form ---------------------------------------------------------------- */}
                <form className="card-body prose prose-lg" onSubmit={handleSubmit}>
                  <Visible xs sm md>
                    <a href="/" className='flex place-content-center'>
                      <img src="/logo.svg" alt="Motherly Logo" className="h-9"/>
                    </a>
                  </Visible>
                  <Visible lg xl xxl>
                    <h2>Login</h2>
                  </Visible>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input 
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input 
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">No account? Create one here</a>
                    </label>
                  </div>
                  <div className="form-control mt-6" >
                    <button className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? <span className="loading loading-spinner loading-xs"></span> : ""}
                      Login</button>
                  </div>
                  {error && 
                    <div role="alert" className="alert alert-warning p-2 text-xs">
                      
                      <Hidden sm xs><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Hidden>
                      <span>{error}</span>
                    </div>
                  }
                </form>
              </div>
            </Col>
          </Row>
        </Container>

  )
}

export default Login