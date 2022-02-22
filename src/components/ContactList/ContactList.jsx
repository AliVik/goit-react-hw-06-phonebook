import { removeContact } from 'features/itemsSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ContactListTag,
  ContactListItem,
  ContactName,
  DeleteBtn,
} from './StyledContactList';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <>
      <ContactListTag>
        {contacts.map(contact => {
          return (
            <ContactListItem key={contact.id}>
              <ContactName>
                {contact.name}: {contact.number}
              </ContactName>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </DeleteBtn>
            </ContactListItem>
          );
        })}
      </ContactListTag>
    </>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),

//   onDeleteClick: PropTypes.func.isRequired,
// };
