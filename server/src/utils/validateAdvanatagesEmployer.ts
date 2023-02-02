import {AdvantagesEmployerInput} from "../resolvers/Inputs/AdvantagesEmployerInput";

export const validateAdvantagesEmployer = (options: AdvantagesEmployerInput) => {
  if (options.title.length <= 0) {
    return [
      {
        field: "icon",
        message: "Поле не должно быть пустым",
      },
    ];
  }
  if (options.title.length <= 2) {
    return [
      {
        field: "title",
        message: "Поле не должно занимать меньше 2 символов",
      },
    ];
  }
  if (options.description.length <= 2) {
    return [
      {
        field: "description",
        message: "Поле не должно занимать меньше 2 символов",
      },
    ];
  }

  return null;
};
