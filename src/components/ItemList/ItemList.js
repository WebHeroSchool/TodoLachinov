import React from 'react';
import Item from '../item/item';

const ItemList = () => (<ul>
  <li><Item todoItem = {'Make the app'} /></li>
  <li><Item todoItem = {'Check it'} /></li>
  <li><Item todoItem = {'Make pull request'} /></li>
</ul>);


export default ItemList;
