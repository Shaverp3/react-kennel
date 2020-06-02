import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'


class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(OwnerManager.getAll)
            .then((newowners) => {
                this.setState({
                    owners: newowners
                })
            })
    }

    componentDidMount() {
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnerManager.getAll()
            .then((owners) => {
                console.log(owners)
                this.setState({
                    owners: owners
                })
            })
    }
    /*using .map instead of foreach*/
    render() {
        console.log("OWNER LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/owners/new") }}>
                        New Owner
                    </button>
                </section>

                <div className="container-cards">
                    {this.state.owners.map(currentOwnerInLoop => <OwnerCard
                        key={currentOwnerInLoop.id}
                        ownerProp={currentOwnerInLoop}
                        deleteOwner={this.deleteOwner}
                    />
                    )}
                </div>
            </>
        )
    }
}

export default OwnerList