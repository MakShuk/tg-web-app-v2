/**
 * Модуль эмуляции окружения Telegram для разработки
 * 
 * Этот модуль позволяет тестировать Telegram Mini Apps
 * в обычном браузере, имитируя окружение Telegram.
 */

import { useClientOnce } from '@/hooks/useClientOnce';
import {
  isTMA,
  type LaunchParams,
  mockTelegramEnv,
  parseInitData,
  retrieveLaunchParams,
} from '@telegram-apps/sdk-react';

/**
 * Хук для эмуляции окружения Telegram в режиме разработки
 * 
 * Особенности работы:
 * 1. Выполняется только на клиенте (через useClientOnce)
 * 2. Проверяет необходимость эмуляции
 * 3. Настраивает тестовое окружение с моковыми данными
 * 
 * ВАЖНО: Используется только в процессе разработки!
 */
export function useTelegramMock(): void {
  useClientOnce(() => {
    // Проверяем, не было ли уже создано моковое окружение
    // и не запущено ли приложение в реальном окружении Telegram
    if (!sessionStorage.getItem('env-mocked') && isTMA('simple')) {
      return;
    }

    // Пытаемся получить параметры запуска
    // Они могут быть:
    // 1. Уже применены ранее
    // 2. Переданы через URL-параметры
    // 3. Установлены вручную для тестирования
    let lp: LaunchParams | undefined;
    try {
      lp = retrieveLaunchParams();
    } catch (e) {
      // Если параметры не найдены, создаем тестовые данные
      
      // Формируем строку initData, которая обычно передается от Telegram
      // Содержит информацию о пользователе и контексте запуска
      const initDataRaw = new URLSearchParams([
        // Данные тестового пользователя
        ['user', JSON.stringify({
          id: 99281932,                  // ID пользователя
          first_name: 'Andrew',          // Имя
          last_name: 'Rogue',           // Фамилия
          username: 'rogue',            // Ник в Telegram
          language_code: 'en',          // Язык интерфейса
          is_premium: true,             // Премиум-статус
          allows_write_to_pm: true,     // Разрешение на личные сообщения
        })],
        // Технические параметры для валидации
        ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
        ['auth_date', '1716922846'],
        ['start_param', 'debug'],        // Параметр запуска
        ['chat_type', 'sender'],         // Тип чата
        ['chat_instance', '8428209589180549439'],
        ['signature', '6fbdaab833d39f54518bd5c3eb3f511d035e68cb'],
      ]).toString();

      // Создаем объект параметров запуска с тестовыми данными
      lp = {
        // Параметры темы оформления
        themeParams: {
          accentTextColor: '#6ab2f2',           // Цвет акцентного текста
          bgColor: '#17212b',                   // Цвет фона
          buttonColor: '#5288c1',               // Цвет кнопок
          buttonTextColor: '#ffffff',           // Цвет текста кнопок
          destructiveTextColor: '#ec3942',      // Цвет текста для опасных действий
          headerBgColor: '#17212b',            // Цвет фона заголовка
          hintColor: '#708499',                // Цвет подсказок
          linkColor: '#6ab3f3',                // Цвет ссылок
          secondaryBgColor: '#232e3c',         // Вторичный цвет фона
          sectionBgColor: '#17212b',           // Цвет фона секций
          sectionHeaderTextColor: '#6ab3f3',   // Цвет текста заголовков секций
          subtitleTextColor: '#708499',        // Цвет подзаголовков
          textColor: '#f5f5f5',                // Основной цвет текста
        },
        // Парсим и добавляем данные инициализации
        initData: parseInitData(initDataRaw),
        initDataRaw,
        version: '8',                          // Версия API
        platform: 'tdesktop',                  // Платформа (десктопный клиент)
      }
    }

    // Помечаем, что окружение было эмулировано
    sessionStorage.setItem('env-mocked', '1');
    // Применяем моковое окружение
    mockTelegramEnv(lp);
    
    // Выводим предупреждение о работе в режиме разработки
    console.warn(
      '⚠️ Обнаружено не-Telegram окружение, применена эмуляция. ' +
      'ВНИМАНИЕ: Эмуляция предназначена только для разработки. ' +
      'В production-сборке эта функциональность отключена, ' +
      'и приложение будет работать только внутри Telegram.'
    );
  });
}