/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Base, InstatusClient } from '../'
import { IncidentUpdate, IncidentUpdatePost, IncidentUpdatePut } from '../utils/Typings'
import { AxiosResponse } from 'axios'

/**
 * The updates
 *
 * @export
 * @class IncidentsUpdates
 * @extends {Base}
 */
export default class IncidentsUpdates extends Base {
  incidentID: string

  /**
   * @param {InstatusClient} client The client that instantiated this
   * @param {string} incidentID The ID of the incident
   * @memberof IncidentsUpdates
   */
  constructor (client: InstatusClient, incidentID: string) {
    super(client)

    this.incidentID = incidentID
  }

  // GET /v1/:page_id/incidents/:incident_id/incident-updates/:incident_update_id
  async get (incidentUpdateId: string): Promise<AxiosResponse<IncidentUpdate>> {
    this.check()
    return await this.request('get', `${this.client.pageID}/incidents/${this.incidentID}/incident-updates/${incidentUpdateId}`)
  }

  // POST /v1/:page_id/incidents/:incident_id/incident-updates
  async add (data: IncidentUpdatePost): Promise<AxiosResponse<IncidentUpdate>> {
    this.check()
    return await this.request('post', `${this.client.pageID}/incidents/${this.incidentID}/incidents-updates`, data)
  }

  // PUT /v1/:page_id/incidents/:incident_id/incident-updates/:incident_update_id
  async update (incidentUpdateID: string, data: IncidentUpdatePut): Promise<AxiosResponse<IncidentUpdate>> {
    this.check()
    return await this.request('put', `${this.client.pageID}/incidents/${this.incidentID}/incident-updates/${incidentUpdateID}`, data)
  }

  private check (): void {
    if (this.incidentID === undefined) throw Error('IncidentID undefined')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }
}
