/**
 * Корневой компонент Telegram Mini App
 * 
 * Этот файл содержит:
 * 1. Инициализацию окружения Telegram
 * 2. Настройку TON Connect
 * 3. Управление темой оформления
 * 4. Обработку локализации
 * 5. Обработку ошибок
 */

'use client'; // Директива для Next.js - компонент выполняется на клиенте

import { type PropsWithChildren, useEffect } from 'react';
import {
  initData,
  miniApp,
  useLaunchParams,
  useSignal,
} from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { useTelegramMock } from '@/hooks/useTelegramMock';
import { useDidMount } from '@/hooks/useDidMount';
import { useClientOnce } from '@/hooks/useClientOnce';
import { setLocale } from '@/core/i18n/locale';
import { init } from '@/core/init';

/**
 * Внутренний компонент с основной логикой приложения
 * 
 * @component
 * @param {PropsWithChildren} props - Свойства компонента с дочерними элементами
 * 
 * Компонент отвечает за:
 * - Эмуляцию окружения Telegram в режиме разработки
 * - Инициализацию SDK
 * - Настройку темы оформления
 * - Установку локализации
 */
function RootInner({ children }: PropsWithChildren) {
  // Определяем режим разработки
  const isDev = process.env.NODE_ENV === 'development';

  // Эмулируем окружение Telegram в режиме разработки
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  // Получаем параметры запуска приложения
  const lp = useLaunchParams();
  // Включаем отладку если режим разработки или указан параметр debug
  const debug = isDev || lp.startParam === 'debug';

  // Инициализируем библиотеку при первом рендере на клиенте
  useClientOnce(() => {
    init(debug);
  });

  // Подписываемся на изменение темы оформления
  const isDark = useSignal(miniApp.isDark);
  // Получаем данные о пользователе
  const initDataUser = useSignal(initData.user);

  // Устанавливаем локаль пользователя
  useEffect(() => {
    initDataUser && setLocale(initDataUser.languageCode);
  }, [initDataUser]); // Эффект перезапускается при изменении данных пользователя

  return (
    // Провайдер TON Connect для работы с блокчейном TON
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      {/* Корневой компонент UI с настройками темы и платформы */}
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        // Определяем платформу для специфичных UI элементов
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
      >
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  );
}

/**
 * Публичный корневой компонент приложения
 * 
 * @component
 * @param {PropsWithChildren} props - Свойства компонента с дочерними элементами
 * 
 * Особенности:
 * - Отображает загрузку до монтирования компонента
 * - Оборачивает приложение в обработчик ошибок
 * - Учитывает ограничения SSR в Telegram Mini Apps
 */
export function Root(props: PropsWithChildren) {
  // Telegram Mini Apps имеет ограничения с Server Side Rendering,
  // поэтому показываем загрузку на серверной стороне
  const didMount = useDidMount();

  return didMount ? (
    // После монтирования показываем приложение с обработкой ошибок
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props}/>
    </ErrorBoundary>
  ) : (
    // Используем утилитарные классы Tailwind вместо отдельных CSS стилей
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      Loading
    </div>
  );
}
