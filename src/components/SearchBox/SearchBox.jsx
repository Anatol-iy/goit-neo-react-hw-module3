import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  const searchBoxId = useId(); 

  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor={searchBoxId}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={searchBoxId}
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;



