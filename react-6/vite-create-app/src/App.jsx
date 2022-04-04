import { useState } from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Bertie Yates",
    age: "2001-03-28",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: "1994-11-27",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: "2000-11-27",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: "1984-11-27",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: "1990-03-28",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

const Person = (props) => {
  return (
    <div className="person d-flex">
      <div className="person-image">
        <img src={props.person.image} alt={props.person.name} />
      </div>
      <div className="person-info d-flex flex-column justify-content-center">
        <h3>{props.person.name}</h3>
        <span>{props.person.age} years</span>
      </div>
    </div>
  );
};

const PersonList = (props) => {
  return (
    <div className="person-list">
      <p className="quantity">{props.data.length} birthdays today</p>
      {props.data.map((person, index) => (
        <Person key={index} person={person} />
      ))}
      <Button label="Clear All" clearList={props.handleClearList} />
    </div>
  );
};

function App() {
  const list = data.map((person) => ({ ...person, age: new Date(person.age) }));

  const isBirthDay = list.filter((person) => {
    return (
      person.age.getDate() == new Date().getDate() &&
      person.age.getMonth() == new Date().getMonth()
    );
  });

  const birthdayList = isBirthDay.map((person) => ({
    ...person,
    age: new Date().getFullYear() - person.age.getFullYear(),
  }));

  const [birthdayPersons, setBirthdayPersons] = useState(birthdayList);
  const handleClearList = () => {
    setBirthdayPersons([]);
  };

  return (
    <div className="app">
      <PersonList data={birthdayPersons} handleClearList={handleClearList} />
    </div>
  );
}

export default App;

// App
//    | PersonList .map => Person
