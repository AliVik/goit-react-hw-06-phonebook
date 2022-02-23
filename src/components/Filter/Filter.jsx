import PropTypes from "prop-types";
import { LabelName, Label } from "./StyledFilter";
import {useDispatch} from "react-redux";
import { setFilter } from 'features/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  return (
    <Label>
      <LabelName>Find contacts by name</LabelName>
      <input
        type="text"
        name="filter"
        onChange={(evt)=>dispatch(setFilter(evt.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
  );
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
