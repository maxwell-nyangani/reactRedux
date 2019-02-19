import React from "react";
import Person from "./Person";
class People extends React.Component {
  /* 
  This component receives the list of people to be rendered and the method for deleting a 
  person from the state of Home component. It then loops over the list of people and it 
  passes the data of each person to it sub component which is name Person component. 
  The Person component will handle how to render the information of an individual person.
  */
  render() {
    //destructure the this.props to save typing dots if props were paased down this component
    const { people, onDeletePerson } = this.props;

    return (
      <div className="people col s8">
        <h5>People list</h5>
        <div>
          {people.length ? (
            people.map((person, index) => {
              return (
                <Person
                  person={person}
                  key={index}
                  onDeletePerson={onDeletePerson}
                />
              );
            })
          ) : (
            <span>No people</span>
          )}
        </div>
      </div>
    );
  }
}

export default People;
