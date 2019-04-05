const axios = require('axios')

const baseUrl =  "http://127.0.0.1:5000/";
const todo = "todos";

export default {
   
    todos() {
        return {
            getOne: ({ id }) => axios.get(`${id}`),
            getAll: () => axios.get(baseUrl + todo),
            create: (toCreate) => axios.put(toCreate),
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
