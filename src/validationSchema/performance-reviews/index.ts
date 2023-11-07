import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comments: yup.string().required(),
  review_date: yup.date().required(),
  employee_id: yup.string().nullable().required(),
});
