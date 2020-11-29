import axios from 'axios'

const instance = axios.create({
    baseURL : "https://my-burger-dd565.firebaseio.com/"
})

export default instance;