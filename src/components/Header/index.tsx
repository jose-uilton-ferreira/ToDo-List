import styles from './styles.module.css';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logoImg}
        alt="Logo ToDo"
      />
    </header>
  )
}