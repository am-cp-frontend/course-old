# Practice micro reference

## Работа с объектом event

```javascript
$element.addEventListener('someEvent', function (event) {
    // event object is exposed here
})
```

### event.preventDefault()

Предотвращает стандартное поведение для события.

### event.stopPropagation()

Предотвращает распространение события по DOM-дереву.

### event.stopImmediatePropagation()

Предотвращает вызов остальных слушателей на этом же элементе.

### event.target

Возвращает элемент, который изначально отправил событие.

Так как это элемент, то с помомощью `event.target` можно
получить доступ ко всем свойствам этого элемента, например,
`value` итд.

### event.currentTarget

Элемент, к которому был привязан обработчик события 
(в котором мы и находимся).

### event.eventPhase

Фаза, в которой находится обрабатываемое событие
(bubbling, at_target, capturing, etc.)