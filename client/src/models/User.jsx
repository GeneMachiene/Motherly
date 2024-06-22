import dayjs from "dayjs";
import { useImmer } from "use-immer";

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
      residence: null,
      street: null,
    },
    birthdate: null,
    age: null,
    marital_status: null,
    sex: null,
    place_of_birth: null,
    messenger_name: null,
    religion: null,
    language_spoken: null,
    tin: null,
    gsis_or_sss: null,
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

export const User = () => {
  const [user, updateUser] = useImmer(emptyUser);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    
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
          draft.personal_information.age = dayjs().diff(value, 'year');
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

  return {user, handleUserChange}
};