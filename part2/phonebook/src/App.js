import { useState } from "react";
 //import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterFor, setFilterFor] = useState("");

  const addName = (event) => {
  
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName,
    };
    if (!JSON.stringify(persons).includes(`${newName}`)) {
      setPersons(persons.concat(personObject));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (setNewValue) => (event) =>
    setNewValue(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterFor={filterFor}
        handleNameChange={handleNameChange(setFilterFor)}
      />
      <h2>Add a new person</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange(setNewName)}
        handleNumberChange={handleNameChange(setNewNumber)}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} filterFor={filterFor} />
    </div>
  );
};

export default App;
const Persons = ({ persons, filterFor }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filterFor))
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </div>
  );
};
