import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            second : 0,
        }
    }

    incrementCount (){
        this.setState(increment => ({
         
                second: increment.second +1
            }));
            console.log('un update a eu lieu')
    } 
    


   
    

    componentDidMount(){
        this.interval = setInterval(() => this.incrementCount(), 1000);
        
    }


    componentDidUpdate() {
        console.log('Le composant a été mis à jour');
    }

    render() {
        return (
            <div>
                <img src="https://wildcodeschool.fr/wp-content/uploads/2017/01/logo_orange_pastille.png" alt="wild" />
                Timer : {this.state.second}
            </div>
        );
    }
}


export default Timer;