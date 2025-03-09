/**
 * Модуль управления локализацией через cookies
 * 
 * Директива "use server" обязательна для серверных компонентов Next.js:
 * - Указывает, что код выполняется только на сервере
 * - Позволяет использовать серверные API (например, доступ к cookies)
 * - Обеспечивает безопасность, изолируя серверный код
 */
"use server";

// Импортируем API для работы с cookies из Next.js
import { cookies } from "next/headers";

// Импортируем локаль по умолчанию из конфигурации
import { defaultLocale } from "./config";
// Импортируем тип Locale для типизации
import type { Locale } from "./types";

/**
 * Имя cookie для хранения текущей локализации
 * 
 * В данной реализации локаль хранится в cookie, но также можно
 * использовать другие источники:
 * - База данных
 * - Внешний API
 * - Локальное хранилище
 * - Параметры URL
 */
const COOKIE_NAME = "NEXT_LOCALE";

/**
 * Получает текущую локаль пользователя
 * 
 * @returns Promise<string> - Промис, возвращающий:
 * - Значение локали из cookie, если оно существует
 * - Локаль по умолчанию, если cookie не найдена
 * 
 * Использование:
 * const currentLocale = await getLocale();
 */
const getLocale = async () => {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
};

/**
 * Устанавливает новую локаль в cookie
 * 
 * @param locale - Новая локаль для установки
 *                 Если не указана или невалидна, используется локаль по умолчанию
 * 
 * Приведение типа (as Locale) гарантирует, что в cookie
 * попадает только валидное значение локали
 * 
 * Использование:
 * await setLocale('ru'); // Установить русский язык
 * await setLocale(); // Сбросить на язык по умолчанию
 */
const setLocale = async (locale?: string) => {
  cookies().set(COOKIE_NAME, locale as Locale || defaultLocale);
};

// Экспортируем функции для использования в других модулях
export { getLocale, setLocale };
