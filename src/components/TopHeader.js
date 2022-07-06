import './TopHeader.css';
import React from "react";

const TopHeader = () => {

    return(
        <div id="topHeader">
            <div className="container" id="topHeaderContainer">
                <div className="container">
                    <div className="row">
                        <h1 id="topHeaderTitle">
                            Golf Stats
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;