/**
 * Компонент-предохранитель для обработки ошибок в React
 * 
 * ErrorBoundary перехватывает ошибки JavaScript в дочерних компонентах
 * и отображает резервный UI вместо сломанного дерева компонентов.
 */

import {
  Component,
  type ComponentType,
  type GetDerivedStateFromError,
  type PropsWithChildren,
} from 'react';

/**
 * Интерфейс свойств компонента ErrorBoundary
 * 
 * @interface ErrorBoundaryProps
 * @extends {PropsWithChildren} - Включает стандартное свойство children
 * @property {ComponentType<{ error: Error }>} fallback - Компонент для отображения при ошибке
 * 
 * Пример использования:
 * ```tsx
 * <ErrorBoundary fallback={ErrorPage}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export interface ErrorBoundaryProps extends PropsWithChildren {
  fallback: ComponentType<{ error: Error }>;
}

/**
 * Интерфейс состояния компонента ErrorBoundary
 * 
 * @interface ErrorBoundaryState
 * @property {Error} [error] - Объект ошибки, если она произошла
 */
interface ErrorBoundaryState {
  error?: Error;
}

/**
 * Компонент-предохранитель для обработки ошибок
 * 
 * Особенности:
 * 1. Перехватывает ошибки в фазе рендеринга
 * 2. Обрабатывает ошибки в методах жизненного цикла
 * 3. Не перехватывает ошибки в:
 *    - Обработчиках событий
 *    - Асинхронном коде
 *    - SSR
 *    - Самом компоненте-предохранителе
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Инициализация пустого состояния
  state: ErrorBoundaryState = {};

  /**
   * Статический метод для обработки ошибок в процессе рендеринга
   * Вызывается до рендеринга компонента при возникновении ошибки
   * 
   * @param {Error} error - Перехваченная ошибка
   * @returns {ErrorBoundaryState} Новое состояние с информацией об ошибке
   */
  // eslint-disable-next-line max-len
  static getDerivedStateFromError: GetDerivedStateFromError<ErrorBoundaryProps, ErrorBoundaryState> = (error) => ({ error });

  /**
   * Метод жизненного цикла для обработки пойманных ошибок
   * Вызывается после возникновения ошибки
   * 
   * Используется для:
   * - Логирования ошибок
   * - Отправки отчетов об ошибках
   * - Обновления состояния
   * 
   * @param {Error} error - Перехваченная ошибка
   */
  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  /**
   * Рендеринг компонента
   * 
   * Логика:
   * 1. Если есть ошибка - отображаем fallback компонент
   * 2. Если ошибки нет - отображаем дочерние компоненты
   * 
   * @returns {React.ReactNode} UI компонента
   */
  render() {
    const {
      state: {
        error,
      },
      props: {
        fallback: Fallback,
        children,
      },
    } = this;

    // Условный рендеринг: fallback при ошибке или дочерние компоненты
    return error ? <Fallback error={error} /> : children;
  }
}
