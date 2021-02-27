/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { AxiosResponse } from 'axios'
import { Base, InstatusClient, IncidentsUpdates, PartialComponent } from '../'
import { RawIncident, IncidentStatus, IncidentPost, IncidentDelete } from '../utils/Typings'

/**
 * Represents an incident
 *
 * @export
 * @class Incident
 * @extends {Base}
 */
export default class Incident extends Base {
  id: string
  name: string
  status: IncidentStatus
  started: Date
  resolved?: Date
  updates: IncidentsUpdates
  components: PartialComponent[]

  /**
   * @param {InstatusClient} client The client that instantiated this
   * @param {RawIncident} data The incident raw data
   * @memberof Incident
   */
  constructor (client: InstatusClient, data: RawIncident) {
    super(client)
    this._parse(data)
    this.updates = new IncidentsUpdates(this.client, this.id)
  }

  // GET /v1/:page_id/incidents/:incident_id
  /**
   * Gets this incident
   *
   * @return {*}  {Promise<Incident>}
   * @memberof IncidentsManager
   */
  async get (): Promise<Incident> {
    this._check()
    const rawIncident: RawIncident = await this.request('get', `${this.client.pageID}/incidents/${this.id}`)
    return new Incident(this.client, rawIncident)
  }

  // PUT /v1/:page_id/incidents/:incident_id
  /**
   * Edits this incident
   *
   * @param {IncidentPost} data The data to edit the incident
   * @return {*}  {Promise<Incident>}
   * @memberof IncidentsManager
   */
  async update (data: IncidentPost): Promise<Incident> {
    this._check()
    const rawIncident: RawIncident = await this.request('put', `${this.client.pageID}/incidents/${this.id}`, data)
    return new Incident(this.client, rawIncident)
  }

  // DELETE v1/:page_id/incidents/:incident_id
  /**
   * Deletes this incident
   *
   * @return {*}  {Promise<AxiosResponse<IncidentDelete>>}
   * @memberof IncidentsManager
   */
  async delete (): Promise<AxiosResponse<IncidentDelete>> {
    this._check()
    return await this.request('delete', `${this.client.pageID}/incidents/${this.id}`)
  }

  private _check (): void {
    if (this.id === undefined) throw Error('Incident must have the IncidentId')
    if (typeof this.id !== 'string') throw Error('IncidentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }

  private _parse (data: RawIncident): void {
    this.id = data.id
    this.name = data.name
    this.status = data.status
    this.started = new Date(data.started)
    if (data.resolved !== undefined) this.resolved = new Date(data.resolved)
    const partial: PartialComponent[] = []
    data.components.forEach(i => partial.push(new PartialComponent(this.client, i)))
    this.components = partial
  }
}
