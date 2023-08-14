import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import TimetableCard from "./TimetableCard.js";

export class Timetable extends Component {
    constructor(props){
        super(props);
        this.state = {Timetable: []}
    }

    refreshList(){ 
        const url = process.env.REACT_APP_API + "Timetable";
        console.log("URL to fetch:", url);
        fetch(process.env.REACT_APP_API + "Timetable")
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            this.setState({Timetable: data});
        }
        )   
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){   
        this.refreshList();
    }

    render(){
        const {Timetable} = this.state;
        return(
            <div>
            <div style = {{backgroundColor: "white"}}>
                    {Timetable.map((ttable) => (
                        <TimetableCard key={ttable.TimetableId} ttable={ttable}/>
                    ))}
            </div>
            </div>
        );
    }
}