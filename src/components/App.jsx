import ContactForm from './ContcatForm/contactform';
import { ContactList } from './ContactList/contactlist';
import { Filter } from './Filter/filter';

import { useSelector } from 'react-redux';

export function App() {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
console.log(contacts);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* {contacts.items.length > 1 && <Filter />}
      {contacts.items.length > 0 ? (
        <ContactList contacts={getVisibleContacts()} />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )} */}
      <ContactList contacts={getVisibleContacts()} />
    </div>
  );
}
