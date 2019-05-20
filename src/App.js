import React, { Component } from 'react';
import FormInput from './components/FormInput';
import FilterInput from './components/FilterInput';
import FormItem from './components/FormItem';
import SwitchToggle from './components/SwitchToggle';
import Sort from './components/sort';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayAdd: true,
            filterKeyword: '',
            sortActive: false,
            sortComplete: false
        };
    }

    autoRandomStringGUID() {
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
    }

    autoGenerateRandomGUID() {
        return this.autoRandomStringGUID() + this.autoRandomStringGUID() + '-' + this.autoRandomStringGUID() + this.autoRandomStringGUID()
    } // Tu dong tao id

    componentWillMount = () => {
        if (localStorage && localStorage.getItem('tasks')) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            });
        }
    } // Do du lieu tu LS neu co

    handleAdd = (item) => {
        let { tasks } = this.state;
        if (item.name.length > 0) {
            item.id = this.autoGenerateRandomGUID();
            tasks.push(item);
            this.setState({
                tasks: tasks
            })
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        }
    } //Nhan du lieu tu FormInpuy va push vao mang tasks

    handleFilter = (filterKeyword) => {
        this.setState({
            filterKeyword: filterKeyword.toLowerCase()
        });
    } //Phan loc

    findIndex = (id) => {
        let { tasks } = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    } //Tim vi tri trong mang tasks khi truyen id vao

    handleCheckComplete = (item) => {
        let { tasks } = this.state;
        let index = this.findIndex(item.id);
        if (index !== -1) {
            tasks[index].isComplete = !tasks[index].isComplete;
        }
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    } // Thay doi trang thai cua tasks khi click vao status checkbox

    handleDisplayAdd = () => {
        this.setState({
            isDisplayAdd: !this.state.isDisplayAdd
        });
    } //Phan hien thi Add

    handleDelete = (index) => {
        let { tasks } = this.state;
        tasks.splice(index, 1);
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    } //Phan Xoa 1 tasks

    handleImportant = (item) => {
        let { tasks } = this.state;
        let index = this.findIndex(item.id);
        tasks[index].isImportant = !tasks[index].isImportant
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    } //Phan danh dau sao Important

    handleSortAll = () => {
        let { tasks } = this.state;
        this.setState({
            tasks: tasks,
            sortActive: false,
            sortComplete: false
        })
    } //Phan SortAll

    handleSortActive = () => {
        this.setState({
            sortActive: true,
            sortComplete: false
        })
    } // Phan sort theo trang thai Active

    handleSortComplete = () => {
        this.setState({
            sortActive: false,
            sortComplete: true
        })
    } //Phan Sort theo trang thai complete

    render() {
        // So sanh cac dieu kien de render gom phan loc, phan sort va render FormItem
        let { tasks, isDisplayAdd, filterKeyword, sortActive, sortComplete } = this.state;

        if (filterKeyword && isDisplayAdd === false) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(filterKeyword) !== -1;
            });
        }

        if (sortActive && sortComplete === false) {
            tasks = tasks.filter(task => {
                return task.isComplete === false;
            });
        } else if (sortComplete && sortActive === false) {
            tasks = tasks.filter(task => {
                return task.isComplete === true;
            })
        }

        let formItem = tasks.map((item, index) => {
            return <FormItem key={index}
                item={item}
                index={index}
                value={this.state.value}
                handleCheckComplete={this.handleCheckComplete}
                handleDelete={this.handleDelete}
                handleImportant={this.handleImportant} />
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

                            <SwitchToggle handleDisplayAdd={this.handleDisplayAdd} />

                        </div>
                    </div>
                    <section className="form__input">
                        <div className="row">

                            {isDisplayAdd === true ? <FormInput handleAdd={this.handleAdd} /> : <FilterInput handleFilter={this.handleFilter} />}

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

                                        <Sort handleSortAll={this.handleSortAll}
                                            handleSortActive={this.handleSortActive}
                                            handleSortComplete={this.handleSortComplete} />

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

export default App;


