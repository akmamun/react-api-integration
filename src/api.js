const axios = require('axios')

const baseUrl =  "http://127.0.0.1:5000/";
const todo = baseUrl + "todos";

export default {
   
    todos() {
        return {
            getOne: ({ id }) => axios.get(`${id}`),
            getAll: () => axios.get(todo),
            create: (data) => axios.post(todo, data), //url, data
            update: (toUpdate) => axios.put(toUpdate),
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
