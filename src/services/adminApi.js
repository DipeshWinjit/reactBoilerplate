import api from './api';

export function getData(){
    return new Promise((resolve,reject) => {
        api.get("/posts").then(
            (response) => {
                resolve(response)
            }
        )
    })
}