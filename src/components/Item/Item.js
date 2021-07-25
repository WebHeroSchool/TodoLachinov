import React from 'react';
import classnames from 'classnames';
import DeleteIcons from '../Delete/Delete';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id }) =>
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
    <DeleteIcons />
</div>)

export default Item;
