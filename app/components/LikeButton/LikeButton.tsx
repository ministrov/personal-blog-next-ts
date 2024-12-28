import { LikeButtonProps } from './LikeButton.props';
import styles from './LikeButton.module.css';
import IconLike from '../IconLike/IconLike';
import IconLikeActive from '../IconLikeActive/IconLikeActive';

const LikeButton = ({ isActive, onChange }: LikeButtonProps) => {
    return (
        <button onClick={onChange} className={`${styles.likeBtn} ${isActive ? styles.likeBtnActive : ''}`}>
            {isActive ? <IconLikeActive /> : <IconLike />}
        </button>
    )
}

export default LikeButton;