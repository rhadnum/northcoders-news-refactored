function generateHtmlString (str) {

  str = str.replace(/\n/g, '<br/>')
    .replace(/\*(.+?)\*/ig , '<strong>$1</strong>')

  return str;
}

export default generateHtmlString;