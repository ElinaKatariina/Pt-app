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
        .then(response => response.json())
        .then(responseData => 
             setCustomer(responseData.content))
    }

    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(customer)})
        .then(response => fetchCustomers())
    }

    const columns = [
        {
            Header: 'Lastname',
            accessor: 'firstname'
        },
        {
            Header: 'Firstname',
            accessor: 'firstname'
        }, 
        {
            Header: 'E-mail',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        }

        // treeninlisäys, asiakkaan muokkaus ja poisto tähän
    ];

    return (
        <div>
            <ReactTable data={customer} columns={columns} filterable={true} sortable={true}/>
        </div>
        //asiakkaan lisäys reacttable perään/eteen
    );

};


export default CustomerList;