import ContactItem from './ContactItem';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul>
      {(filter || contacts)?.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
