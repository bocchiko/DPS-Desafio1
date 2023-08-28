import React, {useState} from 'react';

const Contact = ({contact,onRemove, setFavorite}) => {



    const[isFavorite,setFav] = useState(contact.isFavorite);

    const ToggleFavorite = (e) => {
        setFav(!isFavorite);
        setFavorite(contact.id, contact.isFavorite  === true ? false:true );
    };

    return (
        <div className={`contact ${isFavorite ? 'favorite' : ''}`}>
            <p>{contact.id}</p>
            <p>{contact.name}</p>
            <p>{contact.lastname}</p>
            <p>{contact.phoneNumber}</p>
            <button onClick={ToggleFavorite}>
                {contact.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <button onClick={() => onRemove(contact.id)}>Remove</button>
        </div>
    ); 
};

export default Contact;