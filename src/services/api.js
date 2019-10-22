import { http } from '@/utils'

const baseUrl = 'http://192.168.34.134:8080/v1'


// 审核状态
export const user = () => http.get(baseUrl + 'user/login/rabbit-root/root', {
    params: {}
}).then(data => {
    console.log(data);
    
    return data
})