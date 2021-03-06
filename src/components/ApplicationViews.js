import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import OwnerForm from './owner/OwnerForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'

//User clicks on edit button
//Building an edit form
//fetch call to GET the values of the animal they clicked on
//when data comes back, set it to state
//Edit form should have prepopulated values from db
//form should have submit changes button
//fetch call PUT (send user values to db)

class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  //^^ this is the same as below
  // isAuthenticated = function () {
  //   if (localStorage.getItem("credentials") !== null) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/animals"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/employees"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <EmployeeList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/locations"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <LocationList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/owners"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <OwnerList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }} />
        {/* Make sure you add the `exact` attribute here */}

        <Route exact path="/animals/:animalId(\d+)"
         render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />

        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1

          It will not handle the following URL because the `(\d+)`
          matches only numbers after the final slash in the URL
          http://localhost:3000/animals/jack
        */}
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />

        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />

        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />

        <Route
          path="/animals/:animalId(\d+)/edit"
           render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        <Route
          path="/employees/:employeeId(\d+)/edit"
           render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />


        <Route path="/login" component={Login} />
      </>
    )
  }
}


export default ApplicationViews