import React from 'react';
import {
  ContactListItem,
  ContactIcon,
  ContactDetails,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './ContactListItemStyles';
import { RiContactsLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
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
  );
}

export default ContactItem;
