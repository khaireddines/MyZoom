import React from "react";

import ContactCell from "./ContactCell/index";

const ContactList = ({contactList, onSaveContact, onDeleteContact}) => {
  return (
    <div className="gx-contact-main-content">
      {contactList.map((contact, index) =>
        <ContactCell key={index} contact={contact} onDeleteContact={onDeleteContact}
                     onSaveContact={onSaveContact}
                     />
      )}

    </div>
  )
};

export default ContactList;
