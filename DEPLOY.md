# Инструкции по деплою

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите код в репозиторий
3. В настройках репозитория включите GitHub Pages
4. Выберите источник "GitHub Actions"

## Деплой на Vercel

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите ваш GitHub репозиторий
3. Vercel автоматически определит, что это React приложение
4. Нажмите "Deploy"

## Деплой на Netlify

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Подключите ваш GitHub репозиторий
3. Настройте команду сборки: `npm run build`
4. Настройте папку публикации: `build`
5. Нажмите "Deploy site"

## Локальная сборка

```bash
npm install
npm run build
```

Собранные файлы будут в папке `build/`
