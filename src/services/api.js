import { http } from '@/utils'

const baseUrl = 'http://183.6.121.188:19281/v1'


// 审核状态
export const user = () => http.get(baseUrl + '/user/?userName=yanshi-zhangsan&password=123', {
    params: {}
}).then(data => {
    console.log(data);

    return data
})