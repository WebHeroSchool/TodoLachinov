import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Todo extends React.Component {

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

    onClickDelete = id => {
        const newItemList = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItemList });
    }


    onClickAdd = value => {
        if ( value !== '') {

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
			this.setState(state => ({
				error: true
			}))

		}
	}


    render() {
        const count = this.state.items.filter(item => item.isDone === false);

        return (
            <div className={styles.wrapper}>
                <Card>
                    <CardContent>
                        <h1 className={styles.title}>Todo list</h1>
                        <InputItem onClickAdd={this.onClickAdd} />
                        <ItemList
                            items={this.state.items}
                            onClickDone={this.onClickDone}
                            onClickDelete={this.onClickDelete}
                        />
                        <Footer count={count.length} />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Todo;