'use client';

import { useForm } from 'react-hook-form';
import { IPostForm } from './PostForm.interface';
import styles from './PostForm.module.css';

export const PostForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IPostForm>();

    const onSubmit = (data: IPostForm) => {
        console.log(data);
    };

    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("name", { required: { value: true, message: "Entering name is required" }, maxLength: 10 })} className={styles.input} name="name" type="text" placeholder="Имя" />

            {/* {errors.name && <p>{errors.comment}</p>} */}

            <textarea {...register("comment", { required: { value: true, message: "Entering comment is required" }, maxLength: 150 })} className={styles.textarea} name="comment" id="" placeholder="Комментарий"></textarea>

            {/* {errors.comment && <p>{errors.comment}</p>} */}

            <button className={styles.button} type='submit'>Отправить</button>
        </form>
    )
}
