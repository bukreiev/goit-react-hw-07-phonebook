import { Wrapper } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList';

function App() {
  return (
    <Wrapper>
      <h1 className="main-title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}

export default App;
