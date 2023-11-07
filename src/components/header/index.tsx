"use client"
import Link from "next/link";
import { ArrowCircleRight } from "phosphor-react";
import styles from '@/components/header/header.module.css';

export default function Header() {
  return ( 
    <header className={styles.header}>
      <div className={styles.title}>
        <ArrowCircleRight size={32} color="coral"  />
        <h1>Trabalhando com App Router</h1>
      </div>
      <Link href="/">Início</Link>
      <Link href="/repositorios">Repositórios</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/contatos">Contatos</Link>
    </header>
  )
}