/**
 * Импортируем необходимые утилиты и компоненты:
 * - isRGB: функция для проверки является ли строка RGB цветом
 * - Cell, Checkbox, Section: компоненты из UI библиотеки Telegram
 * - FC, ReactNode: типы React для функциональных компонентов и узлов
 */
import { isRGB } from '@telegram-apps/sdk-react';
import { Cell, Checkbox, Section } from '@telegram-apps/telegram-ui';
import type { FC, ReactNode } from 'react';

/**
 * Импортируем локальные компоненты:
 * - RGB: компонент для отображения цветов
 * - Link: компонент для отображения ссылок
 */
import { RGB } from '@/components/RGB/RGB';
import { Link } from '@/components/Link/Link';

import './styles.css';

/**
 * Тип для описания строки данных в компоненте
 * 
 * Структура:
 * - title: заголовок строки (обязательное поле)
 * - Плюс одна из двух возможных конфигураций:
 *   1. { type: 'link', value?: string } - для отображения ссылок
 *   2. { value: ReactNode } - для отображения любого другого контента
 */
export type DisplayDataRow =
  & { title: string }
  & (
  | { type: 'link'; value?: string }
  | { value: ReactNode }
  )

/**
 * Интерфейс пропсов компонента DisplayData
 * 
 * @property header - Опциональный заголовок секции
 * @property footer - Опциональный футер секции (не используется в текущей реализации)
 * @property rows - Массив строк данных для отображения
 */
export interface DisplayDataProps {
  header?: ReactNode;
  footer?: ReactNode;
  rows: DisplayDataRow[];
}

/**
 * Компонент DisplayData - универсальный компонент для отображения данных в формате список
 * 
 * Особенности:
 * 1. Отображает данные в виде секции с ячейками
 * 2. Поддерживает различные типы данных:
 *    - Пустые значения (отображается как "empty")
 *    - Ссылки (через компонент Link)
 *    - RGB цвета (через компонент RGB)
 *    - Булевы значения (через компонент Checkbox)
 *    - Любой другой React контент
 * 
 * @param header - Заголовок секции
 * @param rows - Массив строк данных для отображения
 */
export const DisplayData: FC<DisplayDataProps> = ({ header, rows }) => (
  <Section header={header}>
    {rows.map((item, idx) => {
      // Определяем, какой контент нужно отобразить
      let valueNode: ReactNode;

      if (item.value === undefined) {
        // Для пустых значений показываем "empty" курсивом
        valueNode = <i>empty</i>;
      } else {
        if ('type' in item) {
          // Если указан тип 'link', отображаем ссылку
          valueNode = <Link href={item.value}>Open</Link>;
        } else if (typeof item.value === 'string') {
          // Для строковых значений проверяем, является ли значение RGB цветом
          valueNode = isRGB(item.value)
            ? <RGB color={item.value}/> // Если да - отображаем как цвет
            : item.value;               // Если нет - отображаем как текст
        } else if (typeof item.value === 'boolean') {
          // Булевы значения отображаем как неактивный чекбокс
          valueNode = <Checkbox checked={item.value} disabled/>;
        } else {
          // Все остальные типы отображаем как есть
          valueNode = item.value;
        }
      }

      return (
        <Cell
          className='display-data__line' // Стилизация строки
          subhead={item.title} // Заголовок строки
          readOnly // Ячейка только для чтения
          multiline={true} // Поддержка многострочного контента
          key={idx}
        >
          <span className='display-data__line-value'>
            {valueNode}
          </span>
        </Cell>
      );
    })}
  </Section>
);
