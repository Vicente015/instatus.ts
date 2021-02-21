/* eslint-disable @typescript-eslint/restrict-template-expressions */
// https://instatus.com/help/api#incidents
import Base from '../structures/Base'
import { Incident, IncidentPost } from '../utils/Typings'
import { AxiosResponse } from 'axios'

export default class Incidents extends Base {
  // GET /v1/:page_id/incidents
  async getAll (): Promise<AxiosResponse<Incident[]>> {
    this.check()
    return await this.request('get', `${this.client.pageID}/incidents`)
  }

  // GET /v1/:page_id/incidents/:incident_id
  async getOne (incidentID: string): Promise<AxiosResponse<Incident>> {
    this.check()
    return await this.request('get', `${this.client.pageID}/incidents/${incidentID}`)
  }

  // POST /v1/:page_id/incidents
  async add (data: IncidentPost): Promise<AxiosResponse<Incident>> {
    this.check()
    return await this.request('post', `${this.client.pageID}/incidents/`, data)
  }

  check (): void {
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }
}
