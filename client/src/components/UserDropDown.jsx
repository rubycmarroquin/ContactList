import Dropdown from 'react-bootstrap/Dropdown';
// https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap 
function UserDropDown({user, updateUser}) {

  return (
    <Dropdown onSelect={(e) => updateUser(e)}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {user == 1 ? 'littlecaesars' : user == 2 ?  'rcmarroq' : user == 3 ? 'AnonymousBear' : "Select User"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="2">rcmarroq</Dropdown.Item>
        <Dropdown.Item eventKey="1">littlecaesars</Dropdown.Item>
        <Dropdown.Item eventKey="3">AnonymousBear</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropDown;