import './Score.css';
import {FaTimesCircle} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'
const Score = ({score,deleteRound}) => {


    return(
        <>
        <div className="score">
            <div className="item">
                <h3>{score.newDate}</h3>
            </div>
            <div className="item">
                <h2>{score.putts}</h2>
                <span>Puttar</span>
            </div>
            <div className="item">
                <h2>{score.greens}</h2>
                <span>Greenträffar</span>
            </div>
            <div className="item">
                <h2>{score.fairway}</h2>
                <span>Fairwayträffar</span>
            </div>
            <div className="item">
                <FaTimesCircle onClick={() => deleteRound(score.id)}/>
            </div>


        </div>
        <button id="showMoreButton" type="button" className="btn btn-info">
            <FaCaretDown/>

        </button>
        </>

)
}

export default Score