/**
 * Конфигурация интернационализации для Next.js приложения
 * 
 * Этот файл отвечает за:
 * 1. Настройку обработки запросов с учетом локализации
 * 2. Загрузку правильных языковых файлов
 * 3. Определение текущей локали для каждого запроса
 */

import { getRequestConfig } from "next-intl/server";

// Импортируем необходимые константы и функции из локальных модулей
import { defaultLocale, locales } from "./config";
import { getLocale } from "./locale";
import type { Locale } from "./types";

/**
 * Создаем конфигурацию для обработки интернационализированных запросов
 * 
 * getRequestConfig - функция next-intl, которая:
 * - Вызывается для каждого серверного запроса
 * - Определяет локаль и загружает соответствующие переводы
 * - Обеспечивает доступность переводов в компонентах
 */
const i18nRequestConfig = getRequestConfig(async () => {
  // Асинхронно получаем текущую локаль пользователя
  // as Locale - приведение типа для TypeScript, гарантирующее,
  // что локаль соответствует определенному типу
  const locale = await getLocale() as Locale;

  return {
    // Устанавливаем определенную локаль
    locale,

    // Загружаем файл с переводами в зависимости от условий:
    messages:
      // Если:
      // 1. Текущая локаль совпадает с локалью по умолчанию ИЛИ
      // 2. Текущая локаль отсутствует в списке поддерживаемых локалей
      locale === defaultLocale || !locales.includes(locale)
        // То используем переводы для локали по умолчанию
        ? (await import(`@public/locales/${defaultLocale}.json`)).default
        // Иначе загружаем переводы для текущей локали
        : (await import(`@public/locales/${locale}.json`)).default,
  };
});

// Экспортируем конфигурацию для использования в приложении
export default i18nRequestConfig;
