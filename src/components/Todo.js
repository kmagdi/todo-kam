import React from "react";
import {ListItem,ListItemText,ListItemAvatar,Avatar,Button } from "@mui/material";
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import './Todo.css';
import {deleteTodo,doneTodo} from './util.js'

import FormDialogUpdate from './FormDialogUpdate'

function Todo(props) {
  
  return (
    <Box  sx={{mx: 'auto',bgcolor: 'primary.main', color: '#fff', p: 1,m: 1, borderRadius: 1,textAlign: 'center',}}>
    
        <ListItem className="list border-bottom">
        <ListItemAvatar>
          <Avatar> <AccessAlarmIcon/> </Avatar>
        </ListItemAvatar>  
        <ListItemText  primary={props.text} className={props.done? 'done' : 'active'}/>

            <Button variant="contained" color="error"  onClick={()=>deleteTodo(props.id)}><DeleteIcon/></Button>
            <Button variant="contained" color="success" onClick={()=>doneTodo(props.id,props.done)}><DoneOutlineIcon/></Button>
            <FormDialogUpdate  id={props.id} text={props.text} done={props.done}/>
    
        </ListItem>

    </Box>
  );
}

export default Todo;
