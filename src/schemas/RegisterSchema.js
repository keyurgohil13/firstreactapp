import * as Yup from 'yup';


export const RegisterSchema = Yup.object({
    name : Yup.string().min(5).required("Please Enter Your Name"),
    email : Yup.string().email().required("Please Enter Your Message"),
    password: Yup.string().min(6).required("Please Enter Your password"),
    c_password: Yup.string().oneOf([Yup.ref('password')], "Password Must Match").required("Please Confirm Password")
})