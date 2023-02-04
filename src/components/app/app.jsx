import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';



function App() {
    const data = [
        {name: "Askhat", salary: 800, increase: false},
        {name: "Gulzhahan", salary: 109000, increase: true},
        {name: "Kulush", salary: 2000, increase: false},
    ]

    return (
        <div className="app">

            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App;