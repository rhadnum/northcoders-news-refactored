import moment from 'moment';

function formatDate (date) {
  date = moment(date);

  return date.isSame(moment(), 'week') ? date.fromNow() : date.format('D MMM YYYY');
}

export default formatDate;