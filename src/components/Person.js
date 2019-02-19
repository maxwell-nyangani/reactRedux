import React from "react";
import Hobby from "./Hobby";

class Person extends React.Component {
  /* 
  This component also receives data and a function via the props. 
  It is given the object containing the data for one person, a key value 
  and the function to call when the user deletes the person it is representing. 
  It also uses a sub component named Hobby when it wants to render the list of hobbies of a person. 
  It does this by looping through the list of hobbies and passes an object containing 
  the data of a hobby to the Hobby component via the props.
  */
  render() {
    const { id, isAnonymous, name, age, sex, hobbies } = this.props.person;

    if (!isAnonymous) {
      //if statement allowed in this form outside of the return statement
      return (
        <div className="person card" key={id}>
          Name = {name}
          <br />
          Age = {age}
          <br />
          Sex = {sex}
          <br />
          <ol className="collection">
            {hobbies ? ( //if statement not allowed but this syntax allowed
              hobbies.length > 0 ? (
                hobbies.map((hobby, index) => Hobby(hobby, index))
              ) : (
                <b className="boring-person">0 hobbies</b>
              )
            ) : (
              <p className="missing-data">No hobbies data available!!!!!!!</p>
            )}
          </ol>
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              this.props.onDeletePerson(id);
            }}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div className="person card">
          <p>User is anonymous.</p>
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              this.props.onDeletePerson(id);
            }}
          >
            Delete
          </button>
        </div>
      );
    }
  }
}

export default Person;
