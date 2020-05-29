import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Owner: <span className="card-ownername">{this.props.ownerProp.name}</span></h3>
          <p></p>
          <button type="button" onClick={()=>
          this.props.deleteOwner(this.props.ownerProp.id)}>
            Terminate
          </button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;