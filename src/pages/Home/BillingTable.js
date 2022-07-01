import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const BillingTable = ({ handleShow, setId, deleteModalShow }) => {
    const [billings, setBillings] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/api/billing-list')
            setBillings(data.data)
        })()
    }, [billings])

    const handleEdit = id => {
        setId(id);
        handleShow()
    }
    const handleDelete = id => {
        setId(id);
        deleteModalShow()
    }

    return (
        <section className='container rounded'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Billing ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        billings.map((billing, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{billing.fullName}</td>
                                <td>{billing.email}</td>
                                <td>{billing.phone}</td>
                                <td>{billing.amount}</td>
                                <td>
                                    <Button variant="link" onClick={() => handleEdit(billing._id)}>Edit</Button>
                                    |
                                    <Button variant="link" onClick={() => handleDelete(billing._id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </section>
    );
};

export default BillingTable;