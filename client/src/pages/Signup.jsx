import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { 
  Container, Row, Col,
  Visible, Hidden
 } from 'react-grid-system';
 import Select from 'react-select'

 const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Signup() {
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
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
              <p className="py-6">Welcome to Motherly, the ultimate companion app for moms to effortlessly track and manage their children's health, from baby book milestones to recent checkups and medical records, all in one convenient place.</p>
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
                <h2>Sign up</h2>
              </Visible>

              <div className='lg:max-h-80 md:max-h-80 max-h-96 overflow-auto px-4'>

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
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" placeholder="Last Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" placeholder="First Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Middle Name</span>
                  </label>
                  <input type="text" placeholder="Middle Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Birthday</span>
                  </label>
                  <input type="date" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" placeholder="Block Number, Street" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Municipality/City</span>
                  </label>
                  <Select options={options} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <Select options={options} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <Select options={options} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sex</span>
                  </label>
                  <Select options={options} />
                </div>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">No account? Create one here</a>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={isLoading}>
                {isLoading ? <span className="loading loading-spinner loading-xs"></span> : ""}
                  Sign Up</button>
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

export default Signup