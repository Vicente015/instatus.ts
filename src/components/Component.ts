/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type AxiosResponse } from 'axios'
import { Base, Incident, type InstatusClient } from '../'
import { type RawComponent, type ComponentStatus, type ComponentPost, type ComponentDelete } from '../utils/Typings'

/**
 * Represents an Component
 *
 * @export
 * @class Component
 * @extends {Base}
 */
export default class Component extends Base {
  id!: string
  name!: string
  description: string | undefined
  status: ComponentStatus = 'OPERATIONAL'
  uniqueEmail?: string
  showUptime: boolean = false
  order!: number
  group?: string
  incidents!: Incident[]

  /**
   * @param {InstatusClient} client The client that instantiated this
   * @param {RawComponent} data The component raw data
   * @memberof Component
   */
  constructor (client: InstatusClient, data: RawComponent) {
    super(client)
    this._parse(data)
  }

  // GET /v1/:page_id/components/:component_id
  /**
   * Gets this component
   *
   * @return {*}  {Promise<Component>}
   * @memberof ComponentManager
   */
  async get (): Promise<Component> {
    this._check()
    const rawComponent: RawComponent = await this.request('get', `${this.client.pageID}/components/${this.id}`)
    return new Component(this.client, rawComponent)
  }

  // PUT /v1/:page_id/components/:component_id
  /**
   * Edits this component
   *
   * @param {ComponentPost} data The data to update the component
   * @return {*}  {Promise<Component>}
   * @memberof ComponentManager
   */
  async update (data: ComponentPost): Promise<Component> {
    this._check()
    const rawComponent: RawComponent = await this.request('put', `${this.client.pageID}/components/${this.id}`, data)
    return new Component(this.client, rawComponent)
  }

  // DELETE /v1/:page_id/components/:component_id
  /**
   * Deletes this component
   *
   * @return {*}  {Promise<AxiosResponse<ComponentDelete>>}
   * @memberof ComponentManager
   */
  async delete (): Promise<AxiosResponse<ComponentDelete>> {
    this._check()
    return await this.request('delete', `${this.client.pageID}/components/${this.id}`)
  }

  private _check (): void {
    if (this.id === undefined) throw Error('Component must have the component ID')
    if (typeof this.id !== 'string') throw Error('ComponentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
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
