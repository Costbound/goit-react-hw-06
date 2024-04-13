import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({contacts, handleDelete}) {
    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <Contact key={contact.id} data={ contact } handleDelete={handleDelete}  />
                )
            })}
        </ul>
    )
}