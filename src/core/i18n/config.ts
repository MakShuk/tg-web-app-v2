/**
 * Конфигурация интернационализации (i18n) приложения
 */

/**
 * Язык по умолчанию для приложения
 * Используется когда:
 * 1. Приложение запускается в первый раз
 * 2. Не удалось определить предпочитаемый язык пользователя
 * 3. Выбранный пользователем язык не поддерживается
 */
export const defaultLocale = 'en';

/**
 * Часовой пояс по умолчанию
 * Используется для:
 * - Форматирования дат и времени
 * - Расчета временных интервалов
 * - Корректного отображения времени для пользователей
 */
export const timeZone = 'Europe/Amsterdam';

/**
 * Список поддерживаемых языков
 * 
 * as const - TypeScript модификатор, который:
 * 1. Делает массив неизменяемым (readonly)
 * 2. Определяет конкретные строковые литералы вместо общего типа string
 * 3. Позволяет TypeScript точно определять типы при использовании этих значений
 * 
 * Пример использования:
 * type SupportedLocale = typeof locales[number]; // 'en' | 'ru'
 */
export const locales = [defaultLocale, 'ru'] as const;

/**
 * Карта локализаций с человекочитаемыми названиями
 * Используется в интерфейсе для:
 * - Отображения списка доступных языков
 * - Переключателя языков
 * - Отображения текущего выбранного языка
 * 
 * Структура каждого элемента:
 * - key: уникальный идентификатор языка (соответствует значениям из locales)
 * - title: отображаемое название языка на его родном языке
 */
export const localesMap = [
  { key: 'en', title: 'English' },
  { key: 'ru', title: 'Русский' },
];
