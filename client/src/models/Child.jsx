import dayjs from "dayjs";
import { useImmer } from "use-immer";

const emptyChild = {
  image: null,
  name: null,
  birthdate: dayjs(),
  age: 0,
  sex: null,
}

export const Child = () => {
  const [child, updateChild] = useImmer(emptyChild);

  const handleChildChange = (e) => {
    const { name, value } = e.target;

    updateChild((draft) => {
      switch (name) {
        case "image":
          draft.image = value;
          break;
        case "name":
          draft.name = value;
          break;
        case "birthdate":
          draft.birthdate = value;
          draft.age = dayjs().diff(value, 'year');
          break;
        case "sex":
          draft.sex = value;
          break;
        default:
          break;
      }
    });
  };

  return {child, handleChildChange}
};