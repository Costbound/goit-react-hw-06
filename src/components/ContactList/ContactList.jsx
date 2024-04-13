import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'


export default function ContactList() {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectNameFilter)

    const filteredContacts = contacts.filter(({ name }) => name.includes(filter))

    return (
        <ul>
            {filteredContacts.map(contact => {
                return (
                    <Contact key={contact.id} data={ contact }/>
                )
            })}
        </ul>
    )
}