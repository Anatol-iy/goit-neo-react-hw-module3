import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  // Загрузка контактов из локального хранилища при монтировании компонента
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  // Сохранение контактов в локальное хранилище при изменении контактов
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Функция для добавления нового контакта
  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(), // Генерация уникального ID с помощью nanoid
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]); // Добавление контакта в массив
  };

  // Функция для удаления контакта
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  // Фильтрация списка контактов
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
