import { useState } from 'react';
import { ButtonLikeProps } from './ButtonLike.props';
import styles from './ButtonLike.module.css';


const ButtonLike = ({ onChange, ...props }: ButtonLikeProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <button {...props} onClick={() => {
            if (onChange) {
                onChange();
            }
            setActive(x => !x);
        }} className={`${styles.buttonLike} ${active ? styles.buttonLikeActive : ''}`}>
            {active ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86448 7.53097H1V17.1922H4.86448M4.86448 7.53097V17.1922M4.86448 7.53097L9.88404 1.67482C10.3603 1.11914 11.1097 0.880249 11.8197 1.05776L11.8657 1.06924C13.162 1.39332 13.746 2.90382 13.0048 4.01561L10.6612 7.53097H15.0671C16.2864 7.53097 17.201 8.6465 16.9618 9.84216L15.8025 15.6389C15.6218 16.5421 14.8288 17.1922 13.9078 17.1922H4.86448" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86448 7.53097H1V17.1922H4.86448M4.86448 7.53097V17.1922M4.86448 7.53097L9.88404 1.67482C10.3603 1.11914 11.1097 0.880249 11.8197 1.05776L11.8657 1.06924C13.162 1.39332 13.746 2.90382 13.0048 4.01561L10.6612 7.53097H15.0671C16.2864 7.53097 17.201 8.6465 16.9618 9.84216L15.8025 15.6389C15.6218 16.5421 14.8288 17.1922 13.9078 17.1922H4.86448" strokeLinecap="round" stroke='#303030' strokeLinejoin="round" />
                </svg>
            )}
        </button>
    )
}

export default ButtonLike;