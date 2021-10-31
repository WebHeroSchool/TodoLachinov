import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    helperText: ''
  };

  onButtonClick = () => {
    this.setState({inputValue: ''});
    const isHave = items => items.value === this.state.inputValue;

    if (this.state.inputValue === '') {
      this.setState({error: true, helperText: 'Full this area'});
    } else if (this.props.Items.some(isHave)) {
      this.setState({error: true, helperText: 'You already have this kind of task. Choose another one'});
    } else {
      this.props.onClickAdd(this.state.inputValue);
    }
  };

  render() {

    return (
      
      <div className={styles.inputWrap}>
        <TextField
          className={styles.inputValue}
          error={this.state.error}
          helperText={this.state.helperText}
          id='standard-basic'
          variant='outlined'
          label='Add new task'
          margin="dense"
          InputProps={{
            style:{borderRadius: 5}
          }}
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value, error: false, helperText: '' })}
        />

        <Button
          className={styles.inputButton}
          variant="contained"
          onClick={this.onButtonClick}
        >
          add
        </Button>
      </div>
    )
  }
};

export default InputItem;
