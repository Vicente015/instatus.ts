import { Base, InstatusClient, IncidentsUpdates, PartialComponent } from '../'
import { RawIncident, IncidentStatus } from '../utils/Typings'

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
