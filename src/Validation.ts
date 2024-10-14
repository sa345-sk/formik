 import * as yup from "yup";
type userInitialValues = {
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    phoneNumber: string,
    dob: Date | null,
    LGA: string,
    state: string,
    nin: string,
    maritalStatus: string,
    courseID: string,
    course: string
}
// const d = new Date()
export const userInitialValues: userInitialValues = {
    firstName: "",
    lastName: "",
    LGA: "",
    email: "",
    gender: "",
    phoneNumber: "",
    dob: new Date(),
    state: "",
    nin: "",
    maritalStatus: "",
    courseID: "",
    course: ""
};
export const adminValues = {
    email: "",
    password: "",
}

export const userValidation = yup.object().shape({
 firstName: yup.string().required('First Name is Required'),
 lastName: yup.string().required('Last Name is Required'),
 email: yup.string().email().required('Email is Required'),
 phoneNumber: yup.number().required('Phone Number is Required').positive().integer(),
 dob: yup.date().nullable().required('Date Of Birth is Required'),
 state: yup.string().required('State is Required'),
 course: yup.string().required('Course is Required'),
 nin: yup.number().required('NIN is Required').positive().integer(),
 gender: yup.string().required('Gender is Required').oneOf(["Male", "Female"], "Please Choose Either Of The given Options"),
 maritalStatus: yup.string().required('Marital Status is Required').oneOf(["Single", "Married"], "Please Choose Either Of The given Options"),
 LGA: yup.string().required('LGA is Required')
})
