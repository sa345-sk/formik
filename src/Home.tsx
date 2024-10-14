import { Button, Modal, TextInput, Label, Datepicker, Select } from "flowbite-react";
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { userInitialValues, userValidation } from './Validation'
import Admin from './Admin'
// import { Formik, Form, Field, ErrorMessage } from "formik";
//This interface is created to verify the values being received from the form to add ne to the DB
interface ICandidate {
    firstName: string
    lastName: string
    email: string
    LGA: string
    gender: string
    phoneNumber: string
    dob: string
    state: string
    nin: string
    maritalStatus: string
    courseID: string
    course: string
}

const Home = () => {
    const [toggleModal, setToggleModal] = useState(false)
    // export const userInitialValues = {
    //     firstName: "",
    //     lastName: "",
    //     LGA: "",
    //     email: "",
    //     gender: "",
    //     phoneNumber: "",
    //     dob: "",
    //     state: "",
    //     nin: "",
    //     maritalStatus: "",
    //     courseId: "",
    //     course: ""
    // };
    const createCandidate = async (vals: ICandidate) => {
        const post = {
            ...vals
        }
        try {
            const response = await fetch('api/v1/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post)
            })
            const data = await response.json()
            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <div className="mt-5 ml-5 flex flex-row flex-wrap">
                <Admin/>
            </div>
            {toggleModal && <Modal show={toggleModal} size="md" onClose={() => setToggleModal(false)} popup dismissible>
                <Modal.Header />
                <Modal.Body>
                    <Formik initialValues={userInitialValues} validationSchema={userValidation} onSubmit={(values) => createCandidate(values, )
                    }>
                        {({ values, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="flex flex-col flex-wrap p-3">
                                    {/* First Name */}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700 " htmlFor="firstName">First Name *</Label>
                                        <TextInput id="firstName" name="firstName"className="rounded-md mt-1 mb-2" value={values.firstName} onBlur={handleBlur} onChange={handleChange} placeholder='First Name' />
                                        {/* <Field id="firstName" name="firstName" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={values.firstName} onBlur={handleBlur} onChange={handleChange} placeholder='First Name' /> */}
                                        {/* <ErrorMessage name="firstname" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/* Last Name */}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Last Name *</Label>
                                        <TextInput className="rounded-md mt-1 mb-2" value={values.lastName} onBlur={handleBlur} onChange={handleChange} placeholder='Last Name' id="lastName" name="lastName"/>
                                        {/* <ErrorMessage name="lastname" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/*Email*/}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="email">Email *</Label>
                                        <TextInput type="email" className="rounded-md mt-1 mb-2" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Email'id="email" name="email"/>
                                        {/* <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/* Phone Number */}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">Phone Number *</Label>
                                        <TextInput type="number" inputMode="numeric" className="rounded-md mt-1 mb-2" value={values.phoneNumber} onBlur={handleBlur} onChange={handleChange} name="phoneNumber" id="phoneNumber"/>
                                        {/* <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/*State*/}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="state">State *</Label>
                                        <TextInput className="rounded-md mt-1 mb-2" value={values.state} onBlur={handleBlur} onChange={handleChange} placeholder='State' id="state" name="state"/>
                                        {/* <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/*LGA*/}
                                    <div>
                                        <Label htmlFor="LGA" className="block text-sm font-medium text-gray-700" >LGA *</Label>
                                        <TextInput type="text" id="LGA" name="LGA" className="rounded-md mt-1 mb-2" value={values.LGA} onBlur={handleBlur} onChange={handleChange} placeholder='LGA' />
                                        {/* <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/*NIN Number*/}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="nin">NIN Number *</Label>
                                        <TextInput type="number" inputMode="numeric" name="nin" id="nin" className="rounded-md mt-1 mb-2" value={values.nin} onBlur={handleBlur} onChange={handleChange} placeholder='NIN Number' />
                                        {/* <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" /> */}
                                    </div>
                                    {/* DOB */}
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="dob">DOB *</Label>
                                        <Datepicker className="rounded-md mt-1 mb-2" onBlur={handleBlur} onChange={handleChange} placeholder='First Name' value={values.dob} name="dob" id="dob" />
                                        <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                    {/*Gender*/}
                                    <div>
                                        <Label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender *</Label>
                                        <Select id="gender" name="gender" className="rounded-md mt-1 mb-2" value={values.gender} onBlur={handleBlur} onChange={handleChange}>
                                            <option value="" label="Select gender" />
                                            <option value="Male" label="Male" />
                                            <option value="Female" label="Female" />
                                        </Select>
                                        <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                    {/*Marital Status*/}
                                    <div>
                                        <Label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status *</Label>
                                        <Select id="maritalStatus" name="maritalStatus" className="rounded-md mt-1 mb-2" value={values.maritalStatus} onBlur={handleBlur} onChange={handleChange}>
                                            <option value="" label="Select" />
                                            <option value="Married" label="Married" />
                                            <option value="Single" label="Single" />
                                        </Select>
                                        <ErrorMessage name="marital" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                    {/*Select Course*/}
                                    <div>
                                        <Label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course *</Label>
                                        <Select id="course" name="course" className="rounded-md mt-1 mb-2" value={values.course} onBlur={handleBlur} onChange={handleChange}>
                                            <option value="" label="Select" />
                                            <option value="Cyber Security" label="Cyber Security" />
                                            <option value="Web Development" label="Web Development" />
                                            <option value="Software Development" label="Software Development" />
                                            <option value="Seo Optimisation" label="Seo Optimisation" />
                                            <option value="Marketing" label="Marketing" />
                                            <option value="Copy Writing" label="Copy Writing" />
                                            <option value="Video & Photo Editing" label="Video & Photo Editing" />
                                            <option value="Data Analysis" label="Data Analysis" />
                                            <option value="Graphics" label="Graphics"/>
                                        </Select>
                                        <ErrorMessage name="course" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                    {/* Course ID (Auto Generated)
                                    <div>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor="nin">Course ID *</Label>
                                        <TextInput type="number" inputMode="numeric" name="nin" id="nin" className="rounded-md mt-1 mb-2" value={values.courseId}  onBlur={handleBlur} onChange={handleChange} disabled />
                                    </div> */}
                                </div>
                                    <Button className='mt-2 ml-4' type='submit'>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>}
           <Button className="fixed" style={{left: '90%', top: '80%'}} onClick={() => setToggleModal(true)}><MdAdd/></Button>
        </div>
    );
}
 
export default Home;