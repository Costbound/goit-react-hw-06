import css from './ContactForm.module.css'
import { useId } from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validation = Yup.object().shape({
    name: Yup.string().min(3, 'Name is too Short!').max(50, 'Name is too long!').required('This field cannot be empty!'),
    number: Yup.string().min(3, 'Number is too Short!').max(50, 'Number is too long!').required('This field cannot be empty!')
})

export default function ContactForm({ handleSubmit }) {
    const nameID = useId()
    const telID = useId()

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={validation}
        >
            <Form className={css.form}>
                <div className={css.inputContainer}>
                    <label htmlFor={nameID}>Name</label>
                    <Field className={css.input} type='text' name="name" id={nameID} />
                    <ErrorMessage className={css.error} name='name' component='span' />
                </div>
                <div className={css.inputContainer}>
                    <label htmlFor={telID}>Number</label>
                    <Field className={css.input} type='text' name="number" id={telID} />
                    <ErrorMessage className={css.error} name='number' component='span' />
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}