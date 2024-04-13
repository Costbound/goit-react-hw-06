import css from './Contact.module.css'
import { IoPersonSharp } from "react-icons/io5"
import { FaPhoneAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'

export default function Contact({ data: { name, number, id } }) {
    const dispatch = useDispatch()
    
    const handleDelete = () => dispatch(deleteContact(id))

    return (
        <li className={css.item}>
            <div>
                <p className={css.para}><IoPersonSharp size='18'/>{name}</p>
                <p className={css.para}><FaPhoneAlt size='17'/>{number}</p>
            </div>
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
}