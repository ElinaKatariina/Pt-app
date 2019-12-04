import React from 'react';
import { Component } from "react";
import Customerlist from "../components/Customers";

export default class ViewCustomers extends Component {

    render() {
        return(
            <div>
                <Customerlist />
            </div>
        );
    }

}