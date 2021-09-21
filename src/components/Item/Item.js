import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './Item.module.css';
import PropTypes from 'prop-types';


class Item extends React.Component {
    render() {
        const { value, isDone, onClickDone, onClickDelete, id } = this.props;

        return (<div className={styles.part}>
            <Checkbox
                checked={isDone}
                tabIndex={-1}
                onClick={() => onClickDone(id)}
            />
            <span className={
                classnames({
                    [styles.item]: true,
                    [styles.done]: isDone
                })
            }>{value}</span>
            <div>
                <IconButton aria-label="delete" onClick={() => onClickDelete(id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>);
    }
}

Item.defaultProps = {
    value: "No name",
    isDone: true
};

Item.propTypes = {
    value: PropTypes.string.isRequired
};

export default Item;