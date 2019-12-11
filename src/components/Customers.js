import React, { useState, useEffect } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

const CustomerList = () => {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then((response) => response.json())
        .then((responseData) => {
             setCustomer(responseData.content);
        })
    }

    const columns = [
        {
            Header: 'Lastname',
            accessor: 'firstname'
        },
        {
            Header: 'Firstname',
            accessor: 'firstname'
        }
    ];

    return (
        <div>
            <ReactTable data={customer} columns={columns} filterable={true} sortable={true}/>
        </div>
    );

};


export default CustomerList;