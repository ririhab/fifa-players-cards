import React from "react";
import players from "./players.js";
import Player from "./Player";

const PlayersList = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {players.map((player, index) => (<Player key={index} {...player}/>))}
        </div>
    );
};

export default PlayersList;