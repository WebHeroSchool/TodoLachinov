import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import PropTypes from 'prop-types';


const App = () => {
  const initialState = {
    error: false,
    items: [
      {
        value: 'Make the app',
        isDone: true,
        id: 1
      },
      {
        value: 'Check it',
        isDone: false,
        id: 2
      },
      {
        value: 'Make pull request',
        isDone: false,
        id: 3
      }
    ],
    count: 3
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => { console.log('componentDidMount') }, []);
  useEffect(() => { console.log('componentDidUpdate') });

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    })

    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
  }


  const onClickAdd = value => {
    const newItemList = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItemList);
    setCount(count => count + 1);
  }

  const casesCount = items.filter(item => item.isDone === false);
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title} >Important actions:</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer casesCount={casesCount.length} />
    </div>);
}

App.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
};

export default App;
