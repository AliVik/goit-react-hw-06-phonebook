import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  Wrapper,
  PhonebookHeading,
  ContactsHeading,
} from './components/Form/StyledForm';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { LackOfFriendsPhrase } from './components/Filter/StyledFilter';
import useLocalStorage from 'hooks/useLocalstorage';
import { addContact } from 'features/itemsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  console.log(contacts);
  const [filter, setFilter] = useState('');

  const HandleFormDatas = data => {
    const normalizedDataName = data.name.toLowerCase();
    const checkExistingContact = contacts.map(contact => {
      return contact.name.toLowerCase().includes(normalizedDataName);
    });

    checkExistingContact.includes(true)
      ? toast.error(`${data.name} is already in contacts`)
      : dispatch(addContact(data));
  };

  const HandleFilterDatas = evt => {
    setFilter(evt.currentTarget.value);
  };

  const FilterContactList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapper>
      <PhonebookHeading>Phonebook</PhonebookHeading>
      <Form onSubmit={HandleFormDatas} />
      <ContactsHeading>Contacts</ContactsHeading>

      {contacts.length !== 0 ? (
        <Filter value={filter} onChange={HandleFilterDatas} />
      ) : (
        <LackOfFriendsPhrase>You don`t have any contact :(</LackOfFriendsPhrase>
      )}

      <ContactList contacts={FilterContactList()} />
      <Toaster />
    </Wrapper>
  );
}
