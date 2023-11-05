import Link from "next/link";
import styles from '@/components/header/header.module.css';

export default function Header() {
  return ( 
    <header className={styles.header}>
      <h1>Estudo de App Router</h1>
      <Link href="/">Home</Link>
      <Link href="/repositorios">Repositórios</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/contatos">Contatos</Link>
    </header>
  )
}