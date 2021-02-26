// https://instatus.com/help/api#pages
import { Base, IncidentManager, InstatusClient } from '../'
import { StatusPage, StatusPagesPost, StatusPagesPut, StatusPagesDelete } from '../utils/Typings'
import { AxiosResponse } from 'axios'

export default class StatusPages extends Base {
  incidents: IncidentManager

  constructor (client: InstatusClient) {
    super(client)

    // this.components
    // this.maintenances
    this.incidents = new IncidentManager(this.client)
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
