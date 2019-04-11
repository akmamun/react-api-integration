## React API Integration with example of Fetch Axios
#### List of Todo API Routes
| Request | Endpoint |  Details | Example Source |
| --- | --- | --- | --- |
| `GET` | `http://127.0.0.1:5000/todos`| Get All| [API](src/components/Todo/Index.js) |
| `GET` | `http://127.0.0.1:5000/todos/todo_id`| Get Single Id| [API](src/components/Api.js)|
| `POST` | `http://127.0.0.1:5000/todos`| Insert One| [API](src/components/Api.js)|
| `PUT` | `http://127.0.0.1:5000/todos/todo_id`| Update One| [API](src/components/Api.js) |
| `DELETE` | `http://127.0.0.1:5000/todos/todo_id`| Delete One| [API](src/components/Api.js)|

### In [Api](src/api.js) File Define all routes
```js
   todos() {
        return {
            getOne: ({ id }) => axios.get(`${id}`),
            getAll: () => axios.get(baseUrl + todo),
            create: (data) => axios.post(url, data), //url and data
            update: (toUpdate) => axios.put(toUpdate),
            delete: ({ id }) => axios.delete(`${id}`)
        }
    }
```
```js
 api.todos().getAll()
```