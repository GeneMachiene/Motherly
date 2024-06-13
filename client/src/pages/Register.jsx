import { useEffect } from "react";
import { useImmer } from "use-immer";
import { useSignup } from "../hooks/useSignup";
import AsyncSelect from "react-select/async";
import AddIcon from "@mui/icons-material/Add";
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender,
} from "react-grid-system";
import {
  styled,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
} from "@mui/material";
import { color } from "@mui/system";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const emptyUser = {
  email: null,
  password: null,
  contact_number: null,
  personal_information: {
    name: {
      last_name: null,
      first_name: null,
      middle_name: null,
      suffix: null,
    },
    address: {
      region: null,
      province: null,
      city: null,
      district: null,
      barangay: null,
      residence: null,
      street: null,
    },
    birthdate: null,
    age: null,
    marital_status: null,
    sex: null,
    place_of_birth: null,
    contact_one: null,
    contact_two: null,
    messenger_name: null,
    religion: null,
    language_spoken: null,
    tin: null,
    gsis_or_sss: null,
  },
  family: {
    name_of_spouse: {
      last_name: null,
      first_name: null,
      middle_name: null,
      suffix: null,
    },
    name_of_father: {
      last_name: null,
      first_name: null,
      middle_name: null,
      suffix: null,
    },
    name_of_mother: {
      last_name: null,
      first_name: null,
      middle_name: null,
      suffix: null,
    },
  },
  education: {
    highest_educational_attainment: null,
    technical_skills: null,
  },
  economic_profile: {
    source_of_income_and_assistance: null,
    monthly_income: null,
  },
  health_profile: {
    medical_concern: null,
    dental_concern: null,
    social_or_emotional: null,
    health_problems_or_ailment: null,
    visual_or_hearing_condition: null,
    area_of_difficulty: null,
  },
  photo_references: {
    id: null,
    selfie: null,
  },
};

function Register() {
  const [user, updateUser] = useImmer(emptyUser);
  const { signup, error, isLoading } = useSignup();

  // for debugging purposes
  useEffect(() => {
    console.log("User changed:", user);
  }, [user]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    updateUser((draft) => {
      switch (name) {
        case "email":
          draft.email = value;
          break;
        case "password":
          draft.password = value;
          break;
        case "contact_number":
          draft.contact_number = value;
          break;
        case "personal_information.name.last_name":
          draft.personal_information.name.last_name = value;
          break;
        case "personal_information.name.first_name":
          draft.personal_information.name.first_name = value;
          break;
        case "personal_information.name.middle_name":
          draft.personal_information.name.middle_name = value;
          break;
        case "personal_information.name.suffix":
          draft.personal_information.name.suffix = value;
          break;
        case "personal_information.address.region":
          draft.personal_information.address.region = value;
          break;
        case "personal_information.address.province":
          draft.personal_information.address.province = value;
          break;
        case "personal_information.address.city":
          draft.personal_information.address.city = value;
          break;
        case "personal_information.address.district":
          draft.personal_information.address.district = value;
          break;
        case "personal_information.address.barangay":
          draft.personal_information.address.barangay = value;
          break;
        case "personal_information.address.residence":
          draft.personal_information.address.residence = value;
          break;
        case "personal_information.address.street":
          draft.personal_information.address.street = value;
          break;
        case "personal_information.birthdate":
          draft.personal_information.birthdate = value;
          break;
        case "personal_information.age":
          draft.personal_information.age = value;
          break;
        case "personal_information.marital_status":
          draft.personal_information.marital_status = value;
          break;
        case "personal_information.sex":
          draft.personal_information.sex = value;
          break;
        case "personal_information.place_of_birth":
          draft.personal_information.place_of_birth = value;
          break;
        case "personal_information.contact_one":
          draft.personal_information.contact_one = value;
          break;
        case "personal_information.contact_two":
          draft.personal_information.contact_two = value;
          break;
        case "personal_information.messenger_name":
          draft.personal_information.messenger_name = value;
          break;
        case "personal_information.religion":
          draft.personal_information.religion = value;
          break;
        case "personal_information.language_spoken":
          draft.personal_information.language_spoken = value;
          break;
        case "personal_information.tin":
          draft.personal_information.tin = value;
          break;
        case "personal_information.gsis_or_sss":
          draft.personal_information.gsis_or_sss = value;
          break;
        case "family.name_of_spouse.last_name":
          draft.family.name_of_spouse.last_name = value;
          break;
        case "family.name_of_spouse.first_name":
          draft.family.name_of_spouse.first_name = value;
          break;
        case "family.name_of_spouse.middle_name":
          draft.family.name_of_spouse.middle_name = value;
          break;
        case "family.name_of_spouse.suffix":
          draft.family.name_of_spouse.suffix = value;
          break;
        case "family.name_of_father.last_name":
          draft.family.name_of_father.last_name = value;
          break;
        case "family.name_of_father.first_name":
          draft.family.name_of_father.first_name = value;
          break;
        case "family.name_of_father.middle_name":
          draft.family.name_of_father.middle_name = value;
          break;
        case "family.name_of_father.suffix":
          draft.family.name_of_father.suffix = value;
          break;
        case "family.name_of_mother.last_name":
          draft.family.name_of_mother.last_name = value;
          break;
        case "family.name_of_mother.first_name":
          draft.family.name_of_mother.first_name = value;
          break;
        case "family.name_of_mother.middle_name":
          draft.family.name_of_mother.middle_name = value;
          break;
        case "family.name_of_mother.suffix":
          draft.family.name_of_mother.suffix = value;
          break;
        case "education.highest_educational_attainment":
          draft.education.highest_educational_attainment = value;
          break;
        case "education.technical_skills":
          draft.education.technical_skills = value;
          break;
        case "economic_profile.source_of_income_and_assistance":
          draft.economic_profile.source_of_income_and_assistance = value;
          break;
        case "economic_profile.monthly_income":
          draft.economic_profile.monthly_income = value;
          break;
        case "health_profile.medical_concern":
          draft.health_profile.medical_concern = value;
          break;
        case "health_profile.dental_concern":
          draft.health_profile.dental_concern = value;
          break;
        case "health_profile.social_or_emotional":
          draft.health_profile.social_or_emotional = value;
          break;
        case "health_profile.health_problems_or_ailment":
          draft.health_profile.health_problems_or_ailment = value;
          break;
        case "health_profile.visual_or_hearing_condition":
          draft.health_profile.visual_or_hearing_condition = value;
          break;
        case "health_profile.area_of_difficulty":
          draft.health_profile.area_of_difficulty = value;
          break;
        case "photo_references.id":
          draft.photo_references.id = value;
          break;
        case "photo_references.selfie":
          draft.photo_references.selfie = value;
          break;
        default:
          break;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(user);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Container fluid xs sm md className="overflow-x-hidden">
      <Row
        justify="between"
        align="center"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <a href="/">
          <img src="/logo.svg" alt="Motherly Logo" className="h-9 my-3" />
        </a>
        <ScreenClassRender
          render={(screenClass) => <p>Screen class: {screenClass}</p>}
        />
      </Row>

      {/* Logo Title */}
      <Row justify="center">
        <div className="flex flex-col items-center">
          <h2 className="my-5">Online Sign Up Form</h2>
        </div>
      </Row>

      <form onSubmit={handleSubmit}>
        {/* Sub Title */}
        <Row className="mb-4">
          <Col>
            <h3 className="font-bold text-primary text-center mb-4">
              New Application
            </h3>
            <p>
              Please fill up{" "}
              <span className="font-bold">completely and correctly</span> the
              required information before each item below. For items that are
              not associated to you, leave it blank. Required items are also
              marked with an <span className="text-error">asterisk (*)</span> so
              please fill it up correctly.
            </p>
          </Col>
        </Row>

        <Divider Text={"I. Personal Information"} />

        <SectionLabel Text={"1. Name"} Hint={"Pangalan"} />
        <Row className="mb-2">
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="personal_information.name.last_name"
              value={user.personal_information.name.last_name}
              label="Lastname (Apelyido)"
              required
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="personal_information.name.first_name"
              value={user.personal_information.name.first_name}
              label="Firstname (Pangalan)"
              required
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="personal_information.name.middle_name"
              value={user.personal_information.name.middle_name}
              label="Middlename (Gitnang Pangalan)"
              required
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="personal_information.name.suffix"
              value={user.personal_information.name.suffix}
              label="Suffix/put - if no suffix"
            />
          </Col>
        </Row>

        <SectionLabel
          Wrap
          Text={"2. Address"}
          Hint={
            "Select region first, then province, then city, then district and your barangay"
          }
        />
        <Row>
          <Col md={4}>
            <AsyncSelect placeholder="All Regions" className="mb-6" />
          </Col>
          <Col md={4}>
            <AsyncSelect placeholder="All Provinces" className="mb-6" />
          </Col>
          <Col md={4}>
            <AsyncSelect
              placeholder="All Cities/Municipalities"
              className="mb-6"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <AsyncSelect placeholder="All Districts" className="mb-6" />
          </Col>
          <Col md={8}>
            <AsyncSelect placeholder="All Barangays" className="mb-6" />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Input
              onChange={handleUserChange}
              name="personal_information.address.residence"
              value={user.personal_information.address.residence}
              label="Residence (House No./Block/Lot)"
              required
            />
          </Col>
          <Col md={6}>
            <Input
              onChange={handleUserChange}
              name="Street"
              label="Street (Zone/Purok/Sitio) - Not required"
            />
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <SectionLabel Text={"3. Birthdate"} Hint={"Birthday"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="personal_information.birthdate"
                  value={user.personal_information.birthdate}
                  label="Birth Date"
                  required
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"Age "} Hint={"Edad"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Age"
                  label="Age"
                  disabled={true}
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"4. Marital Status"} Hint={"Status"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="personal_information.marital_status"
                  value={user.personal_information.marital_status}
                  label="Marital Status"
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"5. Sex"} Hint={"@ Birth"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="personal_information.sex"
                  value={user.personal_information.sex}
                  label="Sex"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <SectionLabel Text={"6. Place of Birth"} Hint={"Saan Pinanganak"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="personal_information.place_of_birth"
                  value={user.personal_information.place_of_birth}
                  label="Place of Birth"
                  required
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"7. Contact No. 1 "} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Contact_1"
                  label="Contact No. 1"
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"8. Contact No. 2"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Contact_2"
                  label="Contact No. 2"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <SectionLabel Text={"9. Email Address"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Email_add"
                  label="Email Address"
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"10. Messenger Name "} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Messenger_name"
                  label="Messenger Name"
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"11. Religion"} Hint={"Relihiyon"} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Religion"
                  label="Religion"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <SectionLabel
              Text={"12. Language Spoken"}
              Hint={"Wikang sinasalita"}
            />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="Language_spoken"
                  label="Language Spoken"
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"13. TIN"} />
            <Row>
              <Col>
                <Input onChange={handleUserChange} name="TIN" label="TIN" />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <SectionLabel Text={"14. GSIS/SSS No."} />
            <Row>
              <Col>
                <Input
                  onChange={handleUserChange}
                  name="GSIS_SSS"
                  label="GSIS/SSS"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider Text={"II. Family"} />

        <SectionLabel Text={"15. Spouse's Name"} Hint={"Pangalan ng Asawa"} />
        <Row>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="last_name"
              label="Lastname (Apelyido)"
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="first_name"
              label="Firstname (Unang Pangalan)"
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="middle_name"
              label="Middlename (Gitnang Pangalan)"
            />
          </Col>
          <Col md={3}>
            <Input onChange={handleUserChange} name="suffix" label="Suffix" />
          </Col>
        </Row>

        <SectionLabel Text={"16. Fathers's Name"} Hint={"Pangalan ng Ama"} />
        <Row>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="last_name"
              label="Lastname (Apelyido)"
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="first_name"
              label="Firstname (Unang Pangalan)"
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="middle_name"
              label="Middlename (Gitnang Pangalan)"
            />
          </Col>
          <Col md={3}>
            <Input onChange={handleUserChange} name="suffix" label="Suffix" />
          </Col>
        </Row>

        <SectionLabel Text={"17. Mother's Name"} Hint={"Pangalan ng Ina"} />
        <Row className="mb-2">
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="last_name"
              label="Lastname (Apelyido)"
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="first_name"
              label="Firstname (Unang Pangalan)"
            />
          </Col>
          <Col md={3}>
            <Input
              onChange={handleUserChange}
              name="middle_name"
              label="Middlename (Gitnang Pangalan)"
            />
          </Col>
          <Col md={3}>
            <Input onChange={handleUserChange} name="suffix" label="Suffix" />
          </Col>
        </Row>

        <Divider Text={"III. Education"} />

        <SectionLabel
          Text={"18. Highest Educational Attainment"}
          Hint={
            "(Elementary/High school/Vocational course/College/Postgraduate)"
          }
        />
        <Row>
          <Col md={12}>
            <Input
              onChange={handleUserChange}
              name="educational_attainment"
              label="Highest Educational Attainment"
            />
          </Col>
        </Row>

        <SectionLabel
          Text={"19. Technical Skills"}
          Hint={"Teknikal na kakayahan"}
        />
        <Row className="mb-2">
          <Col md={12}>
            <Input
              onChange={handleUserChange}
              name="tech_skills"
              label="Technical Skills"
            />
          </Col>
        </Row>

        <Divider Text={"IV. Economic Profile"} />

        <Row>
          <Col md={6}>
            <SectionLabel
              Text={"20. Source of Income & Assistance"}
              Hint={
                "(E.g.-Pension/Investments/Government Aid,Scholarships/etc.)"
              }
            />
            <Input
              onChange={handleUserChange}
              name="source_incom"
              label="Source of Income"
            />
          </Col>
          <Col md={6}>
            <SectionLabel Text={"21. Monthly Income"} Hint={"Buwanang kita"} />
            <Input
              onChange={handleUserChange}
              name="monthly_income"
              label="Monthly Income"
            />
          </Col>
        </Row>

        <Divider Text={"V. Health Profile"} />

        <Row>
          <Col md={4}>
            <SectionLabel Text={"22. Medical Concern"} />
            <Input
              onChange={handleUserChange}
              name="med_concern"
              label="Medical Concern"
            />
          </Col>
          <Col md={4}>
            <SectionLabel Text={"23. Dental Concern"} />
            <Input
              onChange={handleUserChange}
              name="dent_concern"
              label="Dental Concern"
            />
          </Col>
          <Col md={4}>
            <SectionLabel Text={"24. Social/Emotional"} />
            <Input
              onChange={handleUserChange}
              name="soc_emotional"
              label="Social/Emotional"
            />
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={4}>
            <SectionLabel Text={"25. Health Problems / Ailment"} />
            <Input
              onChange={handleUserChange}
              name="health_probs"
              label="Health Problems"
            />
          </Col>
          <Col md={4}>
            <SectionLabel Text={"26. Visual / Hearing Condition"} />
            <Input
              onChange={handleUserChange}
              name="vis_hear"
              label="Visual/Hearing"
            />
          </Col>
          <Col md={4}>
            <SectionLabel Text={"27. Area of Difficulty"} />
            <Input
              onChange={handleUserChange}
              name="area_dif"
              label="Area of Difficulty"
            />
          </Col>
        </Row>

        <Divider Text={"VI. ID & Photo Attachment"} />
        <Row className="mb-2">
          <Col md={6}>
            <SectionLabel
              Text={"28. ID photo"}
              Hint={"Submit a photo of your ID"}
            />
            <IconButton
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              className="w-full rounded-md h-72 bg-gray-200 border-dashed border-gray-500 border-2"
            >
              <AddIcon />
              <VisuallyHiddenInput type="file" />
            </IconButton>

            <div className="flex justify-between my-6">
              <img
                className="w-1/2"
                src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/66006283209/original/soXbQqqm9Lz8U9Nokv-kwa863riv_7ecaw.png?1614955740"
              />
              <img
                className="w-1/2"
                src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/66006286270/original/Sj2njXerH9Rk5QpeLpmbQdBpXDU-sZaZpg.png?1614958233"
              />
            </div>
          </Col>
          <Col md={6}>
            <SectionLabel
              Text={"29. Photo Attachment"}
              Hint={"Submit a selfie of you holding the ID"}
            />
            <IconButton
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              className="w-full rounded-md h-72 mb-6 bg-gray-200 border-dashed border-gray-500 border-2"
            >
              <AddIcon />
              <VisuallyHiddenInput type="file" />
            </IconButton>
          </Col>
        </Row>

        <Divider Text={"VII. Email / Contact and Password"} />

        <SectionLabel Text={"30. Email"} />
        <Row>
          <Col md={12}>
            <Input
              onChange={handleUserChange}
              name="email"
              value={user.email}
              label="Email"
              required
            />
          </Col>
        </Row>

        <SectionLabel Text={"31. Contact Number"} />
        <Row>
          <Col md={12}>
            <Input
              onChange={handleUserChange}
              name="contact_number"
              value={user.contact_number}
              label="Contact Number"
              required
            />
          </Col>
        </Row>

        <SectionLabel Text={"32. Password"} />
        <Row className="mb-2">
          <Col md={12}>
            <Input
              onChange={handleUserChange}
              name="password"
              value={user.password}
              label="Password"
              required
            />
          </Col>
        </Row>

        <Divider
          Text={
            "VIII. Confirmation to allow the storage and use of my personal data"
          }
        />

        <SectionLabel Text={"33. Mother's Name"} Hint={"Pangalan"} />
        <Row>
          <Col>
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="The information entered above are true and correct"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I have a full knowledge in providing the above information"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I have a full knowledge in providing the above information"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              disabled={isLoading}
              className="my-6 h-12"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

function Divider({ Text }) {
  return (
    <Row className="bg-blue-950 mb-4">
      <Col>
        <div className="flex justify-center w-full py-3 font-bold text-white">
          {Text}
        </div>
      </Col>
    </Row>
  );
}
function Input({ onChange, name, value, label, required, disabled }) {
  return (
    <TextField
      onChange={onChange}
      name={name}
      value={value}
      fullWidth
      required={required}
      disabled={disabled}
      label={label}
      InputLabelProps={
        required
          ? { style: { color: "red", zIndex: -1 } }
          : { style: { zIndex: -1 } }
      }
      size="small"
      sx={{ mb: 3 }}
    />
  );
}
function SectionLabel({ Text, Hint, Wrap }) {
  return (
    <Row className={Wrap ? "mb-4" : "mb-4 whitespace-nowrap"}>
      <Col>
        <span className="font-bold">{Text}</span> {Hint ? "- " + Hint : ""}
      </Col>
    </Row>
  );
}

export default Register;
