import { ButtonLikeProps } from './ButtonLike.props';
import styles from './LikeButton.module.css';
import IconLike from '../IconLike/IconLike';
import IconLikeActive from '../IconLikeActive/IconLikeActive';

const ButtonLike = ({ isActive, onChange, ...props }: ButtonLikeProps) => {
    return (
        <button {...props} onClick={onChange} className={`${styles.buttonLike} ${isActive ? styles.buttonLikeActive : ''}`}>
            {isActive ? <IconLikeActive /> : <IconLike />}
        </button>
    )
}

export default ButtonLike;