import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={css.card}>
      <ul className={css.cardNumber}>
        <li className={css.infoItem}>
          <FaUser />
          <p>{contact.name}</p>
        </li>

        <li className={css.infoItem}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </li>
      </ul>
      <button
        onClick={() => deleteContact(contact.id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
