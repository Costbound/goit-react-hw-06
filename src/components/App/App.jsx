import css from './App.module.css'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from '../ContactFrorm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'


export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts')
        return savedContacts ? JSON.parse(savedContacts) : []
    })
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const handelSearchChange = (value) => {
        setSearchValue(value)
    }

    const handleSubmit = ({name, number}, actions) => {
        const contactToAdd = {
            id: nanoid(),
            name: name,
            number: number
        }
        const updatedContacts = contacts.map(contact => contact)
        updatedContacts.push(contactToAdd)
        setContacts(updatedContacts)
        actions.resetForm()
    }

    const handleDelete = (idToDelete) => {
        setContacts(contacts.filter(({id}) => id !== idToDelete))
    }

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm handleSubmit={handleSubmit} />
            <SearchBox searchValue={ searchValue } handleChange={handelSearchChange} />
            <ContactList contacts={ filteredContacts } handleDelete={handleDelete} />
        </div>
    )
}