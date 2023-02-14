import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employers-list.css'


const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise, onToggleModal}) => {

    const elements = data.map((item) => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem  
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
                onToggleModal={() => onToggleModal(id)}/>
        )
    });
    


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;