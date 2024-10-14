import { Table } from "flowbite-react";
const Admin = () => {
    return (
        <div>
            <div className="text-2xl text-gray-700 text-center m-1 p-2">Welcome to the SkillUP.<br/> You can add any candidate you wish to train.</div>
            <div className="overflow-x-auto w-w-90 m-ma">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell className="text-white">CourseId</Table.HeadCell>
                        <Table.HeadCell className="text-white">First Name</Table.HeadCell>
                        <Table.HeadCell className="text-white">Last Name</Table.HeadCell>
                        <Table.HeadCell className="text-white">Email</Table.HeadCell>
                        <Table.HeadCell className="text-white">Phone Number</Table.HeadCell>
                        <Table.HeadCell className="text-white">DOB</Table.HeadCell>
                        <Table.HeadCell className="text-white">State</Table.HeadCell>
                        <Table.HeadCell className="text-white">LGA</Table.HeadCell>
                        <Table.HeadCell className="text-white">Course</Table.HeadCell>
                        <Table.HeadCell className="text-white">NIN Number</Table.HeadCell>
                        <Table.HeadCell className="text-white">Gender</Table.HeadCell>
                        <Table.HeadCell className="text-white">Marital Status</Table.HeadCell>
                        <Table.HeadCell className="text-white">Action</Table.HeadCell>
                    </Table.Head>
                    {/* <Table.Body className="divide-y">
                        {inventories && inventories.map((inventory) => {
                            return (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={inventory.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                                    <Table.Cell>{inventory.item}</Table.Cell>
                                    <Table.Cell>N{inventory.price}</Table.Cell>
                                    <Table.Cell>{inventory.quantity}</Table.Cell>
                                    <Table.Cell>N{inventory.amount}</Table.Cell>
                                    <Table.Cell onClick={() => deleteItem(inventory.id)}><Button>Delete</Button></Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body> */}
                </Table>
            </div>
        </div>
    );
}
 
export default Admin;