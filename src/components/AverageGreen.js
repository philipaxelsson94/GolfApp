import './AverageGreen.css';
import {FaTimes} from 'react-icons/fa'
const AverageGreen = ({avGreens}) => {
    return(
        <div id="averageGreenbox" className="ui statistic">
            <div className="value">
                <h1>{avGreens}</h1>
            </div>
            <div className="label">
                Greenträffar/runda
            </div>
        </div>

    )
}

export default AverageGreen