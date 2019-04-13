## React API Integration with example of Fetch Axios
#### List of Todo API Routes
| Request | Endpoint |  Details | Example Source |
| --- | --- | --- | --- |
| `GET` | `http://127.0.0.1:5000/todos`| Get All| [Todo List](src/components/todo/TodoList.js) |
| `GET` | `http://127.0.0.1:5000/todos/todo_id`| Get Single Id| [Todo](src/components/todo/Todo.js)|
| `POST` | `http://127.0.0.1:5000/todos`| Insert One| [Add Todo](src/components/todo/AddTodo.js)|
| `PUT` | `http://127.0.0.1:5000/todos/todo_id`| Update One| [Update Todo](src/components/todo/Edit.js) |
| `DELETE` | `http://127.0.0.1:5000/todos/todo_id`| Delete One| [Delete Todo](src/components/todo/Todo.js)|

### In [Api](src/api.js) File Define all routes
```js
apiUrl =  "http://127.0.0.1:5000/api/v1/";
todos = apiUrl + "todos";

todos() {
        return {
            getOne: ({id}) => axios.get(todos + `/${id}`), //id_url
            getAll: () => axios.get(todos),
            create: (data) => axios.post(todos, data), //url, data
            update: ({ id }, data) => axios.put(todos + `/${id}`, data), //url, data
            delete: ({ id }) => axios.delete(todos + `/${id}`)//id_url
        }
    }
```
### Uses of route
```js
api.todos().getAll()
api.todos().getOne({id})
api.todos().create( data)
api.todos().update({ id }, data)
api.todos().delete({ id })
```