import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/[a-zA-Z]/, 'Invalid name')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This is required.'),
  lastName: Yup.string()
    .matches(/[a-zA-Z]/g, 'Invalid name')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This is required.'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is required.'),
  number: Yup.string()
    .matches(/\d{10}/, 'Please Enter Number')
    .required('This is required.'),
  day: Yup.string()
    .matches(/^(0[1-9]|[12]\d|3[01])$/, 'Invalid day')
    .required('This is required.'),
  year: Yup.string()
    .matches(/^(19|20)\d{2}$/, 'Invalid Year')
    .required('This is required.'),
  month: Yup.object().required('This is required.'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('This is required.'),
});
