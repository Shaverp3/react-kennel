import React, { Component } from 'react';
import './Animal.css'

class AnimalCard extends Component {
  render() {
      //console.log("this is current animal is the loop", this.props.animalProp)
    return (
      <div className="card">
        <div className="card-content">
          {<picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>}
          <h3>Name: <span className="card-petname">{this.props.animalProp.name}</span></h3>
          <p>Breed: {this.props.animalProp.breed}</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;