import React from 'react';
import {
  ContactListWrapper,
  ContactListItem,
  ContactIcon,
  ContactDetails,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './ContactListStyles';
import { RiContactsLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  console.log('Contacts:', contacts);
  console.log('Filter:', filter);
  console.log(Array.isArray(contacts));

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log('Filtered Contacts:', filteredContacts);

  if (!filteredContacts?.length) {
    return <p>No contacts found.</p>;
  }

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id}>
          <ContactIcon>
            <RiContactsLine />
          </ContactIcon>
          <ContactDetails>
            <ContactName>{name}</ContactName>
            <ContactPhone>{phone}</ContactPhone>
          </ContactDetails>
          <DeleteButton onClick={() => handleDeleteContact(id)}>
            <AiFillDelete />
          </DeleteButton>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
}

export default ContactList;
