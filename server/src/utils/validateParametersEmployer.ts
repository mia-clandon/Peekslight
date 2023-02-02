import {ParametersEmployerInput} from "../resolvers/Inputs/ParametersEmployerInput";

export const validateParametersEmployer = (options: ParametersEmployerInput) => {
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
