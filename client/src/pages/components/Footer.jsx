import { Col, Container, Hidden, Row } from "react-grid-system"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className='box-border h-72 w-full flex flex-row justify-around items-center p-10 text-pink-950 bg-pink-100'>

        <Container>
          <Row>
            <Col xs={12} lg={3}><img src="/logo.svg" alt=""  className='w-full max-w-56 pb-6'/></Col>
            <Col xs={6} sm={4} lg={3}>
              <ul className='m-0 list-none leading-7 pl-4 border-l border-pink-800 border-0 border-solid'>
                <li className='font-bold'>Useful links</li>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about-us'}>About Us</NavLink></li>
                <li><NavLink to={'/app'}>Application</NavLink></li>
              </ul>
            </Col>
            <Col xs={6} sm={4} lg={3}>
              <ul className='m-0 list-none leading-7 pl-4 border-l border-pink-800 border-0 border-solid'>
                <li className='font-bold'>Pages</li>
                <li><NavLink to={'/how'}>How Motherly Works</NavLink></li>
                <li><NavLink to={'/support'}>Support</NavLink></li>
              </ul>
            </Col>
            <Hidden xs>
              <Col sm={4} lg={3}>
                <ul className='m-0 list-none leading-7 pl-4 border-l border-pink-800 border-0 border-solid'>
                  <li className='font-bold'>Contact</li>
                  <li>Motherly@gmail.com</li>
                  <li>(+63) 0912 123 1234</li>
                </ul>
              </Col>
            </Hidden>
          </Row>
        </Container>

      </div>
  )
}

export default Footer