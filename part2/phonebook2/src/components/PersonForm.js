const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameValueChange,
  handleNumberValueChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameValueChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberValueChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
