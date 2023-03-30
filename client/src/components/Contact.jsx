import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faDog, faSnowman, faBeer, faCoffee, faPerson, faPhone, faEnvelope, faNoteSticky, faUser} from '@fortawesome/free-solid-svg-icons'
import * as ioicons from 'react-icons/io5'

const Contact = ({contact, toUpdate, toDelete}) => {
    const [currIcon, setCurrIcon] = useState(contact.icon); 

    const displayIcon = () => {
        if(currIcon === 'Cat') setCurrIcon(<FontAwesomeIcon icon={faCat} style={{fontSize:'50px'}} />);
        if(currIcon === 'Dog') setCurrIcon(<FontAwesomeIcon icon={faDog} style={{fontSize:'50px'}}  />);
        if(currIcon === 'Snowman') setCurrIcon(<FontAwesomeIcon icon={faSnowman} style={{fontSize:'50px'}}  />);
        if(currIcon === 'Beer') setCurrIcon(<FontAwesomeIcon icon={faBeer} style={{fontSize:'50px'}} />);
        if(currIcon === 'Coffee') setCurrIcon(<FontAwesomeIcon icon={faCoffee} style={{fontSize:'50px'}} />);
        if(currIcon === null) setCurrIcon(<FontAwesomeIcon icon={faPerson} style={{fontSize:'50px'}} />);
        
    }
    displayIcon();

    const onUpdate = (toUpdateContact) => {
        toUpdate(toUpdateContact);
    }

    const onDelete = (toDeleteContact) => {
        toDelete(toDeleteContact);
    }

    return (
        <Card className="Card" >
            <Card.Body>
            <Card.Title style={{fontSize:'25px'}}>{contact.name}</Card.Title>
            <Card.Body>{currIcon}</Card.Body>
            <Card.Body><FontAwesomeIcon icon={faPhone} /> {contact.phone}<br/><FontAwesomeIcon icon={faEnvelope} /> {contact.email}<br/><FontAwesomeIcon icon={faNoteSticky} /> Notes: {contact.notes}</Card.Body>
            <Card.Body><FontAwesomeIcon icon={faUser} /> {contact.username}</Card.Body>
            <Button variant="outline-danger" onClick={()=>{onDelete(contact)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(contact)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Contact;