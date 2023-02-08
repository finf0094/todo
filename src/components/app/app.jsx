import { Component } from 'react';

import './app.css'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';



class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {name: "Askhat", salary: 800, increase: false, rise: false, id: 1},
                {name: "Gulzhahan", salary: 109000, increase: true, rise: true, id: 2},
                {name: "Kulush", salary: 2000, increase: false, rise: false, id: 3},
                {name: "Serikova", salary: 2000, increase: false, rise: false, id: 4},
            ],
            term: ''
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


    render() {
        const {data, term} = this.state;
        const employees = this.state.data.length;
        const increasedemployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                
                <AppInfo
                employees={employees}
                increasedemployees={increasedemployees}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleIncrease={this.onToggleIncrease}
                               onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
    
            </div>
        )
    }
}

export default App;