import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        this.setState({
            inputValue: ''
        })

        this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }

    render() {
        const { onClickAdd } = this.props;
        const isError = this.props.error;
        let textField;

        if (isError) {
            textField = <TextField
                error
                id='outlined-error'
                label='Add something!'
                margin='dense'
                variant='outlined'
                className={styles.field}
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
        } else {
            textField = <TextField
                id='outlined-dense'
                label='Add new task'
                margin='dense'
                variant='outlined'
                className={styles.field}
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
        }

        return (
            <div className={styles.input}>
                <div className={styles.field}>
                    {textField}
                </div >
                <div className={styles.button}> 
                    <Button
                    variant='contained'
                    color='primary'
                    className={styles.frame}
                    onClick={this.onButtonClick}
                >
                    <div>Add</div>
                </Button>
                </div>
            </div>
        );
    }
};

InputItem.propTypes = {
    value: PropTypes.oneOfType ([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
};


export default InputItem; 

