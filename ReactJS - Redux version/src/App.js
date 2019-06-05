import React, { Component } from 'react';
import FormInput from './components/FormInput';
import FilterInput from './components/FilterInput';
import FormItem from './components/FormItem';
import SwitchToggle from './components/SwitchToggle';
import Sort from './components/sort';
import { connect } from 'react-redux';


class App extends Component {

    render() {

        let { tasks, isDisplayAdd, keyword, sort } = this.props;

        if (keyword && isDisplayAdd === false) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

        if (sort === 'active') {
            tasks = tasks.filter(task => {
                return task.isComplete === false;
            });
        } else if (sort === 'complete') {
            tasks = tasks.filter(task => {
                return task.isComplete === true;
            })
        }

        let formItem = tasks.map((item, index) => {
            return <FormItem key={index} item={item} index={index} />
        });

        return (
            <div className="container-fluid bg__db">
                <ul className="social">
                    <li><a href="https://www.facebook.com/anluu9292" target="blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://github.com/luuan9292" target="blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCeb6YeWePLuUWc2j82ZiMmQ" target="blank"><i className="fab fa-youtube"></i></a></li>
                </ul>
                <div className="container">
                    <header className="header">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>TodoDB</h1>
                                <iframe title="dragonball" src="DragonBall.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
                            </div>
                        </div>
                    </header>
                    <div className="row">
                        <div className="col-md-6">

                            <SwitchToggle />

                        </div>
                    </div>
                    <section className="form__input">
                        <div className="row">

                            {isDisplayAdd === true ? <FormInput /> : <FilterInput />}

                        </div>
                    </section>
                    <section className="form__list">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <tbody>


                                                {formItem}

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="card-footer">

                                        <Sort />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.tasks,
        isDisplayAdd : state.isDisplayAdd,
        keyword : state.filter,
        sort : state.sort
    }
}

export default connect(mapStateToProps, null)(App);


