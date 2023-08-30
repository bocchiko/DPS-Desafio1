import React from "react";
import list from '../contacts.json';
import { ContactList } from "./ContactList";
import { useState } from "react";
import Swal from 'sweetalert2'

export const Form = () => {

    const [nombre, setNombre] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const [contacts, setContacts] = useState(list);

    const handleChangeName = (e) => {
        setNombre(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleClick = e => {
        if (nombre.trim().length === 0 || lastname.trim().length === 0 || phone.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The fields cannot be empty !!!',
            });
            return;
        }
        const newItem = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
            name: nombre,
            lastname: lastname,
            phoneNumber: phone,
            isFavorite: false,
        };
        const newList = contacts.concat(newItem);
        setContacts(newList);

        setNombre('');
        setLastName('');
        setPhone('');
    };

    const deleteContact = (id) => {
        const newList = contacts.filter((item) => item.id !== id);
        setContacts(newList);
    }


    const setFavorite = (id, value) => {
        const newList = contacts.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    isFavorite: value,
                };

                return updatedItem;
            }

            return item;
        });

        setContacts(newList);
    }

    return (
        <>
            <div className="container">
                <div className="row py-3">
                    <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-3 p-5" id="formulario" >
                        <form className="" onSubmit={e => e.preventDefault()} >
                            <h2 className="text-center">Contacts</h2>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Add a Name:</label>
                                <input type="text" className="form-control" id="name" name="name" value={nombre} onChange={handleChangeName}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Add a Lastname:</label>
                                <input type="text" className="form-control" id="lastname" name="lastname" value={lastname} onChange={handleChangeLastName}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Add a Phone Number:</label>
                                <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={handleChangePhone}/>
                            </div>
                            <div className="text-end">
                                <button className="btn btn-md btn-success" onClick={handleClick}>Add</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 py-5">
                        {
                            <div className="contact-list">
                                <ContactList contacts={contacts} onRemove={deleteContact} setFavorite={setFavorite} />
                            </div>
                        }
                    </div>
                </div>
            </div>
           
        </>
    );
}