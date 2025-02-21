'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGitHub } from '@/app/hooks';
import Logo from '@/app/components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
    const { gitHubLink } = useGitHub();

    console.log(gitHubLink);
    return (
        <header className={styles.header}>
            <Logo />

            {gitHubLink ? (
                <Link href={'#'}>
                    <Image src={'/git-icon.svg'} width={24} height={24} alt='Picture of the GitHub' />
                </Link>
            ) : (
                <div>Text</div>
            )}
        </header>
    )
}

export default Header;