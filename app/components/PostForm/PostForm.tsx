"use client";

import { useForm } from "react-hook-form";
import { IPostForm } from "./PostForm.interface";
import cn from "classnames";
import styles from "./PostForm.module.css";

export const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostForm>();

  const onSubmit = (data: IPostForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.wrapper}>
        <input
          {...register("name", {
            required: { value: true, message: "Введите имя, не более 10 букв" },
            pattern: /^[A-Za-z]+$/,
            maxLength: 10,
          })}
          className={cn(styles.input, {
            [styles.error]: errors.name,
          })}
          type="text"
          placeholder="Имя"
        />

        {errors.name && (
          <span role="alert" className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.wrapper}>
        <textarea
          {...register("comment", {
            required: { value: true, message: "Введите комментарий" },
            maxLength: 150,
          })}
          className={cn(styles.textarea, {
            [styles.error]: errors.comment,
          })}
          placeholder="Комментарий"
        ></textarea>

        {errors.comment && (
          <span role="alert" className={styles.errorMessage}>{errors.comment.message}</span>
        )}
      </div>

      <button className={styles.button} type="submit">
        Отправить
      </button>
    </form>
  );
};
