/* eslint-disable no-void */
import { BaseClient, StatusPages } from '../'
import { InstatusClientOptions } from '../utils/Typings'

/**
 * The main hub to interact with the Instatus API
 *
 * @export
 * @class InstatusClient
 */
export default class InstatusClient extends BaseClient {
  key: string
  debug?: boolean
  pageID?: string
  pages: StatusPages

  /**
   * @param {InstatusClientOptions} options The client options
   * @memberof InstatusClient
   */
  constructor (options: InstatusClientOptions) {
    super()
    this.key = options.key
    this.pageID = options.pageID
    this.debug = options.debug
    this.pages = new StatusPages(this)
    if (this.pageID === undefined) void this.setDefaultPage()
  }

  private async setDefaultPage (): Promise<void> {
    const res = await this.request(this.key, 'get', 'pages')
    this.pageID = res[0].id
  }
}
