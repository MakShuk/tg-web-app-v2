'use client';

import styles from './page.module.css';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <>
      <div className={styles.header}>Профиль</div>
      
      <Link href="/settings" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>Настройки</div>
        <div className={styles.menuItemArrow}>›</div>
      </Link>
      
      <Link href="/about" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,17H11V15H13V17ZM13,13H11V7H13V13Z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>О приложении</div>
        <div className={styles.menuItemArrow}>›</div>
      </Link>
      
      <Link href="/feedback" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>Оставить отзыв</div>
        <div className={styles.menuItemArrow}>›</div>
      </Link>
      
      <Link href="/catalog" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>Каталог функций</div>
        <div className={styles.menuItemArrow}>›</div>
      </Link>
      
      <Link href="/support" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,19H11V17H13V19ZM15.07,11.25L14.17,12.17C13.45,12.9 13,13.5 13,15H11V14.5C11,13.4 11.45,12.4 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.9 13.1,7 12,7C10.9,7 10,7.9 10,9H8C8,6.79 9.79,5 12,5C14.21,5 16,6.79 16,9C16,9.88 15.64,10.67 15.07,11.25Z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>Поддержка</div>
        <div className={styles.menuItemArrow}>›</div>
      </Link>
      
      <div className={styles.sectionDivider} />
      
      <a href="https://web.app.dev" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20ZM12.5,7H11V13L16.2,16.2L17,14.9L12.5,12.2V7Z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>Веб-версия</div>
        <div className={styles.menuItemArrow}>›</div>
      </a>
      
      <a href="https://vk.com/app" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>
        <div className={styles.menuItemIcon}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M15.36 5.34c-1.67-.33-3.18 0-4.36.67-1.18-.67-2.7-1-4.36-.67-1.68.33-3.35 1.34-4.65 3.33C.34 11.7.35 16 .36 16.6c.01.27.11.52.3.7.18.18.44.28.7.28h.84c1.13-.02 5.07-.2 8.17-1.95 3.1 1.76 7.04 1.93 8.17 1.96h.84c.27 0 .52-.1.7-.28.19-.18.29-.43.3-.7.01-.6.02-4.9-1.64-7.93-1.29-1.99-2.96-3-4.64-3.34zM12 14.1c-1.18.4-2.57.62-3.94.69.02-4.67 1.13-7.94 3.94-10.17v9.48z" />
          </svg>
        </div>
        <div className={styles.menuItemText}>VK версия</div>
        <div className={styles.menuItemArrow}>›</div>
      </a>
      
      <Link href="/terms" className={styles.footerLink}>
        Пользовательское соглашение
      </Link>
      
      <Footer />
    </>
  );
}