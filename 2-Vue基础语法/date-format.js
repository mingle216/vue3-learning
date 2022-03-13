let aaa = function (time) {
  let dt = new Date(time)
  // console.log(dt.getMonth);
  //获取年 月 日
  let y = dt.getFullYear()
  let m = (dt.getMonth() + 1).toString().padStart(2, '0')
  let d = dt.getDate().toString().padStart(2, '0')

  //时分秒
  let hh = dt.getHours().toString().padStart(2, '0')
  let mm = dt.getMinutes().toString().padStart(2, '0')
  let ss = dt.getSeconds().toString().padStart(2, '0')

  let formatStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  //   console.log(formatStr)
  return formatStr
}
// aaa(new Date())
