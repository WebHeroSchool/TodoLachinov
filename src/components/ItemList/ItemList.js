import React from 'react';
import Item from '../Item/Item';
import Checkboxs from '../Checkbox/Checkbox';
import DeleteIcons from '../Delete/Delete';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<ul>
  {items.map(item => <li key={item.value}>
    <Item value={item.value} isDone={item.isDone} />
    </li>)}
</ul>);


export default ItemList;
