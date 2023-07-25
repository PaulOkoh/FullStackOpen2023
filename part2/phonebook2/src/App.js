import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'



const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterParam, setFilterParam] = useState('')

  
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number : newNumber,
      id: persons.length + 1
    }
    if (!JSON.stringify(persons).includes(`${newName}`)) {
      setPersons(persons.concat(personObject));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName('')
    setNewNumber('')
  }




  const handleNameValueChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  const handleNumberValueChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterValueChange = event => {
    setFilterParam(event.target.value)
  }

  const namesToShow = filterParam
  ?  persons.filter(person => person.name.toLowerCase().includes(filterParam))
  : persons




  return(
    <div>
      <h2>Phonebook</h2>

      <Filter 
      filterParam={filterParam} 
      handleFilterValueChange={handleFilterValueChange}
      />


      <h3>Add New</h3>

      <PersonForm
        addPerson={addPerson}
  newName={newName}
  newNumber={newNumber}
  handleNameValueChange={handleNameValueChange}
  handleNumberValueChange={handleNumberValueChange}
       />







      
      <h3>Numbers</h3>

      <ul>
        {namesToShow.map(person => 
        <Person
         key={person.id}
          person={person}/>
        )}
      </ul>
    </div>
  )
}

export default App;
