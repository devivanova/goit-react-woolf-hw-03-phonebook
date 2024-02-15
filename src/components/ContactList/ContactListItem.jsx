import { ContactList, DeleteButton } from './ContactList.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactList>
      <p>{name}</p>
      <p>{number}</p>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteButton>
    </ContactList>
  );
};