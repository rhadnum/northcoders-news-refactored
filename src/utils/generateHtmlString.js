function generateHtmlString (str) {

  str = str.replace(/\n/g, '<br/>')
    .replace(/\*(\w+?)\*/g , '<strong>$1</strong>')

  return str;
}

export default generateHtmlString;