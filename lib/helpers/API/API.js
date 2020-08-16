import APIHelper from './axiosInstance';

class API {
  /**
   *
   * @param {Object} loginDetails Login Details
   * @param {String} loginDetails.emailId Email ID
   * @param {String} loginDetails.password Password
   * @returns {Object} reponse object
   */
  login(loginDetails) {
    return APIHelper.axiosInstance
      .post('admin/login', loginDetails)
      .then((response) =>
        APIHelper.generateSuccess(response.data.data.accessToken),
      )
      .catch((error) => APIHelper.errorHelper(error));
  }
}

const instance = new API();
export default instance;
