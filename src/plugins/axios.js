import Vue from 'vue'
import axios from 'axios'

import auth from './../store/auth/index'

Vue.prototype.$axios = axios

axios.defaults.baseURL = process.env.API_BASE_URL
axios.interceptors.request.use(function (request) {
    const token = auth.getters.getAccessToken()
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
}, function (error) {
    return Promise.reject(error)
})