import React from 'react';
import {
    Link
  } from "react-router-dom";
import { Button } from '@material-ui/core';
  
  const Navigator = () => {
      return (
          <div>
              
              <br/>
              <Button variant="outlined" color="primary"><Link to="/customers">Customers</Link></Button>
              <Button variant="outlined" color="primary"><Link to="/trainings">Trainings</Link></Button>
              <Button variant="outlined" color="primary"><Link to="/calendar">Calendar</Link></Button>

          </div>
      );
  };
  export default Navigator;