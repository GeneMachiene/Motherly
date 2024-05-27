import ProfileCard from "./components/profile/ProfileCard"
import { 
  Container, Row, Col,
 } from 'react-grid-system';

function Profile() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={5}>
            <div className="card font-semibold text-white bg-neutral items-center mb-3">
              INFORMATION
            </div>
            <div className="card w-full gap-y-7">
              <ProfileCard 
                image={"https://img.freepik.com/free-photo/portrait-american-woman_53876-148185.jpg"}
                name={"Mary Stewart"}
                role={"Mother"}
                bio={"Happy mother of 3 beautiful children. I work a part time job and love cooking and cleaning as a hobby."}
              />
              <div className="card shadow-lg bg-base-100 mb-3">
                <div className="card-body">
                  Birthday: Birdthday
                  <br/>Address: Block No. Street, City , Country
                  <br/>Status: Married
                  <br/>Sex: Female
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="card font-semibold text-white bg-neutral items-center mb-3">
              FAMILY PROFILE
            </div>
            <div className="card w-full h-dvh gap-y-7 overflow-y-auto py-2 px-4 bg-base-200">
              <ProfileCard 
                image={"https://images.genius.com/3e99ae508da972a2ad9fc7ba2071cd52.435x435x1.jpg"}
                name={"Dylan Stewart"}
                role={"Son"}
                bio={"Asthma"}
                child
              />
              <ProfileCard 
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguWUvnY-1FNa1o05660_Ia0UdBXBwKPF4Ax_jmnfDrA&s"}
                name={"Audrey Stewart"}
                role={"Daughter"}
                bio={""}
                child
              />
              <ProfileCard 
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwFNGcF3lmUeUB-Mgmrx5CsLkDtYnVdAA715rNZqOvw&s"}
                name={"Josh Stewart"}
                role={"Son"}
                bio={""}
                child
              />
              <div className="divider">
              <button className="btn btn-circle btn-primary">
                <img src="/add.svg" alt="add icon" className="h-8 w-8" />
              </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Profile