import InstatusClient from '../client/Client'
import axios, { AxiosResponse, Method } from 'axios'
import Constants from '../utils/Constants'

export default class Base {
  client: InstatusClient

  constructor (client: InstatusClient) {
    this.client = client
  }

  /**
   *
   *
   * @param {Method} method
   * @param {string} uri
   * @return {*}  {Promise<AxiosResponse>}
   * @memberof Base
   */

  async request (method: Method, uri: string, data?: object): Promise<AxiosResponse> {
    const res = await axios({
      method: method,
      url: uri,
      baseURL: `${Constants.http.api}/v${Constants.http.version}/`,
      headers: {
        Authorization: `Bearer ${this.client.token}`,
        'content-type': 'application/json'
      },
      data: data
    })
    // .catch(err => {})// https://github.com/axios/axios#handling-errors
    return res.data
  }
}
