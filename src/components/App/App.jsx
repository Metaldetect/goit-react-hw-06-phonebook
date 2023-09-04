import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [filter, setFilter] = useState('');

  const isContactDuplicate = (name, phone) => {
    return contacts.some(
      contact => contact.name === name || contact.phone === phone
    );
  };

  const handleAddContact = newContact => {
    const { name, phone } = newContact;
    const isDuplicateContact = isContactDuplicate(name, phone);
    if (isDuplicateContact) {
      alert('Contact with the same name and phone number already exists!');
      return;
    }
    dispatch(addContact({ ...newContact, id: nanoid() }));
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  return (
    <>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList filter={filter} />
      <Filter value={filter} onChange={handleFilterChange} />
    </>
  );
}

export default App;
