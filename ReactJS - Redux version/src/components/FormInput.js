import React, { Component } from 'react';
import * as action from '../redux/actions/index';
import { connect } from 'react-redux';

class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            isComplete : false,
            isImportant : false
        };
    }

    handleChangeInput = (event) => {
        this.setState({
            [ event.target.name ] : event.target.value
        });
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleAddForm(this.state);
        this.setState({
            name : ""
        })
    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={ this.handleSubmitForm }>
                    <div className="form-group">
                        <input type="text" name='name' value={ this.state.name } onChange={ this.handleChangeInput } className="form-control" placeholder="What need to be done ?" />
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddForm : (task) => {
            dispatch(action.addTask(task))
        }
    }
};

export default connect(null, mapDispatchToProps)(FormInput);