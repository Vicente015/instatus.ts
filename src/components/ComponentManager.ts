/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { AxiosResponse } from 'axios'
import { Base, Component } from '../'
import { ComponentDelete, ComponentPost, RawComponent } from '../utils/Typings'

/**
 * A manager of the components belonging to a status page
 *
 * @export
 * @class ComponentManager
 * @extends {Base}
 */
export default class ComponentManager extends Base {
  // GET /v1/:page_id/components
  /**
   * Gets all components
   *
   * @return {Component[]}  {Promise<Component[]>}
   * @memberof ComponentManager
   */
  async getAll (): Promise<Component[]> {
    this.check()
    const components: Component[] = []
    const rawComponents: RawComponent[] = await this.request('get', `${this.client.pageID}/components`)
    rawComponents.forEach(i => components.push(new Component(this.client, i)))
    return components
  }

  // GET /v1/:page_id/components/:component_id
  /**
   * Gets one component
   *
   * @param {string} componentID The component ID
   * @return {*}  {Promise<Component>}
   * @memberof ComponentManager
   */
  async get (componentID: string): Promise<Component> {
    this.check(componentID)
    const rawComponent: RawComponent = await this.request('get', `${this.client.pageID}/components/${componentID}`)
    return new Component(this.client, rawComponent)
  }

  // POST /v1/:page_id/components
  /**
   * Creates an component
   *
   * @param {ComponentPost} data The data to crate the component
   * @return {*}  {Promise<Component>}
   * @memberof ComponentManager
   */
  async add (data: ComponentPost): Promise<Component> {
    this.check()
    const rawComponent: RawComponent = await this.request('post', `${this.client.pageID}/components`, data)
    return new Component(this.client, rawComponent)
  }

  // PUT /v1/:page_id/components/:component_id
  /**
   * Edits an component
   *
   * @param {string} componentID The component ID
   * @param {ComponentPost} data The data to update the component
   * @return {*}  {Promise<Component>}
   * @memberof ComponentManager
   */
  async update (componentID: string, data: ComponentPost): Promise<Component> {
    this.check(componentID)
    const rawComponent: RawComponent = await this.request('put', `${this.client.pageID}/components/${componentID}`, data)
    return new Component(this.client, rawComponent)
  }

  // DELETE /v1/:page_id/components/:component_id
  /**
   * Deletes an component
   *
   * @param {string} componentID The component ID
   * @return {*}  {Promise<AxiosResponse<ComponentDelete>>}
   * @memberof ComponentManager
   */
  async delete (componentID: string): Promise<AxiosResponse<ComponentDelete>> {
    this.check(componentID)
    return await this.request('delete', `${this.client.pageID}/components/${componentID}`)
  }

  private check (componentID?: string): void {
    if (componentID !== undefined && typeof componentID !== 'string') throw Error('ComponentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }
}
