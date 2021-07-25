import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, onClickDelete, id }) =>
(<div className={styles.part}>
    <input className={styles.click}
        type = 'checkbox'
        checked={isDone}
        onChange={() => onClickDone(id)}
    />

    <span className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone,
        })
    }>
        {value}
    </span>
    <div> 
      <IconButton aria-label="delete" onClick={() => onClickDelete(id)}>
      <DeleteIcon />
      </IconButton>
    </div>
</div>)

export default Item;