import css from './Contact.module.css'
import { IoPersonSharp } from "react-icons/io5"
import { FaPhoneAlt} from 'react-icons/fa'

export default function Contact({data: {name, number, id}, handleDelete}) {
    return (
        <li className={css.item}>
            <div>
                <p className={css.para}><IoPersonSharp size='18'/>{name}</p>
                <p className={css.para}><FaPhoneAlt size='17'/>{number}</p>
            </div>
            <button type="button" onClick={() => {handleDelete(id)}}>Delete</button>
        </li>
    )
}