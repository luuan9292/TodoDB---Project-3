import React, { Component } from 'react';

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
        this.props.handleAdd(this.state);
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

export default FormInput;