import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    };

    componentDidMount() {
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
    render() {
        console.log("ANIMAL LIST: Render");

        return (
            //add this button above your display of animal cards
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/animals/new") }}>
                        Admit Animal
                    </button>
                </section>
                
                <div className="container-cards">
                    {this.state.animals.map(currentAnimalInLoop => <AnimalCard
                        key={currentAnimalInLoop.id}
                        animalProp={currentAnimalInLoop}
                        //deleteAnimal={this.deleteAnimal}
                    />
                    )}
                </div>
            </>
        )
    }
}

export default AnimalList