import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const ContactFormWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
`;
export const ContactTitle = styled.h1`
  font-size: 3vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-item: center;
  justify-content: center;
`;
export const Label = styled.label`
  font-weight: bold;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  margin-top: 0.3125rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  padding: 0.3125rem 0.46875rem;
  margin-top: 0.625rem;
  margin-bottom: 3rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.15625rem;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FormWrapper = styled.div`
  max-width: 18.75rem;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;
  label {
    margin-bottom: 0.3125rem;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    border: 0.0625rem solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.3125rem;
  }
`;
