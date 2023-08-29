import React from 'react';
import Contact from './contact';
export const ContactList = ({ contacts, onRemove, setFavorite }) => {

    const SortedList = [...contacts].sort((a, b) => {
        if (a.isFavorite && !b.isFavorite) return -1;
        if (!a.isFavorite && b.isFavorite) return 1;
        return 0;
    })
    return (
        <>
            {
                SortedList.map((contact, index) => {
                    return (
                        <Contact
                            key={index}

                            contact={contact}

                            onRemove={onRemove}

                            setFavorite={setFavorite}

                        />
                    )
                })
            }
        </>
    );
}