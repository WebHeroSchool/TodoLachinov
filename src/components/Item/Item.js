import React from 'react';
import classnames from 'classnames';
import DeleteIcons from '../Delete/Delete';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone }) =>
(<div className={styles.part}>
    <input className={styles.click}
        type = 'checkbox'
        checked={isDone}
        onClick={() => (onClickDone (isDone))}
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