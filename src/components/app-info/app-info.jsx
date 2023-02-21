import './app-info.scss';

const AppInfo = ({employees, increasedemployees, totalAllEmployesSalary}) => {
    
    return (
        <div className="app-info">
            <h1>Қызметкерлерді есепке алу</h1>
            <h2>Қызметкерлердің жалпы саны: {employees}</h2>
            <h2>Сыйлық алынады: {increasedemployees}</h2>
            <h2>Общий беретин акша: {}</h2>
        </div>
    )
}

export default AppInfo;