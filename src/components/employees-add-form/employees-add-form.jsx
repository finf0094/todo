import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ''
        }
    }
    
    onNameValueChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onSalaryValueChange = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        onChange={this.onNameValueChange}
                        value={name} />
                        
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        onChange={this.onSalaryValueChange}
                        value={salary} />
                        

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;