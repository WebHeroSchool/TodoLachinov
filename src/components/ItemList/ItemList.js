import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
  {items.map(item =>
    <li className={styles.itemList} key={item.id}>
      <Item
        value={item.value}
        isDone={item.isDone}
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
    </li>)}
</ul>);

ItemList.defaultProps = {
  value: "No name",
  id: 0
};

export default ItemList;
