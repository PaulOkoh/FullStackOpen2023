const Filter = ({ filterFor, handleNameChange }) => {
  return (
    <div>
      filter shown with <input value={filterFor} onChange={handleNameChange} />
    </div>
  );
};

export default Filter;
