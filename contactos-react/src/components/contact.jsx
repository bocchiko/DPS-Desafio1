import React from 'react';

const Contact = ({ contact, onRemove, setFavorite }) => {

    
    const ToggleFavorite = (e) => {
        setFavorite(contact.id, contact.isFavorite === true ? false : true);
    };

    return (
        <div className="contact p-5" id='contact'>
            <div className="d-flex justify-content-between">
                <p><span className='fw-bold'>ID: </span> {contact.id}</p>
                <img className={contact.isFavorite ? '' : 'visually-hidden'} src={contact.isFavorite ? 'https://cdn-icons-png.flaticon.com/128/1828/1828884.png' : ''} alt=''/>
            </div>
            <p><span className='fw-bold'>Name: </span> {contact.name}</p>
            <p><span className='fw-bold'>Lastname: </span> {contact.lastname}</p>
            <p><span className='fw-bold'>Phone: </span>{contact.phoneNumber}</p>
            
            <div className="d-grid gap-4 d-md-block">
                <button className={contact.isFavorite ? 'btn btn-sm btn-warning ms-2 mt-1':'btn btn-sm btn-secondary mt-1'} onClick={ToggleFavorite}>
                    {contact.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
                <button className='btn btn-sm btn-danger ms-2 mt-1' onClick={() => onRemove(contact.id)}>Remove</button>
            </div>
        </div>
    );
};

export default Contact;