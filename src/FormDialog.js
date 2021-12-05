import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import EditIcon from '@mui/icons-material/Edit';
import {editTodo} from './util.js'

function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [txtField,settxtField]=useState(props.text)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (txt) => {
    setOpen(false);
    console.log("handleClose:",txt)
    if(txt.length > 0) 
        editTodo(props.id,txt)
  };
console.log('formDialog:',props.text)
  return (
    <div>
      <Button variant="contained" color="secondary"  onClick={handleClickOpen}><EditIcon/></Button>
      <Dialog open={open} onClose={()=>handleClose('')}>
        <DialogTitle>Módosítás</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.text}</DialogContentText>
          <TextField  autoFocus margin="dense" fullWidth  variant="standard" onChange={(e)=>settxtField(e.target.value)} value={txtField}         />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose('')}>Cancel</Button>
          <Button onClick={()=>handleClose(txtField)}>update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog