import {EmployerInput} from "../resolvers/Inputs/EmployerInput";

export const validateRegisterEmployer = (options: EmployerInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Невалидный email",
      },
    ];
  }

  if (options.firstname.length <= 2) {
    return [
      {
        field: "firstname",
        message: "Значение должно быть больше, чем 2",
      },
    ];
  }

  if (options.lastname.length <= 2) {
    return [
      {
        field: "firstname",
        message: "Значение должно быть больше, чем 2",
      },
    ];
  }

  if (options.firstname.includes("@")) {
    return [
      {
        field: "firstname",
        message: "Поле недолжно включать @",
      },
    ];
  }

  if (options.lastname.includes("@")) {
    return [
      {
        field: "lastname",
        message: "Поле недолжно включать @",
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "Пароль должен быть длинее двух 2 символов",
      },
    ];
  }

  return null;
};
