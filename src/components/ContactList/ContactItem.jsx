const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <span>{name} </span>
      <span>{number} </span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        delete
      </button>
    </li>
  );
};

export default ContactItem;
