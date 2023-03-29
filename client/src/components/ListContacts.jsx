import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "./Form";
import Contact from "./Contact";

const ListContacts = () => {
  // this is my original state with an array of students
  const [contacts, setContacts] = useState([]);

  //this is the state needed for the UpdateRequest
  const [editingContact, setEditingContact] = useState(null);

  const loadContacts = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("http://localhost:8080/contacts")
      .then((response) => response.json())
      .then((students) => {
        setContacts(students);
      });
  };

  useEffect(() => {
    loadContacts();
  }, [contacts]);

  const onSaveContact = (newContact) => {
    setStudents((contacts) => [...contacts, newContact]);
  };

  //A function to control the update in the parent (student component)
  const updateContact = (savedStudent) => {
    // This function should update the whole list of students -
    loadContacts();
  };

  //A function to handle the Delete funtionality
  const onDelete = (contact) => {
    let confirm = window.prompt("Are you sure? Enter 'yes' to confirm");
    if (confirm.toLowerCase() === 'yes') {
      //console.log(student, "delete method")
      return fetch(`http://localhost:8080/contacts/${contact.contact_id}`, {
        method: "DELETE",
      }).then((response) => {
        //console.log(response);
        if (response.ok) {
          loadStudents();
        }
      });
    }
  };

  //A function to handle the Update functionality
  const onUpdate = (toUpdateContact) => {
    //console.log(toUpdateStudent);
    setEditingContact(toUpdateContact);
  };

  return (
    <div className="mybody">
      <div className="list-students">
        <h2> Contacts List </h2>
        <ul>
          {contacts.map((contact) => {
            return (
              <li key={contact.contact_id}>
                {" "}
                <Contact
                  contact={contact}
                  toDelete={onDelete}
                  toUpdate={onUpdate}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <MyForm
        key={editingContact ? editingContact.contact_id : null}
        onSaveContact={onSaveContact}
        editingContact={editingContact}
        onUpdateContact={updateContact}
      />
    </div>
  );
};

export default ListContacts;
