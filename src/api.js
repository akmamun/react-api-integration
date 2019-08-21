const axios = require('axios')
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
const apiUrl =  "http://127.0.0.1:5000/api/v1";
const todos = apiUrl + "/todos";

export default {
    todos() {
        return {
            getOne: ({id}) => axios.get(todos + `/${id}`), //id_url 
            getAll: () => axios.get(todos),
            create: (data) => axios.post(todos, data), //url, data
            update: ({ id }, data) => axios.put(todos + `/${id}`, data), //url, data
            delete: ({ id }) => axios.delete(todos + `/${id}`)//id_url
        }
    }
}
