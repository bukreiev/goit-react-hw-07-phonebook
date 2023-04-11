import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { P, Name, Button } from './ContactItem.styled';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <P>
        <Name>{contact.name}:</Name> {contact.number}
      </P>
      <Button type="button" onClick={handleDelete}>
        -
      </Button>
    </>
  );
}

export default ContactItem;
