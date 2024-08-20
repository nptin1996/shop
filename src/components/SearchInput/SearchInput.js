import classes from "./SearchInput.module.css";

function SearchInput(props) {
  // hàm set search params
  const handleOnChange = (e) => {
    // nếu trống trả về category all
    if (!e.target.value) {
      props.onSetKey({
        category: "all",
      });
    } else {
      // có value trả về theo name
      props.onSetKey({
        name: e.target.value,
      });
    }
  };

  return (
    <div className={classes.input}>
      <input
        placeholder="Enter Search Here!"
        onChange={handleOnChange}
        type="text"
      />
      <select>
        <option>Default sorting</option>
      </select>
    </div>
  );
}

export default SearchInput;
