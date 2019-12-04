import React from 'react';

class Customerlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = { customer: []};
    }

    //haetaan asiakas tiedot json
    fetchCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ customer: responseData.content});
        })
    }

    render(){
        const customerResult = this.state.customer.map((customer) =>
        <tr key={customer.id}>
            <td>{customer.firstname}{customer.lastname}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
        </tr>
        );
        return(
            <div>
                <table>
                    <tbody>
                        {customerResult}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default Customerlist;