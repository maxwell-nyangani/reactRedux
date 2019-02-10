import React from "react";
import Person from "./Person";
class People extends React.Component {
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
