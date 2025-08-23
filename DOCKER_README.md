# Docker Setup для SRTech Frontend

## Требования

- Docker
- Docker Compose

## Быстрый запуск

1. Скопируйте файл с переменными окружения:
```bash
cp env.example .env
```

2. Отредактируйте `.env` файл, указав ваши значения:
```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# WebSocket Configuration
NEXT_PUBLIC_WS_URL=ws://localhost:8000

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Environment
NODE_ENV=production
```

3. Запустите приложение:
```bash
docker-compose up --build
```

4. Откройте браузер и перейдите по адресу: http://localhost:3000

## Команды

### Запуск в фоновом режиме
```bash
docker-compose up -d --build
```

### Остановка
```bash
docker-compose down
```

### Просмотр логов
```bash
docker-compose logs -f frontend
```

### Пересборка образа
```bash
docker-compose build --no-cache frontend
```

## Переменные окружения

| Переменная | Описание | По умолчанию |
|------------|----------|--------------|
| `NEXT_PUBLIC_API_URL` | URL API бэкенда | http://localhost:8000 |
| `NEXT_PUBLIC_APP_URL` | URL фронтенд приложения | http://localhost:3000 |
| `NEXT_PUBLIC_WS_URL` | URL WebSocket соединения | ws://localhost:8000 |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Публичный ключ Stripe | - |

## Структура файлов

- `frontend/Dockerfile` - Dockerfile для сборки фронтенда
- `docker-compose.yml` - Конфигурация Docker Compose
- `env.example` - Пример файла с переменными окружения
- `frontend/.dockerignore` - Исключения для Docker контекста

## Разработка

Для разработки рекомендуется использовать локальный сервер:

```bash
cd frontend
npm install
npm run dev
```

Docker setup предназначен для продакшн окружения.
