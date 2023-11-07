import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  date_applied: yup.date().required(),
  job_posting_id: yup.string().nullable().required(),
  employee_id: yup.string().nullable().required(),
});
