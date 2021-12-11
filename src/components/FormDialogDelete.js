import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete';
import {queryDelete} from './util.js'

function FormDialogDelete() {
  const [open, setOpen] = useState(false);
  const [txtField,settxtField]=useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (txt) => {
    setOpen(false);
    //console.log("handleClose:",txt)
    if(txt.length > 0) 
        queryDelete(txt)
  };

  return (
    <React.Fragment>
      <Button  variant="contained" color="secondary"  onClick={handleClickOpen}><DeleteIcon/>query-delete</Button>

      <Dialog open={open} onClose={()=>handleClose('')}>
        <DialogTitle>Az összes találat törlése</DialogTitle>
        <DialogContent>
          <TextField  autoFocus margin="dense" fullWidth  variant="standard" onChange={(e)=>settxtField(e.target.value)} value={txtField}         />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose('')}>Cancel</Button>
          <Button onClick={()=>handleClose(txtField)}>delete</Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}

export default FormDialogDelete