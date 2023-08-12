import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProgramsCard from "./ProgramsCard.js";

export class Programs extends Component {
    constructor(props){
        super(props);
        this.state = {Programs: []}
    }

    refreshList(){ 
        const url = process.env.REACT_APP_API + "programs";
        console.log("URL to fetch:", url);
        fetch(process.env.REACT_APP_API + "programs")
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            this.setState({Programs: data});
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
        const {Programs} = this.state;
        return(
            <Container>
                <Row>
                    {Programs.map((program) => (
                        <ProgramsCard key={program.ProgramsId} program={program}/>
                    ))}
                </Row>
            </Container>
        );
    }
}