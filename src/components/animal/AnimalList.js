import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll()
    .then((animals) => {
        console.log(animals)
        this.setState({
            animals: animals
        })
    })
}
/*using .map instead of foreach*/
render(){
    console.log("ANIMAL LIST: Render");

    return(
        <div className="container-cards">
            {this.state.animals.map(currentAnimalInLoop => <AnimalCard key={currentAnimalInLoop.id} animalProp={currentAnimalInLoop}/>
            )}
        </div>
    )
}
}

export default AnimalList