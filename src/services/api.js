import { http } from '@/utils'

const baseUrl = 'http://t9hsnc.natappfree.cc/v1'


export const user = (userName, passWord) => http.get(http.param(baseUrl + '/user/login/:userName/:passWord', {
    userName: userName,
    passWord: passWord
})).then(data => {
    return data
})