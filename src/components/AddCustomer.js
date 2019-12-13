import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function AddCustomer(c) {

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    })

    const submitCustomer = () => {
        c.addCustomer(customer);
        handleClose();
    }

    const inputChanged = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value});
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      return(
          <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                  Add new customer
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                >
                    <DialogTitle style={{ cursor: 'move' }}>
                        New Customer
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <TextField 
                                autoFocus
                                margin="dense"
                                name="firstname"
                                value={customer.firstname}
                                label="First name"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>

                            <TextField 
                                autoFocus
                                margin="dense"
                                name="lastname"
                                value={customer.lastname}
                                label="Last name"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>

                            <TextField 
                                autoFocus
                                margin="dense"
                                name="streetaddress"
                                value={customer.streetaddress}
                                label="Street address"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>

                            <TextField 
                                autoFocus
                                margin="dense"
                                name="postcode"
                                value={customer.postcode}
                                label="Postcode"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>

                            <TextField 
                                autoFocus
                                margin="dense"
                                name="city"
                                value={customer.city}
                                label="City"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>

                            <TextField 
                                autoFocus
                                margin="dense"
                                name="email"
                                value={customer.email}
                                label="E-mail"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>

                            <TextField 
                                autoFocus
                                margin="dense"
                                name="phone"
                                value={customer.phone}
                                label="Phone"
                                onChange={e => inputChanged(e)}
                                fullWidth
                                ></TextField>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={submitCustomer} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
          </div>
      );

}