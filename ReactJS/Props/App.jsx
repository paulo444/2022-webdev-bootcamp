import React from "react";
import Card from "./Card";

import Contacts from "./Contacts";

function MapContact(currentContact) {
  return (
    <Card
      key={currentContact.id}
      key2={currentContact.id}
      name={currentContact.name}
      src={currentContact.imgURL}
      number={currentContact.phone}
      email={currentContact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {Contacts.map(MapContact)}

    </div>
  );
}

export default App;
