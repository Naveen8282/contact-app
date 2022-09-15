import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  //the below function retrive contact from the addcontact js
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  // //
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("items"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  // //
  useEffect(() => {
    // JSON.parse(localStorage.getItem(contacts));
    localStorage.getItem("contacts", JSON.stringify(contacts));
    if (contacts) {
      setContacts(contacts);
    }
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      {/* <AddContact /> */}
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
