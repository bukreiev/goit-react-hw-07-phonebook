import { List, Item } from './ContactList.styled';
import ContactItem from 'components/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, getLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {isLoading && <div>Loading contacts...</div>}
      <List>
        {filteredContacts.map(contact => {
          return (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
            </Item>
          );
        })}
      </List>
    </>
  );
}

export default ContactList;
