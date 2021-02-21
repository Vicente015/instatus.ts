import StatusPages from '../statusPages/StatusPages'
import { InstatusClientOptions } from '../utils/Typings'

/**
 * The main hub to interact with the Instatus API
 *
 * @export
 * @class InstatusClient
 */
export default class InstatusClient {
  token: string
  pageID?: string
  pages: StatusPages

  /**
   * @param {InstatusClientOptions} options The client options
   * @memberof InstatusClient
   */
  constructor (options: InstatusClientOptions) {
    this.token = options.token
    this.pageID = options.pageID
    this.pages = new StatusPages(this)
  }
}
