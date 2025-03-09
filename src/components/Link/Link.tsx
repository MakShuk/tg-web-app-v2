/**
 * Импортируем необходимые функции и типы:
 * - openLink: функция для открытия ссылок через Telegram Mini Apps
 * - classNames: утилита для объединения CSS классов
 */
import { openLink, classNames } from '@telegram-apps/sdk-react';

/**
 * Импортируем типы React и хук useCallback:
 * - FC: тип функционального компонента
 * - MouseEventHandler: тип обработчика событий мыши
 * - JSX: типы для JSX элементов
 * - useCallback: хук для мемоизации функций
 */
import { type FC, type MouseEventHandler, type JSX, useCallback } from 'react';

/**
 * Импортируем компонент Link из Next.js и его типы
 * NextLinkProps содержит все пропсы, которые принимает Link из Next.js
 */
import { type LinkProps as NextLinkProps, default as NextLink } from 'next/link';

// Импортируем стили компонента
import './styles.css';

/**
 * Определяем тип пропсов для нашего компонента Link:
 * - Расширяем пропсы NextLink
 * - Добавляем все пропсы HTML элемента <a>, кроме href (он уже есть в NextLinkProps)
 */
export interface LinkProps extends NextLinkProps, Omit<JSX.IntrinsicElements['a'], 'href'> {
}

/**
 * Компонент Link - обертка над NextLink с дополнительной логикой для Telegram Mini Apps
 * 
 * Особенности:
 * 1. Поддерживает все пропсы NextLink и HTML-ссылки
 * 2. Автоматически определяет внешние ссылки
 * 3. Открывает внешние ссылки через Telegram Mini Apps API
 * 4. Применяет стандартные стили через класс 'link'
 * 
 * @param className - Дополнительные CSS классы
 * @param propsOnClick - Пользовательский обработчик клика
 * @param href - URL ссылки (строка или объект с параметрами)
 * @param rest - Остальные пропсы, которые будут переданы в NextLink
 */
export const Link: FC<LinkProps> = ({
  className,
  onClick: propsOnClick,
  href,
  ...rest
}) => {
  /**
   * Обработчик клика по ссылке
   * Определяет, является ли ссылка внешней, и если да - открывает её через Telegram Mini Apps
   */
  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
    // Вызываем пользовательский обработчик клика, если он был передан
    propsOnClick?.(e);

    /**
     * Формируем полный путь из href
     * href может быть строкой или объектом с параметрами pathname, search и hash
     */
    let path: string;
    if (typeof href === 'string') {
      path = href;
    } else {
      const { search = '', pathname = '', hash = '' } = href;
      path = `${pathname}?${search}#${hash}`;
    }

    // Создаем объекты URL для целевой и текущей страницы
    const targetUrl = new URL(path, window.location.toString());
    const currentUrl = new URL(window.location.toString());

    // Проверяем, является ли ссылка внешней
    // Ссылка считается внешней, если отличается протокол или хост
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    // Если ссылка внешняя:
    if (isExternal) {
      e.preventDefault(); // Предотвращаем стандартное поведение
      openLink(targetUrl.toString()); // Открываем через Telegram Mini Apps API
    }
  }, [href, propsOnClick]);

  return (
    <NextLink
      {...rest} // Передаем все остальные пропсы
      href={href} // URL ссылки
      onClick={onClick} // Наш обработчик клика
      className={classNames(className, 'link')} // Объединяем классы
    />
  );
};
