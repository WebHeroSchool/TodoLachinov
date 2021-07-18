import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField
        id="standard-helperText"
        label="Add task"
        defaultValue="Default Value"
        helperText="New tasks"
    />
</div>);

export default InputItem;