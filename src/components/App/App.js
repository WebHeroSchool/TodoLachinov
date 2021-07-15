import React from 'react';
import ItemList from '../itemList/itemList';
import InputItem from '../InputItem/inputItem';
import Footer from '../Footer/footer';

const todoItem = 'Make the App';
const counter = 3;

const App = () => (<div> 
  <h1>Important actions:</h1>
  <InputItem />
  <ItemList todoItem = {todoItem}/>
  <Footer counter = {counter} />
</div>);

export default App;
