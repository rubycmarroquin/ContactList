import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import ContactModal from './Modal'
const Contact = ({contact, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateContact) => {
        toUpdate(toUpdateContact);
    }

    const onDelete = (toDeleteContact) => {
        toDelete(toDeleteContact);
    }

    return (
        <Card>
            <Card.Body>
            <img src="./assets/userimg.jpg"/>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Body>{contact.phone}<br/>{contact.email}<br/>{contact.notes}</Card.Body>
            
            <Button variant="outline-danger" onClick={()=>{onDelete(contact)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(contact)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Contact;