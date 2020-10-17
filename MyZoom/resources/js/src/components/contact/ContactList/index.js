import React from "react";

import ContactCell from "./ContactCell/index";

const ContactList = ({contactList, onSaveContact, onDeleteContact, type, onAcceptContact}) => {
  console.log(contactList);
  return (
    <div className="gx-contact-main-content">
      {contactList.map((contact, index) =>
        <ContactCell key={index} contact={contact} onDeleteContact={onDeleteContact}
                     onSaveContact={onSaveContact} type={type} onAcceptContact={onAcceptContact}
                     />
      )}

    </div>
  )
};

export default ContactList;
