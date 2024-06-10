import { useState } from "react";
import { useImmer } from "use-immer";
import { useSignup } from "../hooks/useSignup";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Signup() {
  const [user, setUser] = useImmer(emptyUser);
  const { signup, error, isLoading } = useSignup();

  const handleUserChange = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(user);
  };

  return (
    <Container fluid lg xl xxl>
      <Row align="center" justify="center" className="h-screen">
        <Hidden xs sm md>
          <Col
            lg={7}
            style={{
              display: "flex",
              padding: "0px 100px",
              height: "100vh",
              alignItems: "center",
            }}
          >
            <div className="prose prose-lg text-left">
              <a href="/">
                <img src="/logo.svg" alt="Motherly Logo" className="h-9" />
              </a>
              <h1>Start tracking</h1>
              <p className="py-6">
                Welcome to Motherly, the ultimate companion app for moms to
                effortlessly track and manage their childrens health, from baby
                book milestones to recent checkups and medical records, all in
                one convenient place.
              </p>
            </div>
          </Col>
        </Hidden>
        <Col
          lg={5}
          xs={12}
          sm={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* ---------------------------------------------------------------- Main form ---------------------------------------------------------------- */}
            <form className="card-body prose prose-lg" onSubmit={handleSubmit}>
              <Visible xs sm md>
                <a href="/" className="flex place-content-center">
                  <img src="/logo.svg" alt="Motherly Logo" className="h-9" />
                </a>
              </Visible>
              <Visible lg xl xxl>
                <h2>Sign up</h2>
              </Visible>

              <div className="lg:max-h-80 md:max-h-80 max-h-96 overflow-auto px-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={handleUserChange}
                    value={user.email}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    onChange={handleUserChange}
                    value={user.password}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    onChange={handleUserChange}
                    value={user.name.first_name}
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    onChange={handleUserChange}
                    value={user.name.first_name}
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Middle Name</span>
                  </label>
                  <input
                    onChange={handleUserChange}
                    value={user.name.middle_name}
                    type="text"
                    placeholder="Middle Name"
                    className="input input-bordered"
                  />
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
                  <input
                    type="text"
                    placeholder="Block Number, Street"
                    className="input input-bordered"
                  />
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
                <a href="#" className="label-text-alt link link-hover">
                  No account? Create one here
                </a>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    ""
                  )}
                  Sign Up
                </button>
              </div>
              {error && (
                <div role="alert" className="alert alert-warning p-2 text-xs">
                  <Hidden sm xs>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Hidden>
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const emptyUser = {
  email: "",
  password: "",
  contact_number: "",
  personal_information: {
    name: {
      last_name: "",
      first_name: "",
      middle_name: "",
      suffix: "",
    },
    address: {
      region: "",
      province: "",
      city: "",
      district: "",
      barangay: "",
      residence: "",
      street: "",
    },
    birthdate: "",
    age: "",
    marital_status: "",
    sex: "",
    place_of_birth: "",
    contact_one: "",
    contact_two: "",
    messenger_name: "",
    religion: "",
    language_spoken: "",
    tin: "",
    gsis_or_sss: "",
  },
  family: {
    name_of_spouse: {
      last_name: "",
      first_name: "",
      middle_name: "",
      suffix: "",
    },
    name_of_father: {
      last_name: "",
      first_name: "",
      middle_name: "",
      suffix: "",
    },
    name_of_mother: {
      last_name: "",
      first_name: "",
      middle_name: "",
      suffix: "",
    },
  },
  education: {
    highest_educational_attainment: "",
    technical_skills: "",
  },
  economic_profile: {
    source_of_income_and_assistance: "",
    monthly_income: "",
  },
  health_profile: {
    medical_concern: "",
    dental_concern: "",
    social_or_emotional: "",
    health_problems_or_ailment: "",
    visual_or_hearing_condition: "",
    area_of_difficulty: "",
  },
  photo_references: {
    id: "",
    selfie: "",
  },
};

export default Signup;
