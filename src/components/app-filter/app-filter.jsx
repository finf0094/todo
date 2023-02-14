import './app-filter.css'

const AppFilter = (props) => {
    const buttons = [
        {name: 'all', label: 'Барлық қызметкерлер'},
        {name: 'rise', label: 'жоғарылатылатын қызметкерлер'},
        {name: 'moreThen1000', label: 'Жалақы 100.000тг жогары'},
    ]
    
    const button = buttons.map(({name, label}) =>  {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {label}
        </button>
    })
    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

export default AppFilter;