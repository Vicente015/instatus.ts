import InstatusClient from '../client/Client'
import axios, { Method } from 'axios'
import Constants from '../utils/Constants'

/**
 * Base class
 *
 * @export
 * @class Base
 */
export default class Base {
  client: InstatusClient

  /**
   * @param {InstatusClient} client The client that instantiated this
   * @memberof Base
   */
  constructor (client: InstatusClient) {
    this.client = client
  }

  /**
   * Makes a request to the API
   *
   * @param {Method} method HTTP Method
   * @param {string} uri URI
   * @param {object} [data] Request date
   * @return {*}  {Promise<any>}
   * @memberof Base
   */
  async request (method: Method, uri: string, data?: object): Promise<any> {
    const res = await axios({
      method: method,
      url: uri,
      baseURL: `${Constants.http.api}/v${Constants.http.version}/`,
      headers: {
        Authorization: `Bearer ${this.client.key}`,
        'content-type': 'application/json'
      },
      data: data
    })
    // .catch(err => {})// https://github.com/axios/axios#handling-errors
    return res.data
  }
}
