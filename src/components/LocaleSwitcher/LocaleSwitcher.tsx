'use client'; // Указываем, что это клиентский компонент Next.js

/**
 * Импортируем необходимые зависимости:
 * - Select: компонент выпадающего списка из UI библиотеки Telegram
 * - useLocale: хук для получения текущей локали из next-intl
 * - FC: тип для функционального компонента React
 */
import { Select } from '@telegram-apps/telegram-ui';
import { useLocale } from 'next-intl';
import { FC } from 'react';

/**
 * Импортируем локальные зависимости:
 * - localesMap: массив доступных локализаций с их ключами и заголовками
 * - setLocale: функция для изменения текущей локализации
 * - Locale: тип для поддерживаемых локализаций
 */
import { localesMap } from '@/core/i18n/config';
import { setLocale } from '@/core/i18n/locale';
import { Locale } from '@/core/i18n/types';

/**
 * Компонент LocaleSwitcher - переключатель языков приложения
 * 
 * Функциональность:
 * 1. Отображает выпадающий список с доступными языками
 * 2. Показывает текущий выбранный язык
 * 3. При выборе нового языка автоматически обновляет локализацию приложения
 * 
 * Использование:
 * <LocaleSwitcher />
 */
export const LocaleSwitcher: FC = () => {
  // Получаем текущую локаль приложения через хук next-intl
  const locale = useLocale();

  /**
   * Обработчик изменения выбранной локали
   * @param value - ключ новой локали (например, 'en' или 'ru')
   */
  const onChange = (value: string) => {
    // Приводим значение к типу Locale и устанавливаем новую локаль
    const locale = value as Locale;
    setLocale(locale);
  };

  return (
    <Select 
      value={locale} // Текущая выбранная локаль
      onChange={({ target }) => onChange(target.value)} // Обработчик изменения значения
    >
      {/* Создаем список опций из доступных локализаций */}
      {localesMap.map((locale) => (
        <option 
          key={locale.key} // Уникальный ключ для React
          value={locale.key} // Значение локали (например, 'en' или 'ru')
        >
          {locale.title} {/* Отображаемое название языка */}
        </option>
      ))}
    </Select>
  );
};
