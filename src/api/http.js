import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.withCredentials  = true;
//Content-type 响应头
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 基础URL
axios.defaults.baseURL = "http://localhost:8888"

//响应拦截器
axios.interceptors.response.use(
    response => {
        if(response.status == 200) {
            return Promise.resolve(response);
        }else {
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response.status) {
            switch(error.response.status) {
                case 401:
                    router.replace({
                        path: '/',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 404:
                    break;
            }
            return Promise.reject(error.response);
        }
    }


);

/**
 * 封装get方法
 */
export function get(url, params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{params:params})
        .then(response => {
            resolve(response.data)
        })
        .catch(err => {
            reject(err);
        })
    });
}

/**
 * 封装post方法
 */

export function post(url, data={}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
        .then(response => {
            resolve(response.data)
        })
        .catch(err => {
            reject(err);
        })
    });
}
