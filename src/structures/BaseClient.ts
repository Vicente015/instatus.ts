import { Constants } from '../'
import axios, { Method } from 'axios'

/**
 * Base client class
 *
 * @export
 * @class Base
 */
export default class Base {
  /**
   * Makes a request to the API
   *
   * @param {Method} method HTTP Method
   * @param {string} uri URI
   * @param {object} [data] Request date
   * @return {*}  {Promise<any>}
   * @memberof Base
   */
  async request (key: string, method: Method, uri: string, data?: object): Promise<any> {
    const res = await axios({
      method: method,
      url: uri,
      baseURL: `${Constants.http.api}/v${Constants.http.version}/`,
      headers: {
        Authorization: `Bearer ${key}`,
        'content-type': 'application/json'
      },
      data: data
    })
    // .catch(err => {})// https://github.com/axios/axios#handling-errors
    return res.data
  }
}
