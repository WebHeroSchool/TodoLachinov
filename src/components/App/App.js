import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const counter = 3;

const App = () => {
  const items = [
    {
      value: 'Make the app',
      isDone: true,
    },
    {
      value: 'Check it',
      isDone: false,
    },
    {
      value: 'Make pull request',
      isDone: false,
    }
  ];

  return (<div className = {styles.wrap}> 
    <h1 className = {styles.title} >Important actions:</h1>
    <InputItem />
    <ItemList items = {items} />
    <Footer counter = {counter} />
  </div>);
}

export default App;
