// https://instatus.com/help/api#pages
import { Base, ComponentManager, IncidentManager, InstatusClient } from '../'
import { StatusPage, StatusPagesPost, StatusPagesPut, StatusPagesDelete } from '../utils/Typings'
import { AxiosResponse } from 'axios'

export default class StatusPages extends Base {
  incidents: IncidentManager
  components: ComponentManager

  constructor (client: InstatusClient) {
    super(client)

    // this.components
    // this.maintenances
    this.incidents = new IncidentManager(this.client)
    this.components = new ComponentManager(this.client)
  }

  // GET /v1/pages
  async get (): Promise<AxiosResponse<StatusPage[]>> {
    return await this.request('get', 'pages')
  }

  // POST /v1/pages
  async add (data: StatusPagesPost): Promise<AxiosResponse<StatusPage>> {
    return await this.request('post', 'pages', data)
  }

  // PUT /v1/:page_id
  async update (data: StatusPagesPut): Promise<AxiosResponse<StatusPage>> {
    return await this.request('put', '', data)
  }

  // DELETE /v1/:page_id
  async delete (data: StatusPagesDelete): Promise<AxiosResponse<any>> {
    return await this.request('delete', '', data)
  }
}
