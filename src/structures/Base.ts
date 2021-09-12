import { InstatusClient, Constants } from '../'
import axios, { Method } from 'axios'
import InstatusTSError from './InstatusTSError'

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
  constructor(client: InstatusClient) {
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
  async request(method: Method, uri: string, data?: object): Promise<any> {
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
      .catch((err: Error | axios.AxiosError) => {
        if (err.request || err.message) {
          throw new InstatusTSError(err.request ?? err.message)
        }
      })
    if (this.client.debug === true) console.log('[Debug]', res)
    return res.data
  }
}
