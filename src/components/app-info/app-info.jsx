import './app-info.css';

const AppInfo = ({employees, increasedemployees}) => {
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компаний Front</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increasedemployees}</h2>
        </div>
    )
}

export default AppInfo;