import React from 'react';
import { ContactListWrapper } from './ContactListStyles';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactListItem';
import Notiflix from 'notiflix';

function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    Notiflix.Notify.info('No contacts found.', {
      position: 'center-top',
    });
  }

  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ContactListWrapper>
  );
}

export default ContactList;
