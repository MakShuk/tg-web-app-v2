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
      </List>
      <Footer />
    </Page>
  );
}
