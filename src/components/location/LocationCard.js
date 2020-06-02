import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-address">{this.props.locationProp.name}</span></h3>
          <p>Address: {this.props.locationProp.address}</p>
          <Link to={`/locations/${this.props.locationProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;