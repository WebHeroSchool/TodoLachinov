import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<ul>
  {items.map(item => 
  <li className={styles.itemList} key={item.value}> 
    <Item value={item.value} isDone={item.isDone} onClickDone = {onClickDone} />
  </li>)}
</ul>);


export default ItemList;
