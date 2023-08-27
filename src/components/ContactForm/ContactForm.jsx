import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  ContactFormWrapper,
  ContactTitle,
  Button,
  FormWrapper,
  FormGroup,
  Label,
  ErrorText,
} from './ContactFormStyles';

const phonebookSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Name is required'),
  phone: Yup.string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

function ContactForm({ onAddContact }) {
  const initialValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = (values, actions) => {
    const { name, phone } = values;

    const newContact = { id: nanoid(), name, phone };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <ContactFormWrapper>
      <ContactTitle>Phonebook</ContactTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={phonebookSchema}
        onSubmit={handleSubmit}
      >
        <Form as={FormWrapper}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Field type="text" id="name" name="name" />
            <ErrorText name="name" component="div" className="error" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Field type="text" id="phone" name="phone" />
            <ErrorText name="phone" component="div" className="error" />
          </FormGroup>

          <Button type="submit">Add Contact</Button>
        </Form>
      </Formik>
    </ContactFormWrapper>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
