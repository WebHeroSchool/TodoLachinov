import React, { useEffect, useState } from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Button from '@material-ui/core/Button';
import styles from './ToDo.module.css';
import classnames from 'classnames';
import errorImg from './img/error.svg';

const ToDo = () => {
  const initialState = {
    Items: [
    ],
    filter: 'all',
    filteredItems: [],
    count: 0,
    countActive: 0,
    countDone: 0,
    lastID: 0,
    selectedId: -1
  };

  const [Items, setItems] = useState(initialState.Items);
  const [filteredItems, setFilteredItems] = useState(initialState.filteredItems);
  const [filter, setFilter] = useState(initialState.filter);
  const [count, setCount] = useState(initialState.count);
  const [lastID, setLastId] = useState(initialState.lastID);
  const [countActive, setCountActive] = useState(initialState.countActive);
  const [countDone, setCountDone] = useState(initialState.countDone);
  const [selectedId, setSelectedId] = useState(initialState.selectedId);

  useEffect(() => {
    setFilteredItems(Items);
  }, []);

  useEffect(() => {
    onClickFilter(filter);

  }, [Items]);

  useEffect(() => {
    onClickSelected(-1);
  }, [filter]);

  const onClickDone = id => {
    const newItemList = Items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    const newCountDone = newItemList.filter(item => item.isDone);
    const newCountActive = newItemList.filter(item => !item.isDone);

    setItems(newItemList);
    setCountDone(newCountDone.length);
    setCountActive(newCountActive.length)
  };

  const onClickDelete = id => {
    const newItemList = Items.filter(item => item.id !== id);
    const newCountDone = newItemList.filter(item => item.isDone);
    const newCountActive = newItemList.filter(item => !item.isDone);

    setItems(newItemList);
    setCount((count) => count - 1);
    setCountDone(newCountDone.length);
    setCountActive(newCountActive.length);
  };

  const onClickSelected = id => setSelectedId(id);

  const onClickAdd = (value) => {
    const newItemList = [
      ...Items,
      {
        value,
        isDone: false,
        id: lastID + 1
      }
    ];

    setItems(newItemList);
    setCount((count) => count + 1);
    setLastId((lastID) => lastID +1);
    setCountActive((countActive) => countActive + 1);
  };

  const onClickFilter = filter => {
    let  newItemList = [];
    switch (filter) {
      case 'all':
        newItemList = Items;
        break;
      case 'active':
        newItemList = Items.filter (item => !item.isDone);
        break;
      case 'finished':
        newItemList = Items.filter (item => item.isDone);
        break;
      default:
        newItemList = Items;
    }

    setFilteredItems(newItemList);
    setFilter(filter);
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Important things:</h1>
      <div className={styles.wrapList}>

        <InputItem onClickAdd={onClickAdd} Items={Items} className={styles.inputItem}/>

        {Items.length > 0 ?
        <ItemList
          Items={filteredItems}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          onClickSelected={onClickSelected}
          selectedId={selectedId}
          className={styles.itemList}
        /> :

        <div className={styles.TodoErrorWrap}>
          <img src={errorImg} alt='error loading' className={styles.TodoErrorImg}></img>
            <h2 className={styles.TodoErrorTitle}>You haven't added any task</h2>
            <p className={styles.TodoErrorText}>Do it</p>
        </div>}

      </div>

      <div className={styles.wrapFooter}>
        <div className={styles.wrapFilter}>
          <Button className={classnames({ [styles.todoCount]: true, [styles.todoCountActive]: filter === 'all' })} onClick={() => onClickFilter('all')} >
            All
            <span className={classnames({ [styles.todoCountNumber]: true, [styles.todoCountNumberActive]: filter === 'all' })}>&nbsp; {count}</span>
          </Button>
          <Button className={classnames({ [styles.todoCount]: true, [styles.todoCountActive]: filter === 'active' })} onClick={() => onClickFilter('active')}>
            Active
            <span className={classnames({ [styles.todoCountNumber]: true, [styles.todoCountNumberActive]: filter === 'active' })}>&nbsp; {countActive}</span>
          </Button>
          <Button className={classnames({ [styles.todoCount]: true, [styles.todoCountActive]: filter === 'finished' })} onClick={() => onClickFilter('finished')}>
            Done
            <span className={classnames({ [styles.todoCountNumber]: true, [styles.todoCountNumberActive]: filter === 'finished' })}>&nbsp; {countDone}</span>
          </Button>
        </div>
      </div>

    </div>);
};

export default ToDo;
