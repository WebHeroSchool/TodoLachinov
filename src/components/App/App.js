import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Make the App';
const counter = 3;

const App = () => (<div> 
  <h1>Important actions:</h1>
  <InputItem />
  <ItemList todoItem = {todoItem}/>
  <Footer counter = {counter} />
</div>);


export default App;
