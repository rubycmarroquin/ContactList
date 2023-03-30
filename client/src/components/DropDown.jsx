import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown({icon, updateIcon}) {

  return (
    <Dropdown onSelect={(e) => updateIcon(e)}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {icon ? icon : "Select Icon"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Beer">Beer</Dropdown.Item>
        <Dropdown.Item eventKey="Snowman">Snowman</Dropdown.Item>
        <Dropdown.Item eventKey="Coffee">Coffee</Dropdown.Item>
        <Dropdown.Item eventKey="Cat">Cat</Dropdown.Item>
        <Dropdown.Item eventKey="Dog">Dog</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;