/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Base, Incident } from '../'
import { type RawIncident, type IncidentPost, type IncidentDelete } from '../utils/Typings'
import { type AxiosResponse } from 'axios'

/**
 * A manager of the incidents belonging to a status page
 *
 * @export
 * @class IncidentsManager
 * @extends {Base}
 */
export default class IncidentsManager extends Base {
  // GET /v1/:page_id/incidents
  /**
   * Gets all incidents
   *
   * @return {*}  {Promise<Incident[]>}
   * @memberof IncidentsManager
   */
  async getAll (): Promise<Incident[]> {
    this._check()
    const incidents: Incident[] = []
    const rawIncidents: RawIncident[] = await this.request('get', `${this.client.pageID}/incidents`)
    rawIncidents.forEach(rawIncident => incidents.push(new Incident(this.client, rawIncident)))

    return incidents
  }

  // GET /v1/:page_id/incidents/:incident_id
  /**
   * Gets one incident
   *
   * @param {string} incidentID The incident ID
   * @return {*}  {Promise<Incident>}
   * @memberof IncidentsManager
   */
  async get (incidentID: string): Promise<Incident> {
    this._check(incidentID)
    const rawIncident: RawIncident = await this.request('get', `${this.client.pageID}/incidents/${incidentID}`)
    return new Incident(this.client, rawIncident)
  }

  // POST /v1/:page_id/incidents
  /**
   * Creates an incident
   *
   * @param {IncidentPost} data The data to create the incident
   * @return {*}  {Promise<Incident>}
   * @memberof IncidentsManager
   */
  async add (data: IncidentPost): Promise<Incident> {
    this._check()
    const rawIncident: RawIncident = await this.request('post', `${this.client.pageID}/incidents/`, data)
    return new Incident(this.client, rawIncident)
  }

  // PUT /v1/:page_id/incidents/:incident_id
  /**
   * Edits an incident
   *
   * @param {string} incidentID The incident ID
   * @param {IncidentPost} data The data to edit the incident
   * @return {*}  {Promise<Incident>}
   * @memberof IncidentsManager
   */
  async update (incidentID: string, data: IncidentPost): Promise<Incident> {
    this._check(incidentID)
    const rawIncident: RawIncident = await this.request('put', `${this.client.pageID}/incidents/${incidentID}`, data)
    return new Incident(this.client, rawIncident)
  }

  // DELETE v1/:page_id/incidents/:incident_id
  /**
   * Deletes an incident
   *
   * @param {string} incidentID The incident ID
   * @return {*}  {Promise<AxiosResponse<IncidentDelete>>}
   * @memberof IncidentsManager
   */
  async delete (incidentID: string): Promise<AxiosResponse<IncidentDelete>> {
    this._check(incidentID)
    return await this.request('delete', `${this.client.pageID}/incidents/${incidentID}`)
  }

  private _check (incidentID?: string): void {
    if (incidentID !== undefined && typeof incidentID !== 'string') throw Error('IncidentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }
}
