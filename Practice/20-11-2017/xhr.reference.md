# API
### URL `https://api.github.com/users/:username` 
`:username` — имя пользователя, информацию о котором вы хотите получить.
Отравлять надо `GET` запрос.

### Пример ответа
```json
{
  "login": "VsevolodTrofimov",
  "id": 10118898,
  "avatar_url": "https://avatars1.githubusercontent.com/u/10118898?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/VsevolodTrofimov",
  "html_url": "https://github.com/VsevolodTrofimov",
  "followers_url": "https://api.github.com/users/VsevolodTrofimov/followers",
  "following_url": "https://api.github.com/users/VsevolodTrofimov/following{/other_user}",
  "gists_url": "https://api.github.com/users/VsevolodTrofimov/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/VsevolodTrofimov/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/VsevolodTrofimov/subscriptions",
  "organizations_url": "https://api.github.com/users/VsevolodTrofimov/orgs",
  "repos_url": "https://api.github.com/users/VsevolodTrofimov/repos",
  "events_url": "https://api.github.com/users/VsevolodTrofimov/events{/privacy}",
  "received_events_url": "https://api.github.com/users/VsevolodTrofimov/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Vsevolod Trofimov",
  "company": null,
  "blog": "",
  "location": "Russia, St. Petersburg",
  "email": null,
  "hireable": true,
  "bio": null,
  "public_repos": 19,
  "public_gists": 1,
  "followers": 4,
  "following": 2,
  "created_at": "2014-12-08T16:42:54Z",
  "updated_at": "2017-11-14T18:35:03Z"
}
```

# XHR
Прототип (По API аналогичен классу)
```javascript
const xhr = new XMLHttpRequest()
```

Методы
```javascript
xhr.open(method, url) // Узать Responce Starting line
xhr.send(body) // Отправить запрос (body опционален)
xhr.abort() // Прервать отправку запроса (после send)
```

Поля
```javascript
xhr.onreadystatechange = cb() // Подписаться на обновления состояния запроса

xhr.readyState // Степень "Готовности запроса"

xhr.responseText // Ответ приведенный к строке
xhr.response // Ответ в "сыром" виде
xhr.responseType //Тип сырого ответа

xhr.status // Код статуса ответа (например 200)
xhr.statusText //Код ответа и расшифровка (например "200 OK")
```


Возможные readyState смотри в [полном референсе](xhr-reference)


[xhr-reference]: https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest