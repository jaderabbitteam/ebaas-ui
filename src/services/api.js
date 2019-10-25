import { http } from '@/utils'

const baseUrl = 'http://192.168.34.138:8080/v1'


export const user = (userName, passWord) => http.get(baseUrl + '/user/login/:userName/:passWord'.replace(':userName', userName).replace(':passWord', passWord)).then(data => {
    return data
})