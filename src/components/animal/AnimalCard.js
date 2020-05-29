import React, { Component } from 'react';
import './Animal.css'

class AnimalCard extends Component {
  render() {
      //console.log("this is current animal is the loop", this.props.animalProp)
    return (
      <div className="card">
        <div className="card-content">
          {<picture>
            <img src={window.location.origin + this.props.animalProp.image} alt="My Dog" />
          </picture>}
          <h3>Name: <span className="card-petname">{this.props.animalProp.name}</span></h3>
          <p>Breed: {this.props.animalProp.breed}</p>
          <button type="button" onClick={()=>
          this.props.deleteAnimal(this.props.animalProp.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;