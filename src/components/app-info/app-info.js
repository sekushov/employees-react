import './app-info.css';
import ResetBtn from '../reset-btn/reset-btn';


const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
            <ResetBtn/>
        </div>
    );
}

export default AppInfo;