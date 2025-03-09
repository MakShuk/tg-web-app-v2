'use client';

import { Section, Cell, List } from '@telegram-apps/telegram-ui';

import { Link } from '@/components/Link/Link';
import { Page } from '@/components/Page';
import FunctionCard from '@/components/FunctionCard/FunctionCard';
import Footer from '@/components/Footer/Footer';

export default function Home() {


  return (
    <Page back={false}>
      <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <FunctionCard
            title="Telegram Mini Apps"
            subtitle="Узнайте больше о возможностях платформы"
            imageAlt="Telegram Mini Apps Features"
          />
        </Section>
        <Section
          header="Данные запуска приложения"
          footer="Эти страницы помогают разработчику узнать больше о текущей информации запуска"
        >
          <Link href="/init-data">
            <Cell subtitle="Данные пользователя, информация о чате, технические данные">
              Данные инициализации
            </Cell>
          </Link>
          <Link href="/launch-params">
            <Cell subtitle="Идентификатор платформы, версия Mini Apps и т.д.">
              Параметры запуска
            </Cell>
          </Link>
          <Link href="/theme-params">
            <Cell subtitle="Информация о палитре приложения Telegram">
              Параметры темы
            </Cell>
          </Link>
        </Section>
      </List>
      <Footer />
    </Page>
  );
}
