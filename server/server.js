const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

app.get("/users", async (req, res) => {
  try {
    const { rows: users } = await db.query(
      "select username from users order by user_id"
    );
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const { rows: contacts } = await db.query(
      "SELECT users.username, contacts.contact_id, contacts.name, contacts.email, contacts.phone, contacts.notes, contacts.icon FROM contacts INNER JOIN users on contacts.user_id = users.user_id"
    );
    res.send(contacts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post("/contacts", async (req, res) => {
    try {
      const newContact = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        notes: req.body.notes,
        user_id: req.body.user_id,
        icon: req.body.icon,
      };

      //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
      const result = await db.query(
        `INSERT INTO contacts(contact_id, name, email, phone, notes, user_id, icon) VALUES(nextval('contacts_sequence'), $1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          newContact.name,
          newContact.email,
          newContact.phone,
          newContact.notes,
          newContact.user_id,
          newContact.icon,
        ]
      );
      console.log(result.rows[0]);
      res.json(result.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
});

// delete request for students
app.delete("/contacts/:contactId", async (req, res) => {
  try {
    const contactId = req.params.contactId;
    await db.query("DELETE FROM contacts WHERE contact_id=$1", [contactId]);
    console.log("From the delete request-url", contactId);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//A put request - Update a student
app.put("/contacts/:contactId", async (req, res) => {
  //This will be the id that I want to find in the DB - the student to be updated
  const contactId = req.params.contactId;
  const updatedContact = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    notes: req.body.notes,
    user_id: req.body.user_id,
    icon: req.body.icon,
  };
  console.log("In the server from the url - the student id", contactId);
  console.log(
    "In the server, from the react - the student to be edited",
    updatedContact
  );
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE contacts SET name=$1, email=$2, phone=$3, notes=$4, icon=$5, user_id=$6 WHERE contact_id=${contactId} RETURNING *`;
  const values = [
    updatedContact.name,
    updatedContact.email,
    updatedContact.phone,
    updatedContact.notes,
    updatedContact.icon,
    updatedContact.user_id,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
