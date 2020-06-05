## React API Integration 
Demo Link [https://codesandbox.io/s/react-api-integration-v1-hlb08](https://codesandbox.io/s/react-api-integration-v1-hlb08)
### Integrate API from [flask-pymongo-validator](https://github.com/mrxmamun/flask-pymongo-validator.git)
#### List of Todo API Routes
| Request | Endpoint |  Details | Example Source |
| --- | --- | --- | --- |
| `GET` | `http://127.0.0.1:5000/api/v1/todos`| Get All| [Todo List](src/components/todo/TodoList.js) |
| `GET` | `http://127.0.0.1:5000/api/v1/todos/todo_id`| Get Single Id| [Todo](src/components/todo/Todo.js)|
| `POST` | `http://127.0.0.1:5000/api/v1/todos`| Insert One| [Add Todo](src/components/todo/AddTodo.js)|
| `PUT` | `http://127.0.0.1:5000/api/v1/todos/todo_id`| Update One| [Update Todo](src/components/todo/Edit.js) |
| `DELETE` | `http://127.0.0.1:5000/api/v1/todos/todo_id`| Delete One| [Delete Todo](src/components/todo/Todo.js)|

### In [Api](src/api.js) File Define all routes
```js
import axios from "axios";

/* description: this function for callback api endpoint
                 contains GET,POST,PUT, DELETE requests via axios package

   params: id , data
         - getOne method need only id params
         - getAll method no need any param
         - create method need only data param
         - updateByID method need both id and data params
         - update method need only data param
         - delete method also need only id param

   return: getOne, getAll, updateByID, update, delete
*/

export default {
    endpoint(url) {
        url = "route.apiBase" + url; //concat base url and url with base api endpoint
        return {
            getOne: (id) => axios.get(url + `/${id}`), //id_url
            getAll: () => axios.get(url),
            create: (data) => axios.post(url, data), //url, data
            updateByID: (id, data) => axios.put(url + `/${id}`, data), //url, data
            update: (data) => axios.put(url, data),  // without id
            delete: (id) => axios.delete(url + `/${id}`),
        }
    },
}

```
### Uses of route
```js
api.endpoint(url).getAll()
api.endpoint(url).getOne({id})
api.endpoint(url).create( data)
api.endpoint(url).update({ id }, data)
api.endpoint(url)).delete({ id })
```
