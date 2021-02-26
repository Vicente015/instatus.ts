import { Base, Incident, InstatusClient } from '../'
import { RawComponent, ComponentStatus } from '../utils/Typings'

export default class Component extends Base {
  id!: string
  name!: string
  description!: string
  status!: ComponentStatus
  uniqueEmail?: string
  showUptime!: boolean
  order!: Number
  group?: string
  incidents!: Incident[]

  constructor (client: InstatusClient, data: RawComponent) {
    super(client)

    this._parse(data)
  }

  private _parse (data: RawComponent): void {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.status = data.status
    this.uniqueEmail = data.uniqueEmail
    this.showUptime = data.showUptime
    this.order = data.order
    this.group = data.group
    this.incidents = data.incidents.map(i => new Incident(this.client, i))
  }
}
