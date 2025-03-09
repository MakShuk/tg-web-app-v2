/**
 * Компонент страницы для Telegram Mini Apps
 * 
 * Этот компонент обеспечивает:
 * 1. Управление кнопкой "Назад" в интерфейсе Telegram
 * 2. Навигацию между страницами приложения
 * 3. Базовую структуру для контента страницы
 */

'use client'; // Директива для Next.js, указывающая что это клиентский компонент

// Импортируем функционал кнопки "Назад" из SDK Telegram
import { backButton } from '@telegram-apps/sdk-react';
// Импортируем типы и хуки из React
import { PropsWithChildren, useEffect } from 'react';
// Импортируем хук для навигации из Next.js
import { useRouter } from 'next/navigation';

/**
 * Компонент-обертка для страниц приложения
 * 
 * @component
 * @param {Object} props - Свойства компонента
 * @param {ReactNode} props.children - Дочерние элементы (контент страницы)
 * @param {boolean} [props.back=true] - Флаг отображения кнопки "Назад"
 * 
 * Пример использования:
 * ```tsx
 * <Page back={false}>
 *   <h1>Главная страница</h1>
 *   <p>Контент страницы</p>
 * </Page>
 * ```
 */
export function Page({ 
  children, 
  back = true // По умолчанию кнопка "Назад" включена
}: PropsWithChildren<{
  /**
   * Определяет, разрешено ли возвращаться с этой страницы
   * @default true
   */
  back?: boolean
}>) {
  // Получаем доступ к функциям навигации Next.js
  const router = useRouter();

  // Эффект для управления видимостью кнопки "Назад"
  useEffect(() => {
    // Показываем или скрываем кнопку в зависимости от пропса back
    if (back) {
      backButton.show(); // Показываем кнопку если back === true
    } else {
      backButton.hide(); // Скрываем кнопку если back === false
    }
  }, [back]); // Эффект перезапускается при изменении значения back

  // Эффект для обработки нажатия на кнопку "Назад"
  useEffect(() => {
    // Регистрируем обработчик нажатия
    return backButton.onClick(() => {
      router.back(); // Возвращаемся на предыдущую страницу
    });
    // Функция очистки вызовется автоматически при размонтировании
  }, [router]); // Эффект зависит от объекта router

  // Рендерим дочерние элементы без дополнительной обертки
  return <>{children}</>;
}