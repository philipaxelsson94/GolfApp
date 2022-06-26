import './AddRound.css';

import {useState} from 'react';


const AddRound = ({onAdd}) => {
    const [putts, setPutts] = useState(0);
    const [greens, setGreens] = useState(0);
    const [fairway, setFairway] = useState(0);

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let newDate = year + '-' + month + '-' + date

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({newDate,putts,greens,fairway})
        setPutts(0)
        setGreens(0)
        setFairway(0)
    }
    return (

        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col">
                    <div><span className="badge badge-success">Puttar</span></div>
                    <input
                        value={putts}
                        onChange={(e) => setPutts(e.target.valueAsNumber)}
                        type="number"
                        className="form-control"
                        placeholder="putts"/>
                </div>
                <div className="col">
                    <div><span className="badge badge-success">Greenträffar</span></div>
                    <input
                        value={greens}
                        onChange={(e) => setGreens(e.target.valueAsNumber)}
                        type="number"
                        className="form-control"
                        placeholder="greens"/>
                </div>
                <div className="col">
                    <div><span className="badge badge-success">Fairwayträffar</span></div>
                    <input
                        value={fairway}
                        onChange={(e) => setFairway(e.target.valueAsNumber)}
                        type="number"
                        className="form-control"
                        placeholder="fairway"/>
                </div>
            </div>
            <input id="addScoreButton" type="submit" value="Lägg Till" className="btn btn-primary btn-lg btn-block"/>

        </form>



    )
}
 
export default AddRound;