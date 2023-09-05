import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <ContactForm contacts={contacts} />
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
