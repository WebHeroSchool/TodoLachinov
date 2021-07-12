import React from 'react';
import ItemList from '../itemList/itemList';
import InputItem from '../InputItem/inputItem';
import Footer from '../Footer/footer';

const App = () => (<div> 
  <h1>Важные дела:</h1>
  <InputItem />
  <ItemList />
  <Footer />
</div>);

export default App;
