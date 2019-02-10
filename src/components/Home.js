import React from "react";
import People from "./People";
import AddPerson from "./AddPerson";
import { connect } from "react-redux"; //used to connect the components to parts of the state from the Redux store.

class Home extends React.Component {
  //removed the state attribute

  addNewPerson = (id, name, age, sex) => {
    this.props.addNewPerson(id, name, age, sex);
    /* this.setState({
      people: [{ id, name, age, sex }, ...this.props.people] //no need for ...this.state.people coz people is now in props
    }); */
  };

  onDeletePerson = personId => {
    this.props.onDeletePerson(personId);
    /* this.setState({
      people: this.props.people.filter(person => {
        //no need for this.state.people coz people is now in props
        if (person.id === personId) {
          return false;
        } else {
          return true;
        }
      })
    }); */
  };

  render() {
    return (
      <div className="heading row">
        <AddPerson addNewPerson={this.addNewPerson} />
        <People
          people={this.props.people} //no need for this.state.people coz people is now in props
          onDeletePerson={this.onDeletePerson}
        />
      </div>
    );
  }
}

//method that copies part of the state to the props of this component.
const mapStateToProps = stateFromStore => {
  return {
    people: stateFromStore.people
  };
};

//currying the dispatch method of the store for invocation at a later stage when the user interacts with the component
const mapDispatchToProps = dispatch => {
  return {
    onDeletePerson: personId => {
      //this function will be accessible via props in the component
      dispatch({
        type: "DELETE_PERSON",
        personId: personId
      });
    },
    addNewPerson: (id, name, age, sex) => {
      //this function will be accessible via props in the component
      dispatch({
        type: "ADD_PERSON",
        personData: {
          id,
          name,
          age,
          sex
        }
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
