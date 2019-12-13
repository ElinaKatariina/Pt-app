import React, { useState, useEffect } from 'react';
import AddCustomer from './AddCustomer';
import DeleteCustomer from './DeleteCustomer';
import AddTraining from './AddTraining';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import EditCustomer from './EditCustomer';

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

    const editCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(customer)})
        .then(response => fetchCustomers())
    };
    
    const deleteCustomer = (link) => {
        fetch(link, {
            method: 'DELETE'
        })
        .then(response => fetchCustomers())
    };

    //addtraining to customer
    const addTraining = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "date": customer.date,
                "activity": customer.activity,
                "duration": customer.duration,
                "customer": customer.customer
            })})
        .then(response => fetchCustomers())
    };

    const columns = [
        {
            Header: 'Last name',
            accessor: 'lastname',
            width: 170
        },
        {
            Header: 'First name',
            accessor: 'firstname',
            width: 170
        }, 
        {
            Header: 'E-mail',
            accessor: 'email',
            width: 220
        },
        {
            Header: 'Phone',
            accessor: 'phone',
            width: 200
        },
        {
            Header: 'City',
            accessor: 'city',
            width: 180
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress',
            width: 250
        },
        {
            accessor: 'links.href',
            Cell: row => <AddTraining editCustomer={addTraining} customer={row.original}/>,
            filterable: false,
            sortable: false,
            width: 75
        },
        {
            accessor: 'links.href',
            Cell: row => <EditCustomer editCustomer={editCustomer} customer={row.original}/>,
            filterable: false,
            sortable: false,
            width: 75
        },
        {
            accessor: 'links.href',
            Cell: row => <DeleteCustomer link={row.original.links[0].href} deleteCustomer={deleteCustomer}/>,
            filterable: false,
            sortable: false,
            width: 80
        },

        // treeninlisäys, asiakkaan muokkaus ja poisto tähän
    ];

    return (
        <div>
            <AddCustomer addCustomer={addCustomer} />
            <ReactTable data={customer} columns={columns} filterable={true} sortable={true}/>

        </div>
        //asiakkaan lisäys reacttable perään/eteen
    );

};


export default CustomerList;