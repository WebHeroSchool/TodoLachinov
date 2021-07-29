import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import PropTypes from 'prop-types';


class App extends React.Component {
  state = {
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

  componentDidMount() {
    console.log('ComponentDidMount');
  };

  componentDidUpdate() {
    console.log('ComponentDidUpdate');
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    })

    this.setState({ items: newItemList });
  };

  onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id) }));


  onClickAdd = value => {
    if (value !== '') {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
        ],
        count: state.count + 1,
        error: false
      }));
    } else {
      this.setState(state => ({ error: true }))
    }
  }

  componentWillUnmount () {
    console.log ('componentWillUnmount');
  };

  render() {
    const casesCount = this.state.items.filter(item => item.isDone === false);
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title} >Important actions:</h1>
        <InputItem onClickAdd={this.onClickAdd} error={this.state.error}/>
        <ItemList
          items={this.state.items}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer casesCount={casesCount.length} />
      </div>);
  }
}

App.propTypes = {
  value: PropTypes.oneOfType ([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
  ])
};

export default App;
