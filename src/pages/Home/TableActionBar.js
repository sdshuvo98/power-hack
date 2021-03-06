import React from 'react';
import Button from 'react-bootstrap/Button';

const TableActionBar = ({ handleShow, setSearchedText }) => {

    const getInput = e => {
        setSearchedText(e.target.value)
    }

    return (
        <section className='d-flex justify-content-between px-5 py-2 my-3 bg-light container rounded'>
            <article className='d-flex align-items-center gap-3'>
                <h6>Billings</h6>
                <input
                    type="text"
                    onChange={getInput}
                    placeholder='Search'
                    className='p-1 rounded'
                />
            </article>
            <article>
                <Button variant="primary" onClick={handleShow}>
                    Add New Bill
                </Button>
            </article>
        </section>
    );
};

export default TableActionBar;