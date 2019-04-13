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
apiUrl =  "http://127.0.0.1:5000/api/v1/";
todos = apiUrl + "todos";

todos() {
        return {
            getOne: ({id}) => axios.get(todos + `/${id}`), //url, id
            getAll: () => axios.get(todos), //url
            create: (data) => axios.post(todos, data), //url, data
            update: (toUpdate) => axios.put(toUpdate),
            delete: ({ id }) => axios.delete(`${id}`)
        }
    }
```js
 api.todos().getAll()
```