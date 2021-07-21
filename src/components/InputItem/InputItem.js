import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

  
  
const InputItem = () => (<div className = {styles.input}>
    <TextField
        id="standard-helperText"
        label="Add task"
        defaultValue=""
        helperText="New tasks"
    />
</div>);

export default InputItem;