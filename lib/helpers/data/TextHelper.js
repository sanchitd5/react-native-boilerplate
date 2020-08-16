// import moment from 'moment-timezone';

class TextHelper {
  /**
   * @author Sanchit Dang
   * @param {String} str String to Translate
   * @returns {String} Sentencecased String
   */
  sentenceCase(str) {
    str = String(str);
    str = str.toLowerCase();
    return str.replace(/[a-z]/i, (letter) => letter.toUpperCase()).trim();
  }

  /**
   * @author Sanchit Dang
   * @param {String} time
   * @returns {String} Titlecased String
   */
  titleCase(str) {
    str = String(str);
    str = str.toLowerCase().split(' ');
    let final = [];
    for (let word of str) {
      final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return final.join(' ');
  }

  /**
   * @author Sanchit Dang
   * @param {String} time
   * @returns {Date} Formatted Date
   */
  formatTime(time) {
    let newTime = new Date(time);
    return typeof newTime === 'object'
      ? newTime.toLocaleDateString('en-US')
      : newTime;
  }

  /**
   * @author Sanchit Dang
   * @param {String} email Email Id
   * @returns {Boolean} isEmailValid
   */
  validateEmail(email) {
    let pattern = new RegExp(
      '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    return !pattern.test(email);
  }

  // /**
  //  *
  //  * @param {Date} date Date to be formatted
  //  * @returns {String} Formatted date
  //  */
  // formatToD_MMMM_YYYY(date) {
  //   return moment(date).format('D MMMM YYYY');
  // }
}

const instance = new TextHelper();
export default instance;
