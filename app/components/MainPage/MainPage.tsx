'use client';

import { MyUserContextProvider } from '@/app/context/user-context';
import { MainPageProps } from './MainPage.props';
import styles from './MainPage.module.css';

export const MainPage = ({ children }: MainPageProps) => {
  return (
    <MyUserContextProvider initialId={12}>
      <section className={styles.mainPage}>
        {children}
      </section>
    </MyUserContextProvider>
  )
}
