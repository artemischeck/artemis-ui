import Vue from 'vue'
import axios from 'axios'

import auth from './../store/auth/index'

Vue.prototype.$axios = axios
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.interceptors.request.use(function (request) {
    const token = auth.getters.getAccessToken()
    if (token) {
        request.headers.Authorization = `Token ${token}`
    }
    return request
}, function (error) {
    return Promise.reject(error)
})
