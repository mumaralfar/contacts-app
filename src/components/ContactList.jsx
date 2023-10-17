import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem 
                    key={contact.id} 
                    id={contact.id}
                    ondDelete={onDelete}
                    {...contact} />
                ))
            }
        </div>
    );
}

export default ContactList;