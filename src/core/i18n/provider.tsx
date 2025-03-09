/**
 * Провайдер интернационализации для React-компонентов
 * 
 * Этот модуль создает контекст локализации, который:
 * 1. Обеспечивает доступ к переводам во всех дочерних компонентах
 * 2. Автоматически обновляет интерфейс при смене языка
 * 3. Предоставляет утилиты для форматирования дат, чисел и т.д.
 */

// NextIntlClientProvider - компонент для клиентской части приложения
import { NextIntlClientProvider } from "next-intl";
// getMessages - функция для получения переводов на сервере
import { getMessages } from "next-intl/server";
import React from "react";

// Импортируем настройку временной зоны из конфигурации
import { timeZone } from "./config";

/**
 * Компонент-провайдер интернационализации
 * 
 * @component
 * @param {Object} props - Свойства компонента
 * @param {React.ReactNode} props.children - Дочерние компоненты, которые будут иметь доступ к переводам
 * 
 * Особенности:
 * - Асинхронный компонент (async) для загрузки переводов
 * - Использует TypeScript для типизации пропсов (React.FC<React.PropsWithChildren>)
 * - Автоматически обрабатывает серверный рендеринг
 * 
 * Использование:
 * <I18nProvider>
 *   <App />
 * </I18nProvider>
 */
const I18nProvider: React.FC<React.PropsWithChildren> = async ({
  children,
}) => {
  // Асинхронно получаем переводы для текущей локали
  const messages = await getMessages();

  return (
    // NextIntlClientProvider настраивает контекст локализации для клиентской части
    <NextIntlClientProvider 
      // Передаем загруженные переводы
      messages={messages} 
      // Устанавливаем временную зону для корректного форматирования дат
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
};

// Экспортируем компонент для использования в приложении
export { I18nProvider };
