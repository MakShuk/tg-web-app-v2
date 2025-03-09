import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/" className={`${styles.button} ${styles.active}`}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1"></rect>
        </svg>
        <div>Функции</div>
      </Link>
      <Link href="/profile" className={styles.button}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <circle cx="12" cy="8" r="4"></circle>
          <path d="M12 12c-3.3 0-6 2.7-6 6v1h12v-1c0-3.3-2.7-6-6-6z"></path>
        </svg>
        <div>Профиль</div>
      </Link>
    </div>
  );
}