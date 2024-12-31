import { useState } from 'react';
import { ButtonLikeProps } from './ButtonLike.props';
import IconLike from '../IconLike/IconLike';
import IconLikeActive from '../IconLikeActive/IconLikeActive';
import styles from './ButtonLike.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonLike = ({ onChange, ...props }: ButtonLikeProps) => {
    const [active, setActive] = useState<boolean>(false);

    const onChangeHandler = () => {
        setActive(x => !x);
        // onChange();
    }
    return (
        <button {...props} onClick={onChangeHandler} className={`${styles.buttonLike} ${active ? styles.buttonLikeActive : ''}`}>
            {active ? <IconLikeActive /> : <IconLike />}
        </button>
    )
}

export default ButtonLike;