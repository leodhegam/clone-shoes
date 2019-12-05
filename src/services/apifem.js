import axios from 'axios';
const apifem = axios.create({
    baseURL:'http://localhost:3331',
});
export default apifem;