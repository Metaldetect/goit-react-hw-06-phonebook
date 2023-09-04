import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const FilterLabel = styled.label`
  margin-top: 0.625rem;
  font-weight: bold;
  font-size: 2vw;
  display: block;
`;

export const FilterInput = styled.input`
  padding: 0.5rem;
  width: 20%;
  font-size: 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  margin-top: 0.3125rem;

  &:focus {
    box-shadow: 0 0 1rem #007bff;
    outline: none;
  }
`;
