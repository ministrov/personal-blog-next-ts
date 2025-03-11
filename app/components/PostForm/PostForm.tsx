'use client';

import { useForm } from 'react-hook-form';
import styles from './PostForm.module.css';

export const PostForm = () => {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))} className={styles.form}>
            <input {...register("name")} className={styles.input} name="name" type="text" placeholder="Имя" />

            <textarea {...register("comment")} className={styles.textarea} name="comment" id="" placeholder="Комментарий"></textarea>

            <button className={styles.button} type='button'>Отправить</button>
        </form>
    )
}
