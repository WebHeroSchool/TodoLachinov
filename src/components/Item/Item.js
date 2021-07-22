import React from 'react';
import classnames from 'classnames';
import Checkboxs from '../Checkbox/Checkbox';
import DeleteIcons from '../Delete/Delete';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => 
    (<div className={styles.part}>
        <Checkboxs />
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