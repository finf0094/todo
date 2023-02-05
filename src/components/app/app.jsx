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
                {name: "Askhat", salary: 800, increase: false, id: 1},
                {name: "Gulzhahan", salary: 109000, increase: true, id: 2},
                {name: "Kulush", salary: 2000, increase: false, id: 3},
                {name: "Serikova", salary: 2000, increase: false, id: 4},
            ]
        }
    }


    render() {
        return (
            <div className="app">
                
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={this.state.data}
                               onDelete={id => console.log(id)}/>
                <EmployeesAddForm/>
    
            </div>
        )
    }
}

export default App;