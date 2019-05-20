import React, { Component } from 'react';

class FilterInput extends Component {

    handleFilter = (event) => {
        this.props.handleFilter(event.target.value);
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

export default FilterInput;