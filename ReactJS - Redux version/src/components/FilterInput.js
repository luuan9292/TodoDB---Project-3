import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/actions/index';

class FilterInput extends Component {

    handleFilter = (event) => {
        this.props.handelFilter(event.target.value);
    }

    render() {
        return (
            <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" name='filter' defaultValue= "" onChange={ this.handleFilter } className="form-control" placeholder="Enter your keyword" />
                    </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handelFilter :(keyword) => {
            dispatch(action.filter(keyword));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterInput);