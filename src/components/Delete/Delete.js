import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

export default function DeleteIcons() {
  const classes = useStyles();

  return (
    <div>
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="small"/>
        </IconButton>
    </div> 
  );
}