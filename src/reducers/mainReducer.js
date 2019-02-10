const initialState = {
  people: [
    {
      id: 1,
      isAnonymous: false,
      name: "Sarah",
      age: 77,
      sex: "female",
      hobbies: [
        {
          title: "fun thing 1",
          description: "relaxing activity to do in your free time."
        },
        {
          title: "fun thing 2",
          description: "relaxing activity to do in your free time."
        },
        {
          title: "fun thing 5",
          description: "relaxing activity to do in your free time."
        },
        {
          title: "fun thing 6",
          description: "relaxing activity to do in your free time."
        }
      ]
    },
    {
      id: 2,
      isAnonymous: false,
      name: "Robert",
      age: 18,
      sex: "male",
      hobbies: [
        {
          title: "fun thing 5",
          description: "relaxing activity to do in your free time."
        },
        {
          title: "fun thing 6",
          description: "relaxing activity to do in your free time."
        }
      ]
    },
    { id: 3, isAnonymous: false, name: "Christopher", age: 25, sex: "male" },
    {
      id: 4,
      isAnonymous: false,
      name: "Gina",
      age: 60,
      sex: "female",
      hobbies: []
    },
    {
      id: 5,
      isAnonymous: true,
      name: "Thomas",
      age: 10,
      sex: "male",
      hobbies: []
    },
    {
      id: 6,
      isAnonymous: false,
      name: "Nichodimus",
      age: 85,
      sex: "male",
      hobbies: [
        {
          title: "fun thing 1",
          description: "relaxing activity to do in your free time."
        },
        {
          title: "fun thing 2",
          description: "relaxing activity to do in your free time."
        }
      ]
    }
  ]
};

const mainReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "DELETE_PERSON") {
    let newList = state.people.filter(person => {
      //no need for this.state.people coz people is now in props
      if (person.id === action.personId) {
        return false;
      } else {
        return true;
      }
    });
    return {
      ...state,
      people: newList
    };
  }

  if (action.type === "ADD_PERSON") {
    return {
      ...state,
      people: [{ ...action.personData }, ...state.people]
    };
  }
  return state;
};

export default mainReducer;
