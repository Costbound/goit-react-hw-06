import css from './SearchBox.module.css'
import { useId } from 'react'
import { selectNameFilter } from '../../redux/filtersSlice'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'

export default function SearchBox() {
    const dispatch = useDispatch()
    const searchValue = useSelector(selectNameFilter)

    const handleChange = (e) => dispatch(changeFilter(e.target.value))

    const id = useId()
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={id}>Find contacts by name
                <input className={css.input} type="text" name="search" id={id} value={searchValue} onChange={handleChange} />
            </label>
        </div>
    )
}