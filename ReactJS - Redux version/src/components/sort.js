import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/actions/index';

class Sort extends Component {

    handleSort = (sortType) => {
        this.props.handleSort(sortType);
    }

    render() {
        return (
            <div className="buttons">
                <a onClick={() => this.handleSort('all') } className="all" role="button"><i className="fas fa-list-ul"></i></a>
                <a onClick={() => this.handleSort('active') } className="active" role="button"><i className="far fa-circle"></i></a>
                <a onClick={() => this.handleSort('complete') } className="complete" role="button"><i className="fas fa-check-double"></i></a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSort : (sortType) => {
            dispatch(action.sort(sortType));
        }
    }
};

export default connect(null, mapDispatchToProps)(Sort);