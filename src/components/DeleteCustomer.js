import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';



const DeleteCustomer = (c) => {

const [open, setOpen] = useState(false);


const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const delCustomer = () => {
    c.deleteCustomer(c.link);
    handleClose();
}

return(
    <div>
        <Button size="small" variant="outlined" color="secondary" onClick={handleClickOpen}>Delete</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle >{"Sure you want to delete this customer?"}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={delCustomer} color="secondary">Delete</Button>
            </DialogActions>
        </Dialog>
    </div>
)

};


export default DeleteCustomer;