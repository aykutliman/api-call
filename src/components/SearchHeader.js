import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <div className="searchDivInput">
          <input value={valueInput} onChange={handleChange} />
          <button type="submit">Ara</button>
        </div>
      </form>
    </div>
  );
}

export default SearchHeader;
