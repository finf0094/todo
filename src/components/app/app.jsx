import { Component } from 'react';

import './app.scss'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import Modal from '../Modal-info/ModalInfo';



class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {name: "Askhat Kulush", salary: 100000, increase: false, rise: false, id: 1, showModal: false, IIN: '041216550688', age: 18, photo: 'https://sun9-67.userapi.com/s/v1/ig2/5gYk603o-YUQap58JjM35qkeY4Ag8ygiU1gk_MoyZNsnJTvyvuZjozu-a__ICh8_KaTSK51Re594HsYnKFvYFwUf.jpg?size=200x200&quality=96&crop=4,4,973,973&ava=1'},
                {name: "Bekzat Muratov", salary: 109000, increase: true, rise: true, id: 2, showModal: false, IIN: '041212443344', age: 18, photo: 'https://arthive.net/res/media/img/oy800/article/158/630592@2x.jpg'},
                {name: "Erbolat Muftiev", salary: 99000, increase: false, rise: false, id: 3, showModal: false, IIN: '050423045555', age: 17, photo: 'https://i.pinimg.com/originals/c5/99/52/c59952b2e446653f83205044b6beba57.jpg'},
                {name: "Damir Telagisov", salary: 22000, increase: false, rise: false, id: 4, showModal: false, IIN: '051233431234', age: 17, photo: 'https://i.pinimg.com/736x/88/76/48/887648dfc7ae3662f80771d5934090fd.jpg'},
                {name: "Askhat Kulush", salary: 100000, increase: false, rise: false, id: 5, showModal: false, IIN: '041216550688', age: 18, photo: 'https://sun9-67.userapi.com/s/v1/ig2/5gYk603o-YUQap58JjM35qkeY4Ag8ygiU1gk_MoyZNsnJTvyvuZjozu-a__ICh8_KaTSK51Re594HsYnKFvYFwUf.jpg?size=200x200&quality=96&crop=4,4,973,973&ava=1'},
                {name: "Bekzat Muratov", salary: 109000, increase: true, rise: true, id: 6, showModal: false, IIN: '041212443344', age: 18, photo: 'https://arthive.net/res/media/img/oy800/article/158/630592@2x.jpg'},
                {name: "Erbolat Muftiev", salary: 99000, increase: false, rise: false, id: 7, showModal: false, IIN: '050423045555', age: 17, photo: 'https://i.pinimg.com/originals/c5/99/52/c59952b2e446653f83205044b6beba57.jpg'},
                {name: "Damir Telagisov", salary: 22000, increase: false, rise: false, id: 8, showModal: false, IIN: '051233431234', age: 17, photo: 'https://i.pinimg.com/736x/88/76/48/887648dfc7ae3662f80771d5934090fd.jpg'},
                {name: "Askhat Kulush", salary: 100000, increase: false, rise: false, id: 9, showModal: false, IIN: '041216550688', age: 18, photo: 'https://sun9-67.userapi.com/s/v1/ig2/5gYk603o-YUQap58JjM35qkeY4Ag8ygiU1gk_MoyZNsnJTvyvuZjozu-a__ICh8_KaTSK51Re594HsYnKFvYFwUf.jpg?size=200x200&quality=96&crop=4,4,973,973&ava=1'},
                {name: "Bekzat Muratov", salary: 109000, increase: true, rise: true, id: 10, showModal: false, IIN: '041212443344', age: 18, photo: 'https://arthive.net/res/media/img/oy800/article/158/630592@2x.jpg'},
            ],
            term: '',
            filter: 'all',
            x: false
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            const select = this.state.x ? item.name : item.IIN
            return select.indexOf(term) > -1;
        })
    }

    SearchIIN = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.IIN.indexOf(term) > -1;
        })
    }
    

    onUpdateSearch = (term) => {
        this.setState({term: term})
    } 

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.salary >= 100000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    onToggleModal = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, showModal: !item.showModal}
                }
                return item
            })
        }))
    }
    

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increasedemployees = this.state.data.filter(item => item.increase).length;

        const visibleDataName = this.filterPost(this.searchEmp(data, term), filter);

        const totalAllEmployesSalary = data.map(item => {
            const {salary} = item
            let total = 0
            total = Number(total) + Number(salary)
            return +total
        })

        return (
            <div className="app">
                
                <AppInfo
                employees={employees}
                increasedemployees={increasedemployees}
                totalAllEmployesSalary={totalAllEmployesSalary}/>


                <div className="search-panel">
                    <div className='search-select' style={{display: "flex"}}>
                        {this.state.x ? <h2>Найти по имени</h2> : <h2>Найти по ИИН</h2>}
                        <input type="checkbox" onChange={() => this.setState({x: !this.state.x})} value={this.state.x}
                            style={{padding: 10, backgroundColor: "white"}} 
                            />
                    </div>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>

                    <AppFilter filter={filter}
                               onFilterSelect={this.onFilterSelect}/>
                </div>
                
                <EmployeesList data={visibleDataName}
                               onDelete={this.deleteItem}
                               onToggleIncrease={this.onToggleIncrease}
                               onToggleRise={this.onToggleRise}
                               onToggleModal={this.onToggleModal}/>
                <Modal data={data}
                       onToggleModal={this.onToggleModal}
                       className="modal"/>

                <EmployeesAddForm
                    onAdd={this.addItem}/>
    
            </div>
        )
    }
}

export default App;