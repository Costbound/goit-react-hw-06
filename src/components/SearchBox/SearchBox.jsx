import css from './SearchBox.module.css'
import { useId } from 'react'

export default function SearchBox({ searchValue, handleChange }) {
    const id = useId()
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={id}>Find contacts by name
                <input className={css.input} type="text" name="search" id={id} value={searchValue} onChange={(e) => { handleChange(e.target.value) }} />
            </label>
        </div>
    )
}