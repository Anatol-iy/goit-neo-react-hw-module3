import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactList}>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
