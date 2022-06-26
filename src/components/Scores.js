
import './Scores.css';
import Score from './Score';
const Scores = ({scores,deleteRound}) => {
    return(
        <>
        {scores.map((score) =>(
            <Score deleteRound={deleteRound} key={score.id} score={score}/>



            ))}
        </>
    )
}

export default Scores