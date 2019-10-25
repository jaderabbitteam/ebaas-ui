import { http } from '@/utils'

const baseUrl = 'http://192.168.34.138:8080/v1'


export const user = (userName, passWord) => http.get(http.param(baseUrl + '/user/login/:userName/:passWord', {
    userName: userName,
    passWord: passWord
})).then(data => {
    return data
})