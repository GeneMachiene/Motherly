import Button from '@mui/material/Button';
import {
  Container,
  Row,
  Col,
} from "react-grid-system";
import Face2Icon from '@mui/icons-material/Face2';
import GoogleIcon from '@mui/icons-material/Google';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Footer from './components/Footer';

function Landing() {

  return (
    <>
      <Container fluid>
        {/* hero 1 */}
        <Row justify='center' align='center' className='group py-10 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 overflow-hidden'>
          <Col lg={5} className='flex flex-col md:items-start md:text-left text-center items-center justify-center py-10' >
            <h1 className='m-0 font-extrabold text-4xl leading-relaxed text-purple-800'>Your Journey to <span className='bg-purple-200'>Motherhood, Simplified</span></h1>
            <p className='mt-2 md:mb-16 text-gray-600'>A Lifestyle Upgrade for Your Pregnancy Journey</p>
            
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

          <Col lg={3} className='flex h-96 flex-col items-center justify-center select-none'>
              <span className="
                          absolute
                          bg-gradient-to-r
                          from-purple-300
                          to-pink-200
                          rounded-full
                          h-72 w-72
                          group-hover:translate-x-2
                          transition ease-out duration-700" />
              <img src="landing/pattern1.webp" alt="pattern1" 
                className='
                          absolute h-96
                          group-hover:scale-125
                          transition ease-out duration-700' />
              <img src="landing/Dashboard.png" alt='dashboard' 
                className='
                          h-full z-10
                          rounded-3xl
                          shadow-sm
                          group-hover:shadow-2xl
                          group-hover:scale-105
                          md:group-hover:-translate-x-2
                          transition ease-out duration-700'/>
          </Col>
        </Row>

        {/* hero 2 */}
        <Row justify='center' align='center' className='group py-10 bg-gradient-to-bl from-pink-100 via-white to-white overflow-hidden'>

        <Col lg={3} className='flex h-96 flex-col items-center justify-center select-none'>
              <span className="
                          absolute
                          bg-gradient-to-r
                          from-purple-300
                          to-pink-200
                          rounded-full
                          h-72 w-72
                          group-hover:-translate-x-2
                          transition ease-out duration-700" />
              <img src="landing/pattern2.webp" alt="pattern1" 
                className='
                          absolute h-80
                          group-hover:scale-125
                          transition ease-out duration-700' />
              <img src="landing/Profile.png" alt='Profile' 
                className='
                          h-full z-10
                          rounded-3xl
                          shadow-sm
                          group-hover:shadow-2xl
                          group-hover:scale-105
                          md:group-hover:translate-x-2
                          transition ease-out duration-700'/>
          </Col>

          <Col lg={5} className='flex flex-col md:items-end md:text-right text-center items-center py-10'>
            <h1 className='m-0 mr-3 font-extrabold text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Join the 1.5 million moms currently in</h1>
            <img src="/logo.svg" alt="logo" className='h-6 mt-4 mb-16 border-solid border-2 border-purple-300 rounded-full shadow-xl py-2 px-10' />
          
            
            <Row>
              <Col>
                <Button size='small' variant='outlined' color='secondary' className='rounded-2xl py-3'>
                    <p className='text-right m-0 leading-none'>
                      <span className='text-xs'>Download the app</span><br/>
                      <span className='text-sm font-semibold'>Open Google Playstore</span>
                    </p>
                    <GoogleIcon className='h-10 w-10 ml-4' />
                </Button>
              </Col>
            </Row>
          </Col>

        </Row>
        
        {/* hero 3 */}
        <Row justify='center' align='center' className='group py-10 relative overflow-hidden bg-[url("https://img.freepik.com/premium-photo/young-pregnant-woman-pink-background_728202-1373.jpg?w=996")] bg-no-repeat bg-right bg-cover'>
          <div className='absolute left-0 h-full w-full bg-gradient-to-r from-purple-100 via-blue-100 via-60%'/>

          <Col lg={5} className='flex flex-col md:items-start md:text-left text-center items-center py-10' >
            <h1 className='m-0 font-extrabold text-4xl leading-relaxed text-purple-800'>Start <span className='bg-purple-200'>Tracking</span> by Calendar</h1>
            <p className='mt-2 text-gray-600'>Log important dates and events through your journey</p>
          </Col>

          <Col  lg={3} className='h-96 flex flex-col items-center md:py-0 md:items-center justify-center select-none'>
              <img src="landing/pattern2.webp" alt="pattern2" 
                className='
                            absolute h-64
                            group-hover:scale-125
                            group-hover:blur-sm
                            transition ease-out duration-700' />
              <img src="landing/Calendar.png" alt='profile' 
                className='
                          h-full z-10
                          rounded-3xl
                          shadow-sm
                          group-hover:shadow-2xl
                          group-hover:scale-105
                          md:group-hover:translate-x-2
                          transition ease-out duration-700'/>
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

        {/* about motherly */}
        <Row justify='center' align='center' className='group py-3 bg-gradient-to-r from-pink-200 to-pink-400 overflow-hidden'>

          <Col lg={3}  className='flex h-52 flex-col items-center justify-center select-none'>
              <img src="icon.svg" alt='dashboard' 
                className='
                          h-40 w-40 p-3 z-10 object-cover
                          rounded-full
                          shadow-sm
                          group-hover:shadow-2xl
                          group-hover:scale-105
                          md:group-hover:-translate-x-2
                          transition ease-out duration-700'/>
          </Col>

          <Col lg={5}  className='flex flex-col md:items-end md:text-right text-center items-center justify-center py-10' >
            <p className=' text-purple-950 pl-8 font-semibold border-0 border-r pr-2 border-solid border-pink-700'>Motherly is the ultimate companion app for moms to effortlessly track and manage their children&apos;s health, from baby book milestones to recent checkups and medical records, all in one convenient place.</p>
          </Col>

        </Row>

      </Container>

      {/* footer */}
      <Footer/>
    </>
  )
}

export default Landing