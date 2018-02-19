# 2/19/18 Practice micro reference

## Перед тем, как начать:
- `npm install`/`yarn install`

## Запуск тестов:
- `npm test`/`yarn test`

## Что должно быть сделано:
### AbstractRouter &mdash; класс на прототипах
- свойство `on` &mdash; объект, будет заполнен функциями-хендлерами
- метод `routeMessage(message: Object)` &mdash; вызывает хендлер `on[message.type]` с `message.value`

### Logger &mdash; класс на прототипах
- свойство `_log` &mdash; массив объектов типа Message (`{type, value}`)
- метод `log(message: Object)` &mdash; логает сообщение
- метод `messages()` выдаёт текущий срез сообщений

### CompoundLogger &mdash; класс на прототипах
- смесь двух классов выше (используйте наследование)
- метод `route(message: Object)` &mdash; вызывает нужный хендлер и логает сообщение