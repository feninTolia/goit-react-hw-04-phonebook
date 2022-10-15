import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const lsContacts = localStorage.getItem('contacts');
    const parsedLsContacts = JSON.parse(lsContacts);

    if (parsedLsContacts) {
      setContacts(parsedLsContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.clear('contacts');
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContactForm = newContact => {
    if (contacts && contacts.some(el => el.number === newContact.number)) {
      window.alert(`${newContact.number} is already exist in your phonebook`);
      return;
    }

    if (contacts && contacts.some(el => el.name === newContact.name)) {
      window.alert(`${newContact.name} is already exist in your phonebook`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = userId => {
    const updatedContactsList = contacts.filter(el => el.id !== userId);

    const updateFilteredList = filter && filter.filter(el => el.id !== userId);

    setContacts(updatedContactsList);
    setFilter(updateFilteredList);
  };

  const handleContactsFilter = namePart => {
    let FiltredContacts = contacts.filter(e =>
      e.name.toLowerCase().includes(namePart.toLowerCase())
    );

    if (namePart === '') {
      FiltredContacts = '';
    }

    setFilter(FiltredContacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContactForm} />

      <h2>Contacts</h2>
      <Filter onContactsFilter={handleContactsFilter} />
      <ContactList
        filter={filter}
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
