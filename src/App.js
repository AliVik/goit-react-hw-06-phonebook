import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
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

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const HandleFormDatas = data => {
    const normalizedDataName = data.name.toLowerCase();
    const checkExistingContact = contacts.map(contact => {
      return contact.name.toLowerCase().includes(normalizedDataName);
    });

    checkExistingContact.includes(true)
      ? toast.error(`${data.name} is already in contacts`)
      : dispatch(addContact(data));
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
        <Filter />
      ) : (
        <LackOfFriendsPhrase>You don`t have any contact :(</LackOfFriendsPhrase>
      )}

      <ContactList contacts={FilterContactList()} />
      <Toaster />
    </Wrapper>
  );
}
