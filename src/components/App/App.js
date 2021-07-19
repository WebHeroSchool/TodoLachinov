import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';


const todoItem = 'Make the App';
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

  return (<div> 
    <h1>Important actions:</h1>
    <InputItem />
    <ItemList items = {items}/>
    <Footer counter = {counter} />
  </div>);
}


export default App;
