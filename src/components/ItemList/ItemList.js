import React from 'react';
import Item from '../Item/Item';
import Checkboxs from '../Checkbox/Checkbox';
import DeleteIcons from '../Delete/Delete';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<ul>
  {items.map(item => 
    <li className={styles.itemList} key={item.value}> <Checkboxs /> 
    <Item value={item.value} isDone={item.isDone} />
    <DeleteIcons />
  </li>)}
</ul>);


export default ItemList;
