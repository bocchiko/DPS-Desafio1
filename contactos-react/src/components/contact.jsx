import React from 'react';

const Contact = ({ contact, RemoveContact, isFavorite }) => {
    return (
        <div className={`contact ${contact.isFavorite ? 'favorite' : ''}`}>
            <p>{contact.name}</p>
            <p>{contact.phoneNumber}</p>
            <button onClick={() => isFavorite(contact.id)}>
                {contact.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <button onClick={() => RemoveContact(contact.id)}>Remove</button>
        </div>
    );
};

export default Contact;