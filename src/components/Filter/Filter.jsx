import PropTypes from "prop-types";
import { LabelName, Label } from "./StyledFilter";

function Filter({ value, onChange }) {
  return (
    <Label>
      <LabelName>Find contacts by name</LabelName>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
