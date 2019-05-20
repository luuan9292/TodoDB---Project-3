import React, { Component } from 'react';

class Sort extends Component {

    handleSortAll = () => {
        this.props.handleSortAll();
    }

    handleSortActive = () => {
        this.props.handleSortActive();

    }

    handleSortComplete = () => {
        this.props.handleSortComplete();
    }

    render() {
        return (
            <div className="buttons">
                <a onClick={ this.handleSortAll } className="all" href="#"><i className="fas fa-list-ul"></i></a>
                <a onClick={ this.handleSortActive } className="active" href="#"><i className="far fa-circle"></i></a>
                <a onClick={ this.handleSortComplete } className="complete" href="#"><i className="fas fa-check-double"></i></a>
            </div>
        );
    }
}

export default Sort;