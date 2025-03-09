# Шаблон Telegram Mini Apps на Next.js
Этот шаблон демонстрирует, как разработчики могут создавать веб-приложения на платформе Telegram Mini Apps, используя следующие технологии и библиотеки:

> Примечание: Этот проект является форком репозитория [nextjs-template](https://github.com/Telegram-Mini-Apps/nextjs-template)

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI)

> Шаблон создан с использованием [pnpm](https://pnpm.io/). Поэтому для этого проекта
> необходимо использовать именно его. При использовании других пакетных менеджеров
> вы получите соответствующую ошибку.

## Установка зависимостей

После клонирования этого шаблона необходимо установить зависимости проекта с помощью команды:

```Bash
pnpm install
```

## Скрипты

Этот проект содержит следующие скрипты:

- `dev`. Запускает приложение в режиме разработки.
- `dev:https`. Запускает приложение в режиме разработки с использованием самоподписанного SSL-сертификата.
- `build`. Собирает приложение для продакшена.
- `start`. Запускает сервер Next.js в продакшен-режиме.
- `lint`. Запускает [eslint](https://eslint.org/) для проверки соответствия кода требуемым стандартам качества.

Для запуска скрипта используйте команду `pnpm run`:

```Bash
pnpm run {script}
# Пример: pnpm run build
```

## Создание бота и Mini App

Прежде чем начать, убедитесь, что вы уже создали Telegram бота. Вот 
[подробное руководство](https://docs.telegram-mini-apps.com/platform/creating-new-app) 
о том, как это сделать.

## Запуск

Хотя Mini Apps предназначены для работы внутри [приложений Telegram](https://docs.telegram-mini-apps.com/platform/about#supported-applications),
вы можете разрабатывать и тестировать их вне Telegram в процессе разработки.

Для запуска приложения в режиме разработки используйте скрипт `dev`:

```bash
pnpm run dev
```

После этого вы увидите подобное сообщение в терминале:

```bash
▲ Next.js 14.2.3
- Local:        http://localhost:3000

✓ Starting...
✓ Ready in 2.9s
```

Для просмотра приложения необходимо открыть ссылку `Local`
(`http://localhost:3000` в этом примере) в вашем браузере.

Важно отметить, что некоторые библиотеки в этом шаблоне, такие как
`@telegram-apps/sdk`, не предназначены для использования вне Telegram.

Тем не менее, они работают корректно. Это происходит потому, что
файл `src/hooks/useTelegramMock.ts`, импортируемый в компоненте `Root`
приложения, использует функцию `mockTelegramEnv` для имитации среды
Telegram. Этот трюк убеждает приложение, что оно работает в среде
Telegram. Поэтому будьте осторожны и не используйте эту функцию в
продакшен-режиме, если вы полностью не понимаете последствия.

### Запуск внутри Telegram

Хотя приложение можно запускать вне Telegram, рекомендуется разрабатывать
его внутри Telegram для наиболее точного представления о его работе в
реальных условиях.

Для запуска приложения внутри Telegram, [@BotFather](https://t.me/botfather)
требует HTTPS-ссылку.

Этот шаблон уже предоставляет решение.

Чтобы получить ссылку с протоколом HTTPS, используйте скрипт `dev:https`:

```bash
$ pnpm run dev:https

▲ Next.js 14.2.3
- Local:        https://localhost:3000

✓ Starting...
✓ Ready in 2.4s
```

При посещении ссылки `Local` (`https://localhost:3000` в этом примере) в вашем
браузере вы увидите следующее предупреждение:

![Предупреждение SSL](assets/ssl-warning.png)

Это предупреждение браузера нормально и его можно безопасно игнорировать, пока сайт
безопасен. Нажмите кнопку `Proceed to localhost (unsafe)` для продолжения и просмотра
приложения.

После того, как приложение отображается корректно, отправьте
ссылку `https://127.0.0.1:3000` (обратите внимание, что `https://localhost:3000` считается
недействительной для BotFather) в качестве ссылки Mini App для [@BotFather](https://t.me/botfather).
Затем перейдите на [https://web.telegram.org/k/](https://web.telegram.org/k/),
найдите вашего бота и запустите Telegram Mini App. Этот подход обеспечивает полноценный
опыт разработки.

## Развертывание

Самый простой способ развернуть ваше приложение Next.js - использовать
[платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
от создателей Next.js.

Ознакомьтесь с [документацией по развертыванию Next.js](https://nextjs.org/docs/deployment)
для получения дополнительной информации.

## Полезные ссылки

- [Документация платформы](https://docs.telegram-mini-apps.com/)
- [Документация @telegram-apps/sdk-react](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react)
- [Чат сообщества разработчиков Telegram](https://t.me/devs)