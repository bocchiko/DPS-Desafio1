import React from "react";
import list from '../contacts.json';
import { ContactList } from "./ContactList";
import { useState } from "react";
export const Form = () => {

    const [nombre,setNombre] = useState('');
    const [lastname,setLastName] = useState('');
    const [phone,setPhone] = useState('');

    const[contacts,setContacts] = useState(list);

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
        if(nombre.trim().length === 0  || lastname.trim().length === 0 || phone.trim().length === 0){
            alert('Ningun campo puede estar vacio !!');
            return;
        }
        const newItem = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
            name: nombre,
            lastname: lastname,
            phoneNumber: phone,
            isFavorite: false
        };
        const newList = contacts.concat(newItem);
        setContacts(newList);

        setNombre('');
        setLastName('');
        setPhone('');
    };

    const deleteContact = (id) => {
       const newList =  contacts.filter((item) => item.id !== id);
       /*  setContacts((current) => current.filter((contact) => contact.id === id) ); */
       setContacts(newList);
    }


    const setFavorite = (id,value) => {
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
   /*  const SortedList = [...contacts].sort((a, b) =>{
        if (a.isFavorite && !b.isFavorite) return -1;
        if (!a.isFavorite && b.isFavorite) return 1;
        return 0;
    }) */

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar Nombre</label><br />
                <input type="text" name="name" value={nombre} onChange={handleChangeName} />
                <label>Agregar Apellido</label><br />
                <input type="text" name="lastname" value={lastname} onChange={handleChangeLastName} />
                <label>Agregar Numero Telefonico</label><br />
                <input type="text" name="phone" value={phone} onChange={handleChangePhone} />
                <button onClick={handleClick}>Agregar</button>

            </form>

            {
                <div className="">
                    <ContactList contacts={contacts} onRemove={deleteContact} setFavorite={setFavorite}/>
                </div>
            
            }
        </>
    );
}