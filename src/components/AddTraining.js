import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


export default function AddTraining(t) {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        activity: '',
        date: new Date(),
        duration: ''
    });

    const inputChanged = (e) => {
        setTraining({ ...training, [e.target.name]: e.target.value});
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    
      
    const handleClose = () => {
        setOpen(false);
    };

    const newTraining = () => {
		t.addTraining(training);
		handleClose();

    };


    return(
        <div>
            <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>ADD</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                <TextField
						margin="normal"
						variant="outlined"
						style={{ marginBottom: 15 }}
						label="Date"
						onChange={(e) => inputChanged(e)}
						name="date"
						type="datetime-local"
						value={training.date}
					/>

                    <TextField
                        id="outlined-basic"
						margin="normal"
						variant="outlined"
						style={{ marginBottom: 15 }}
						label="Duration"
						onChange={(e) => inputChanged(e)}
						name="duration"
						value={training.duration}
                    >
                    </TextField>


                    <TextField
						id="outlined-basic"
						margin="normal"
						variant="outlined"
						style={{ marginBottom: 15 }}
						label="Activity"
						onChange={(e) => inputChanged(e)}
						name="activity"
						value={training.activity}
					>
                    </TextField>

                </DialogContent>
                <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button autofocus onClick={newTraining} color="primary">
                            Add
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
        
    );

}