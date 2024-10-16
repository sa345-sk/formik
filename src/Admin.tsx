import { Table } from "flowbite-react";
import {TuserInitialValues} from './Validation'
const Admin = (prop) => {
    return (
        <div>
            <div className="text-2xl text-gray-700 text-center m-1 p-2">Welcome to SkillUP.<br/> You can add any candidate you wish to train.</div>
            <div className="overflow-x-auto">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell className="text-white">Course Id</Table.HeadCell>
                        <Table.HeadCell className="text-white">First Name</Table.HeadCell>
                        <Table.HeadCell className="text-white">Last Name</Table.HeadCell>
                        <Table.HeadCell className="text-white">Email</Table.HeadCell>
                        <Table.HeadCell className="text-white">Phone Number</Table.HeadCell>
                        <Table.HeadCell className="text-white">State</Table.HeadCell>
                        <Table.HeadCell className="text-white">LGA</Table.HeadCell>
                        <Table.HeadCell className="text-white">Course</Table.HeadCell>
                        <Table.HeadCell className="text-white">NIN Number</Table.HeadCell>
                        <Table.HeadCell className="text-white">Gender</Table.HeadCell>
                        <Table.HeadCell className="text-white">Marital Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {prop.data && prop.data.map((data:TuserInitialValues) => {
                            return (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data.courseID}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{data.courseID}</Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.phoneNumber}</Table.Cell>
                                    <Table.Cell>{data.state}</Table.Cell>
                                    <Table.Cell>{data.LGA}</Table.Cell>
                                    <Table.Cell>{data.course}</Table.Cell>
                                    <Table.Cell>{data.nin}</Table.Cell>
                                    <Table.Cell>{data.gender}</Table.Cell>
                                    <Table.Cell>{data.maritalStatus}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}
 
export default Admin;