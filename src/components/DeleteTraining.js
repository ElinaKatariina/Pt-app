  import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteTraining = (t) => {

    const link = 'https://customerrest.herokuapp.com/api/trainings/' + t.id
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const delTraining = () => {
        t.deleteTraining(link);
        handleClose();
    };


    return(
        <div>
        <Button size="small" variant="outlined" color="secondary" onClick={handleClickOpen}>Delete</Button>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{"Sure you want to delete this training?"}</DialogTitle>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={delTraining} color="secondary" autoFocus>
                Delete
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );


}

export default DeleteTraining;