import TodoLogo from '../assets/TodoLogo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} />
    </header>
  )
}