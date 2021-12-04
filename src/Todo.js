import React from "react";
import { List,ListItem,ListItemText,ListItemAvatar,Avatar,Button } from "@mui/material";
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EditIcon from '@mui/icons-material/Edit';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import './Todo.css';
import {updateTodo,deleteTodo,doneTodo} from './util.js'

import FormDialog from './FormDialog'

function Todo(props) {
  

  return (
    <Box  sx={{mx: 'auto',bgcolor: 'primary.main', color: '#fff', p: 1,m: 1, borderRadius: 1,textAlign: 'center',}}>
      <FormDialog  id={props.id} text={props.text}/>
      <List >
        <ListItem className="list">
        <ListItemAvatar>
          <Avatar> <AccessAlarmIcon/> </Avatar>
        </ListItemAvatar>  
        <ListItemText  primary={props.text} />
        <div>
            <Button variant="contained" color="secondary" onClick={()=>updateTodo(props.id)}><EditIcon/></Button>
            <Button variant="contained" color="error" onClick={()=>deleteTodo(props.id)}><DeleteIcon/></Button>
            <Button variant="contained" color="success" onClick={()=>doneTodo(props.id)}><DoneOutlineIcon/></Button>
        </div>    
        </ListItem>
      </List>
    </Box>
  );
}

export default Todo;
