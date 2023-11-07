import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_id: yup.string().required(),
  position: yup.string().required(),
  department: yup.string().required(),
  date_hired: yup.date().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
