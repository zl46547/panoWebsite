export function getLangType() {
  const href = window.location.href
  if(href.indexOf('en')>-1){
    return 'en'
  }
  if(href.indexOf('zh')>-1){
    return 'zh'
  }
  return 'zh'
}