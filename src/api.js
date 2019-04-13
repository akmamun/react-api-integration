const axios = require('axios')

const apiUrl =  "http://127.0.0.1:5000/api/v1/";
const todos = apiUrl + "todos";

export default {
    todos() {
        return {
            getOne: ({id}) => axios.get(todos + `/${id}`), //id_url 
            getAll: () => axios.get(todos),
            create: (data) => axios.post(todos, data), //url, data
            update: ({ id }, data) => axios.put(todos + `/${id}`, data), //url, data
            delete: ({ id }) => axios.delete(`${id}`)
        }
    }
}
// export default {
//     getItems: () => {
//         return axios.get('http://127.0.0.1:5000/todos/')
//             .then(response => response.data);
//     },
//     otherApiCall: (params) => {
//     }
