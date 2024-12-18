import * as yup from 'yup'

export const ForgotSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email address is required'),
})