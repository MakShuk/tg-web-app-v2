import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
} from '@telegram-apps/sdk-react';

/**
 * Инициализирует приложение и настраивает его зависимости.
 * 
 * @param debug - Флаг для включения режима отладки
 *              true: включает отладочные инструменты и логирование
 *              false: отключает отладочные функции для продакшена
 * 
 * Основные этапы инициализации:
 * 1. Настройка режима отладки SDK
 * 2. Инициализация обработчиков событий Telegram
 * 3. Монтирование компонентов приложения
 * 4. Настройка CSS-переменных для темизации
 * 5. Подключение инструментов разработчика (в debug режиме)
 */
export function init(debug: boolean): void {
  // Устанавливаем режим отладки для @telegram-apps/sdk-react
  // Это влияет на уровень логирования и отображение отладочной информации
  $debug.set(debug);

  // Инициализируем SDK Telegram
  // Настраивает обработчики событий для разных платформ:
  // - Telegram Desktop (события окна, навигации)
  // - Android (системные события, жесты)
  // - iOS (нативные функции, взаимодействие с приложением)
  initSDK();

  // Монтируем основные компоненты приложения:
  
  // 1. Кнопка "Назад" - монтируется только если поддерживается платформой
  // Проверяем поддержку через backButton.isSupported() чтобы избежать ошибок
  backButton.isSupported() && backButton.mount();
  
  // 2. Mini App компонент - основной контейнер приложения
  // Обеспечивает базовую структуру и функциональность Telegram Mini App
  miniApp.mount();
  
  // 3. Параметры темы - отвечают за внешний вид приложения
  // Синхронизирует темы с настройками Telegram
  themeParams.mount();
  
  // 4. Восстанавливаем сохраненные данные инициализации
  // Например, параметры запуска, пользовательские настройки
  initData.restore();
  
  // 5. Монтируем viewport и настраиваем CSS-переменные для адаптивности
  // Используем Promise для асинхронной инициализации
  void viewport.mount().then(() => {
    // После успешного монтирования привязываем CSS-переменные
    // Например: --tg-viewport-height, --tg-viewport-stable-height
    viewport.bindCssVars();
  }).catch(e => {
    // Логируем ошибки инициализации viewport
    console.error('Ошибка при монтировании viewport:', e);
  });

  // Определяем CSS-переменные для компонентов
  // Эти переменные используются для:
  
  // 1. Mini App стилей (--tg-main-text-color, --tg-theme-bg-color и др.)
  miniApp.bindCssVars();
  
  // 2. Параметров темы (цвета, отступы, размеры согласно теме Telegram)
  themeParams.bindCssVars();

  // Подключаем Eruda - инструмент для отладки на мобильных устройствах
  // Загружается только в debug режиме через динамический импорт
  debug && import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);
}