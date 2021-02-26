import { StatusPages } from '../'
import { InstatusClientOptions } from '../utils/Typings'

/**
 * The main hub to interact with the Instatus API
 *
 * @export
 * @class InstatusClient
 */
export default class InstatusClient {
  key: string
  debug?: boolean
  pageID?: string
  pages: StatusPages

  /**
   * @param {InstatusClientOptions} options The client options
   * @memberof InstatusClient
   */
  constructor (options: InstatusClientOptions) {
    this.key = options.key
    this.pageID = options.pageID
    this.debug = options.debug
    this.pages = new StatusPages(this)
  }
}
