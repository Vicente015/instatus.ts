import Incidents from '../incidents/Incidents'
import StatusPages from '../statusPages/StatusPages'

export default class InstatusClient {
  token: string
  pageID?: string
  incidents: Incidents
  pages: StatusPages

  constructor (options: {token: string, pageID?: string }) {
    this.token = options.token
    this.pageID = options.pageID

    this.incidents = new Incidents(this)
    this.pages = new StatusPages(this)
  };
}
