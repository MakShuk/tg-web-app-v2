/**
 * Импортируем необходимые типы и утилиты:
 * - classNames: утилита для объединения CSS классов
 * - RGBType: тип для представления RGB цвета из SDK Telegram
 * - FC: тип для функционального компонента React
 */
import { classNames, type RGB as RGBType } from '@telegram-apps/sdk-react';
import type { FC } from 'react';

// Импортируем стили компонента
import './styles.css';

/**
 * Определяем тип пропсов компонента:
 * - Наследуем все свойства div элемента (через JSX.IntrinsicElements['div'])
 * - Добавляем обязательное свойство color типа RGBType для отображения цвета
 */
export type RGBProps = JSX.IntrinsicElements['div'] & {
  color: RGBType;
};

/**
 * Компонент RGB - отображает цветной индикатор с текстовым представлением RGB цвета
 * 
 * @param color - RGB цвет для отображения (например: "rgb(255, 0, 0)")
 * @param className - дополнительные CSS классы
 * @param rest - остальные пропсы, которые будут переданы корневому элементу span
 * 
 * Структура компонента:
 * - Внешний span с классами 'rgb' и пользовательскими классами
 * - Вложенный элемент i с классом 'rgb__icon' и установленным цветом фона
 * - Текстовое представление RGB цвета
 */
export const RGB: FC<RGBProps> = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames('rgb', className)}>
    <i className='rgb__icon' style={{ backgroundColor: color }}/>
    {color}
  </span>
);
