import './AveragePutt.css';

const AveragePutt = ({avPutts}) => {
    return(
        <div id="averagePutt" className="ui statistic">
            <div className="value">
                <h1>{avPutts}</h1>
            </div>
            <div className="label">
                Puttar/runda
            </div>
        </div>

    )
}

export default AveragePutt