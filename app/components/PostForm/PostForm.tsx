'use client';

import { useForm } from 'react-hook-form';
import styles from './PostForm.module.css';

export const PostForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: unknown) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("name", { required: "Entering name is required", maxLength: 10 })} className={styles.input} name="name" type="text" placeholder="Имя" />

            <textarea {...register("comment", { required: "Entering comment is required", maxLength: 150 })} className={styles.textarea} name="comment" id="" placeholder="Комментарий"></textarea>

            <button className={styles.button} type='submit'>Отправить</button>
        </form>
    )
}
