import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import moment from 'moment';
 
const Trainings = () => {

    const [training, setTraining] = useState([]);

    useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then((response) => response.json())
        .then((responseData) => {
            setTraining(responseData.content);
        })
    };

    const columns = [
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => moment(row.value).format('dddd, DD/MM/YY, hh:mm a')
        },
        {
            Header: '',
            accessor: 'date',
            Cell: row => moment(row.value).endOf('day').fromNow()
        }
        //treenin poisto tähän
    ]

   
        return(
            <div>
                <ReactTable data={training} columns={columns} filterable={true} sortable={true} />
            </div>
            //treenin lisäys reacttable ennen/jälkeen
        );
    }

export default Trainings;