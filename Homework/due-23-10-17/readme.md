# Домашнее задание на 16 октября 2017

## Сложность: Classic

Вам необходимо сверстать страницу по готовому дизайну.

Примените `display: flex` при решении этого задания.
Про `flex` и всё, связанное с ним, можете прочитать по ссылкам,
которые лежат в Slack.

#### Кроме того, с флексбоксами можно поиграться [тут][flexboxfroggy], что мы _очень рекомендуем_.

![то, что должно получиться][result-img]

### Текст

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam eaque ipsa, 
quae ab illo inventore veritatis et quasi architecto beatae vitae 
dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
dolores eos, qui ratione voluptatem sequi nesciunt, neque 
porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, 
consectetur, adipisci velit, sed quia non numquam eius modi tempora 
incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut 
enim ad minima veniam, quis nostrum exercitationem ullam corporis 
suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis 
autem vel eum iure reprehenderit, qui in ea voluptate velit esse, 
quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, 
quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio 
dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti 
atque corrupti, quos dolores et quas molestias excepturi sint, 
obcaecati cupiditate non provident, similique sunt in culpa, qui 
officia deserunt mollitia animi, id est laborum et dolorum fuga. Et 
harum quidem rerum facilis est et expedita distinctio. Nam libero 
tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, 
quo minus id, quod maxime placeat, facere possimus, omnis voluptas 
assumenda est, omnis dolor repellendus. Temporibus autem quibusdam 
et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut 
et voluptates repudiandae sint et molestiae non recusandae. Itaque 
earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
voluptatibus maiores alias consequatur aut perferendis doloribus 
asperiores repellat.

### Указания

В ваш HTML-файл надо добавить этот тег в `<head>`:

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
```

А вверху вашего CSS-файла вам нужно поместить следующий код:

```css

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
```

Вкупе это подключает шрифт Roboto, применяет его ко всему документу и убирает лишние
отступы, которые автоматически добавляет браузер.

### Размеры

#### Верхний синий блок

Верхняя синяя "менюшка" всегда должна быть наверху страницы, даже если появляется
полоса прокрутки. 

- Ширина `100%`
- Цвет фона `#4516c5`
- Цвет шрифта `white`
- Размер шрифта `2rem`
- Отступы внутри `1.4rem`
- `z-index: 1` (это обязательно понадобится, чтобы текст не заползал на блок при прокрутке)

#### Контент

- Ширина `80%` (вместе с датой)
- Отступ от верхнего края страницы `7rem` (обратите внимание, что понадобится указать его
как `margin: 7rem auto`, тогда блок будет отцентрирован, так как у него фиксированная ширина)
- Размер шрифта заголовка `2.7rem`
- Заголовок должен быть полужирным
- Отступ текста от нижнего края заголовка (т.е. отступ сверху) `1rem`
- Размер шрифта блока с датой `1rem`
- Отступы внутри блока с датой `.5rem`
- `border-radius: .3rem` -- закругления блока с датой
- Цвет фона блока с датой `#ddd`
- Выравнивание текста внутри блока с датой по центру
- Отступ слева заголовка и текста от даты `.7rem`

[result-img]: https://github.com/am-cp-frontend/course/raw/master/Homework/due-23-10-17/task.png
[flexboxfroggy]: http://flexboxfroggy.com