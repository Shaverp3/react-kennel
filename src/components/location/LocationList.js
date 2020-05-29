import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

deleteLocation = id => {
    LocationManager.delete(id)
    .then(LocationManager.getAll)
    .then((newlocations) => {
        this.setState({
            locations: newlocations
        })
    })
  }

componentDidMount(){
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    LocationManager.getAll()
    .then((locations) => {
        console.log(locations)
        this.setState({
            locations: locations
        })
    })
}
/*using .map instead of foreach*/
render(){
    console.log("LOCATION LIST: Render");

    return(
        <div className="container-cards">
            {this.state.locations.map(currentLocationInLoop => <LocationCard
            key={currentLocationInLoop.id}
            locationProp={currentLocationInLoop}
            deleteLocation={this.deleteLocation}/>
            )}
        </div>
    )
}
}

export default LocationList