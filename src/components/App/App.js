import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';


const todoItem = 'Make the App';
const counter = 3;

const App = () => {
  const items = [
    {
      value: 'Make the app',
    },
    {
      value: 'Check it',
    },
    {
      value: 'Make pull request',
    }
  ];

  return (<div className = "wrap"> 
    <h1 className = "wrap__title">Important actions:</h1>
    <InputItem />
    <ItemList items = {items} />
    <Footer counter = {counter} />
  </div>);
}

export default App;
