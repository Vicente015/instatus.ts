import { AxiosResponse } from 'axios'
import { Base, Component, InstatusClient } from '../'
import { RawComponent, ComponentStatus, ComponentPost, ComponentDelete, PartialSite } from '../utils/Typings'

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/**
 * Represents an partial component returned by the incident
 *
 * @export
 * @class Component
 * @extends {Base}
 */
export default class PartialComponent extends Base {
  id!: string
  name!: string
  status!: ComponentStatus
  showUptime!: boolean
  site!: PartialSite[]

  /**
   * @param {InstatusClient} client The client that instantiated this
   * @param {PartialComponent} data The partial component
   * @memberof Component
   */
  constructor (client: InstatusClient, data: PartialComponent) {
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

  private _parse (data: PartialComponent): void {
    this.id = data.id
    this.name = data.name
    this.status = data.status
    this.showUptime = data.showUptime
    this.site = data.site
  }
}
