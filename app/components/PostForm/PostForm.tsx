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
            <div className={styles.wrapper}>
                <input {...register("name", { required: { value: true, message: "Entering name is required" }, maxLength: 10 })}
                    className={styles.input}
                    type="text"
                    placeholder="Имя"
                />

                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            </div>

            <div className={styles.wrapper}>
                <textarea {...register("comment", { required: { value: true, message: "Entering comment is required" }, maxLength: 150 })}
                    className={styles.textarea}
                    placeholder="Комментарий"
                ></textarea>

                {errors.comment && <span className={styles.errorMessage}>{errors.comment.message}</span>}
            </div>

            <button className={styles.button} type='submit'>Отправить</button>
        </form>
    )
}
