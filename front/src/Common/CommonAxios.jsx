import axios from 'axios';

const API =axios.create({
    //baseURL: `http://localhost:8080`,
    timeout: 30000,
    headers: {
        "Content-Type" : `application/json;charset=UTF-8`,
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
    }
});
export default API;