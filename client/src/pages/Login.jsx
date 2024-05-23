import { 
  Container, Row, Col,
  Visible, Hidden
 } from 'react-grid-system';

function Login() {
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
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
              </Col>
            </Hidden>
            <Col lg={5} xs={12} sm={12} style={{display:'flex', justifyContent:'center'}}>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <Visible xs sm md>
                    <a href="/" className='flex place-content-center'>
                      <img src="/logo.svg" alt="Motherly Logo" className="h-9"/>
                    </a>
                  </Visible>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>

  )
}

export default Login