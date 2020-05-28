import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Address: <span className="card-address">{this.props.locationProp.name}</span></h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default LocationCard;