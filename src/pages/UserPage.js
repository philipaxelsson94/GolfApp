import './UserPage.css';
import AddRound from '../components/AddRound';
import Scores from '../components/Scores';
import AveragePutt from '../components/AveragePutt';
import AverageGreen from '../components/AverageGreen';
import TopHeader from '../components/TopHeader';
import React, {useEffect, useCallback, useState} from 'react';

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";


function App() {

    const [scores, setScores] = useState([]);
    const [avPutts, setAveragePutts] = useState(0);
    const [avGreens, setAverageGreens] = useState(0);

    const deleteRound = (id) => {
        setScores(scores.filter((score) => score.id !== id));
    }

    const addScore = (score) => {
        const id = Math.floor(Math.random()*10000) + 1
        const newScore = { id, ...score}
        setScores([...scores, newScore])
    }

    const averagePutts = useCallback((scores) => {
        let totalPutts = scores.reduce(function(prev, cur) {
            return prev + cur.putts;
        }, 0);
        return parseFloat(totalPutts/scores.length).toFixed(1);
    },[])

    const averageGreens = useCallback((scores) => {
        let totalGreens = scores.reduce(function(prev, cur) {
            return prev + cur.greens;
        }, 0);
        return parseFloat(totalGreens/scores.length).toFixed(1);
    },[])

    useEffect(() =>{
        if (scores.length !== 0){
            setAveragePutts(averagePutts(scores))
            setAverageGreens(averageGreens(scores))
        }
    }, [averagePutts, averageGreens,scores])

    return (
        <React.Fragment>
            <TopHeader/>
            <div className='container'>
                <div className='container' id="middleContainer">
                    <AddRound onAdd={addScore} />
                </div>
                <div id="averageContainer" className='container'>
                    <div className="item">
                        <AveragePutt avPutts={avPutts}/>
                    </div>
                    <div className="item">
                        <AverageGreen avGreens={avGreens}/>
                    </div>
                </div>
                <div id="scoreListContainer" className="container">
                    <Scores deleteRound={deleteRound} scores={scores}/>
                </div>
                <SignUp/>
                <SignIn/>
            </div>
        </React.Fragment>

    );
}

export default App;
