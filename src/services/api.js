import { http } from '@/utils'

export const baseUrl = 'http://qqtou.natapp1.cc/v1'

export const user = (userName, passWord) => http.get(http.param(baseUrl + '/user/login/:userName/:passWord', {
  userName: userName,
  passWord: passWord
})).then(data => {
  return data
})
export const getChannel = ()=>http.get(baseUrl+'/channel/channels');
export const getInfo = (chanelID)=>http.get(baseUrl+`/channel/getinfo/${chanelID}`);
export const transaction = (chanelID,txID)=>http.get(baseUrl+`/transaction/${chanelID}/${txID}`);
export const getechartstxdata = (chanelID,year,month)=>http.get(baseUrl+`/channel/getechartstxdata?channelID=${chanelID}&year=${year}&month=${month}`);
export const getechartsblockdata = (chanelID,year,month)=>http.get(baseUrl+`/channel/getechartsblockdata?channelID=${chanelID}&year=${year}&month=${month}`);
export const transactionLists = (pageIndex,pageSize,chanelID)=>http.get(baseUrl+`/transaction/list/${pageIndex}/${pageSize}/${chanelID}`);
export const gettransactionbyblockheight = (chanelID,height)=>http.get(baseUrl+`/transaction/height/${chanelID}/${height}`);
export const getChannelById = (chanelID)=>http.get(baseUrl+`/channel/channels?id=${chanelID}`);
export const gettotalstatistics =  ()=>http.get(baseUrl + "/channel/gettotalstatistics");
export const getstatistics = (chanelID)=>http.get(baseUrl + `/channel/getstatistics/${chanelID}`);
export const getpeers = ()=> http.get(baseUrl + "/peers");
export const getbackiplist = ()=> http.get(baseUrl + "/iplist/list/1/10?ipType=1");
export const getwhiteiplist = ()=> http.get(baseUrl + "/iplist/list/1/10?ipType=2");
