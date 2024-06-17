import Button from '@mui/material/Button';
import {
  Container,
  Row,
  Col
} from "react-grid-system";
import Face2Icon from '@mui/icons-material/Face2';
import GoogleIcon from '@mui/icons-material/Google';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

function Landing() {

  return (
    <>
      <Container fluid>
        {/* hero 1 */}
        <Row justify='center' align='center' className='group shadow-2xl bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 py-10'>
          <Col md={5} className='flex flex-col text-center items-center' >
            <h1 className='m-0 font-extrabold text-4xl leading-relaxed text-purple-800'>Your Journey to <span className='bg-purple-200'>Motherhood, Simplified</span></h1>
            <p className='mt-2 mb-16 text-gray-600'>A Lifestyle Upgrade for Your Pregnancy Journey</p>
            
            <Row>
              <Col>
                <Button variant='contained' color='secondary' className='rounded-2xl py-3'>
                    <Face2Icon className='h-10 w-10 mr-6' />
                    <p className='text-left m-0 leading-none'>
                      <span className='text-xs'>Sign Up</span><br/>
                      <span className='text-base font-semibold'>Start Your Journey</span>
                    </p>
                </Button>
              </Col>
            </Row>
          </Col>

          <Col md={3} className='h-96 flex flex-col items-center justify-center'>
            <img src="landing/Dashboard.png" alt='dashboard' 
                  className='
                            rounded-3xl
                            h-5/6
                            shadow-sm
                            group-hover:shadow-2xl
                            group-hover:scale-105
                            group-hover:-translate-x-5
                            transition ease-out duration-700'/>
          </Col>
        </Row>

        {/* hero 2 */}
        <Row justify='center' align='center' className='group bg-gradient-to-bl from-pink-100 via-white to-white py-10'>

          <Col lg={3} className='h-96 flex flex-col items-center justify-center'>
            <img src="landing/Profile.png" alt='profile' 
                  className='
                            rounded-3xl
                            h-5/6
                            shadow-sm
                            group-hover:shadow-2xl
                            group-hover:scale-105
                            group-hover:-translate-x-5
                            transition ease-out duration-700'/> 
          </Col>

          <Col lg={5} className='flex flex-col items-center text-center'>
            <h1 className='m-0 mr-3 font-extrabold text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Join the 1.5 million moms currently in</h1>
            <img src="/logo.svg" alt="logo" className='h-10 mt-4 mb-16 border-solid border-2 border-purple-300 rounded-full shadow-xl py-2 px-10' />
          
            
            <Row>
              <Col>
                <Button variant='outlined' color='secondary' className='rounded-2xl py-3'>
                    <GoogleIcon className='h-10 w-10 mr-6' />
                    <p className='text-left m-0 leading-none'>
                      <span className='text-xs'>Download the app</span><br/>
                      <span className='text-base font-semibold'>Open in Google Playstore</span>
                    </p>
                </Button>
              </Col>
            </Row>
          </Col>

        </Row>

        {/* testimonials */}
        <Row justify='center' align='start' className='bg-white py-6'>
          <div className='w-full py-5 text-center'>
            <Divider><span className='font-bold'>TESTIMONIALS</span></Divider>
            <span className='text-gray-500'>See what moms have to say about our app.</span>
          </div>

          <Col md={3} className='py-3 flex justify-center'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.catholicmom.com/hubfs/20160711%20DYarrison%201.png"
                alt="mom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mia | 3 years old
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Motherly has been a game-changer for us. Keeping track of my child&apos;s health records and milestones is so easy now. It&apos;s like having a personal assistant for my parenting journey!
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col md={3} className='py-3 flex justify-center'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://media.30seconds.com/tip/lg/Dear-Pregnant-Mama-Hang-in-There-Here-Are-8-Things-You-Nee-17830-aadc9c0b3f-1549488308.jpg"
                alt="mom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Liza | 3rd trimester
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  As a first-time mom, I was overwhelmed with everything I needed to keep track of. Motherly made it all manageable and gave me peace of mind. I can&apos;t imagine going through this without it!
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col md={3} className='py-3 flex justify-center'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-photo/baby-wants-you-touch-belly-portrait-happy-relaxed-pregnant-european-female-cozy-comfortable-outfit-sitting-armchair-leaning-palm-gazing-camera-with-cute-smile_197531-31107.jpg"
                alt="mom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Emily | 3rd Trimester
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Motherly has been my go-to app during my pregnancy. The organization and reminders help me stay on top of everything. It&apos;s more than just an app; it&apos;s been a real lifestyle upgrade!
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* temporary footer */}
      <div className='box-border h-72 w-full flex flex-row justify-around items-center p-10 bg-pink-100'>

        <Container>
          <Row>
            <Col><img src="/logo.svg" alt=""  className='h-9'/></Col>
            <Col>
              <ul className='m-0'>
                <li>Useful links</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Application</li>
              </ul>
            </Col>
            <Col>
              <ul className='m-0'>
                <li>Pages</li>
                <li>How Motherly Works</li>
                <li>Support</li>
              </ul>
            </Col>
            <Col>
              <ul className='m-0'>
                <li>Contact</li>
                <li>Motherly@gmail.com</li>
                <li>(+63) 0912 123 1234</li>
              </ul>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Landing