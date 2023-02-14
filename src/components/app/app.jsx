import { Component } from 'react';

import './app.css'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import ModalInfo from '../Modal-info/ModalInfo';



class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {name: "Askhat Kulush", salary: 100000, increase: false, rise: false, id: 1, showModal: false},
                {name: "Bekzat Muratov", salary: 109000, increase: true, rise: true, id: 2, showModal: false},
                {name: "Erbolat Muftiev", salary: 99000, increase: false, rise: false, id: 3, showModal: false},
                {name: "Damir Telagisov", salary: 22000, increase: false, rise: false, id: 4, showModal: false},
            ],
            term: '',
            filter: 'all'
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
            return item.name.indexOf(term) > -1;
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
                return items.filter(item => item.salary > 100000)
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
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                
                <AppInfo
                employees={employees}
                increasedemployees={increasedemployees}/>

                <ModalInfo data={data}
                           onToggleModal={this.onToggleModal}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                               onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleIncrease={this.onToggleIncrease}
                               onToggleRise={this.onToggleRise}
                               onToggleModal={this.onToggleModal}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
    
            </div>
        )
    }
}

export default App;