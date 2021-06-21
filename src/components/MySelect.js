import Select from "react-select";
import "./MySelect.css";

const options = [
  { value: "action", label: "Action" },
  { value: "mystery", label: "Mystery" },
  { value: "thriller", label: "Thriller" },
  { value: "comedy", label: "Comedy" },
  { value: "family", label: "Family" },
  { value: "history", label: "History" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "war", label: "War" },
  { value: "adventure", label: "Adventure" },
  { value: "crime", label: "Crime" },
  { value: "fantasy", label: "Fantasy" },
  { value: "horror", label: "Horror" },
  { value: "animation", label: "Animation" },
  { value: "documentary", label: "Documentary" },
  { value: "biography", label: "Biography" },
  { value: "drama", label: "Drama" },
  { value: "musical", label: "Musical" },
];

const MySelect = ({ setSelectedGenres }) => {
  return (
    <div className="select-container">
      <div className="wrapper-checkbox">
        <input type="checkbox" id="checkbox1" />
        <label for="checkbox1" disabled>
          most popular
        </label>
      </div>
      <Select
        // value={selectedValue}
        options={options}
        isMulti
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(options) => {
          setSelectedGenres(options.map((o) => o.value));
        }}
      />
    </div>
  );
};

export default MySelect;
