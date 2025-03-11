import styles from './PostForm.module.css';

export const PostForm = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input} name="forminput" type="text" placeholder="Имя" />
            <textarea className={styles.textarea} name="textarea" id="" placeholder="Комментарий"></textarea>

            <button className={styles.button} type='button'>Отправить</button>
        </form>
    )
}
