import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8888/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCourses () {
    return apiClient.get('kurse.php')
  }
}
