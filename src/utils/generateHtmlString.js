function generateHtmlString (str) {

  if(str){
    str = str.replace(/\n/g, '<br/>')
      .replace(/\*(.+?)\*/ig , '<strong>$1</strong>');
  }

  return str;
}

export default generateHtmlString;