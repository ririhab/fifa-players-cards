import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "react-bootstrap";
const Player = ({name, team, nationality, jersey, age, img}) =>{
    return(
        <Card style={{width:"20rem", margin:"2rem", textAlign:"center"}}>
            <CardImg variant="top" src="{img]"/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>
                    Team: {team} <br/>
                    Nationality: {nationality} <br/>
                    Jersey Number: {jersey} <br/>
                    Age: {age} <br/>
                </CardText>
            </CardBody>
        </Card>
    );
};

//default
Player.defaultProps = {
    name: "Unknown Player " ,
    team: "Unknown Team" ,
    nationality: "Unknown " ,
    jersey: "0" ,
    age: "-" ,
    img: "https://st3.depositphotos.com/3581215/18899/v/450/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
}

export default Player;