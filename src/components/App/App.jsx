import React, { useState } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

function App() {
  const contacts = useSelector(getContacts);
  const [filter, setFilter] = useState('');

  const handleFilterChange = value => {
    setFilter(value);
  };

  return (
    <>
      <ContactForm contacts={contacts} />
      <ContactList filter={filter} />
      <Filter value={filter} onChange={handleFilterChange} />
    </>
  );
}

export default App;
