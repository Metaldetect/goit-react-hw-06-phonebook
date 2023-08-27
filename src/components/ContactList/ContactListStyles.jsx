import styled from '@emotion/styled';

export const ContactListWrapper = styled.ul`
  width: 30%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactName = styled.h3`
  margin: 0;
  font-size: 1.5vw;
`;

export const ContactPhone = styled.p`
  margin: 0;
  font-size: 1vw;
  color: #666;
`;

export const DeleteButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  margin-left: 0.625rem;
`;
