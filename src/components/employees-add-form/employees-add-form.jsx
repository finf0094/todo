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

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Жаңа қызметкерді қосыңыз</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Оның аты кім?"
                        name="name"
                        onChange={this.onNameValueChange}
                        value={name} />
                        
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Жалақы ?-тг"
                        name="salary"
                        onChange={this.onSalaryValueChange}
                        value={salary} />
                        

                    <button type="submit"
                        className="btn btn-outline-light"
                        disabled={name === '' || salary === '' ? true : false}>қосу</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;