const Filter = ({ filterParam, handleFilterValueChange }) => {
  return (
    <div>
      filter shown with:
      <input value={filterParam} onChange={handleFilterValueChange} />
    </div>
  );
};

export default Filter;
