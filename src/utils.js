import axios from 'axios'

/* eslint-disable */

// flexible.js
(function flexible (window, document) {
  var maxWidth = 1726
  var minWidth = 600
  var docEl = document.documentElement
  var bodyEl = document.body
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  // function setBodyFontSize () {
  //   if (document.body) {
  //     document.body.style.fontSize = (12 * dpr) + 'px'
  //   }
  //   else {
  //     document.addEventListener('DOMContentLoaded', setBodyFontSize)
  //   }
  // }
  // setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var width = docEl.clientWidth
    if (width > maxWidth) {
      width = maxWidth
    } else if (width < minWidth) {
      width = minWidth
    }
    
    var rem = width / 10
    docEl.style.fontSize = rem + 'px'
    bodyEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))

/* eslint-enable */

// 把 图片或者文件转换成 dataurl
export const toDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = (e) => {
    resolve(e.target.result)
  }
  reader.onerror = (e) => {
    reject(e)
  }
})

export const http = axios.create({
  timeout: 10000,
  transformRequest: [(data) => {
    return formdata(data)
  }],
  // transformResponse: [data => {
  //   console.log(data)
  //   return data
  // }]
})
http.interceptors.response.use(res => {
  const data = res.data
  if (data && data.succeed) {
    let resData = data.data ? data.data : data
    if (typeof resData === 'string') {
      try {
        let d = JSON.parse(resData)
        resData = d
      } catch (e) {}
    }
    return resData
  } else {
    return Promise.reject(new Error(data && data.data ? data.data : data))
  }
}, err => {
  if (err.message) {
    if (~err.message.indexOf('timeout of')) {
      return Promise.reject(new Error('访问超时'))
    }
    if (~err.message.indexOf('Network Error')) {
      return Promise.reject(new Error('网络错误'))
    }
  } else {
    return Promise.reject(err)
  }
})

export const formdata = obj => {
  const f = new FormData()
  for (let key in obj) {
    f.append(key, obj[key])
  }
  return f
}

export const formatTime = time => {
  if (!time) {
    return ''
  }
  const t = new Date(time)
  return `${fillnum(t.getFullYear(), 4)}-${fillnum(t.getMonth() + 1)}-${fillnum(t.getDate())} ${fillnum(t.getHours())}:${fillnum(t.getMinutes())}:${fillnum(t.getSeconds())}`
}

export const fillnum = (val, length = 2) => (Array(length).join('0') + val).slice(-length)

const digitsRE = /(\d{3})(?=\d)/g
export const currency = (value, currency, decimals) => {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}
