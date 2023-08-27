import React from 'react';
import PropTypes from 'prop-types';
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

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactListWrapper>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactIcon>
            <RiContactsLine />
          </ContactIcon>
          <ContactDetails>
            <ContactName>{contact.name}</ContactName>
            <ContactPhone>{contact.phone}</ContactPhone>
          </ContactDetails>
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            <AiFillDelete />
          </DeleteButton>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
