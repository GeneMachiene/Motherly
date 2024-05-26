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
            <form className="card-body prose prose-lg">
              <Visible xs sm md>
                <a href="/" className='flex place-content-center'>
                  <img src="/logo.svg" alt="Motherly Logo" className="h-9"/>
                </a>
              </Visible>
              <Visible lg xl xxl>
                <h2>Sign up</h2>
              </Visible>
              <div className='max-h-80 overflow-auto'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" placeholder="Last Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" placeholder="First Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Middle Name</span>
                  </label>
                  <input type="text" placeholder="Middle Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Birthday</span>
                  </label>
                  <input type="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" placeholder="Block Number, Street" className="input input-bordered" required />
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Signup