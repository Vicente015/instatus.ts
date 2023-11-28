/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Base, type InstatusClient } from '../'
import { type MetricData, type MetricDataPoint, type MetricDataPointPost, type MetricPut, type RawMetric } from '../utils/Typings'

/**
 * Represents a Metric
 *
 * @export
 * @class Metric
 * @extends {Base}
 */
export default class Metric extends Base {
  id!: string
  name!: string
  active!: boolean
  order!: number
  suffix!: string
  data!: MetricData[]

  /**
   * @param {InstatusClient} client The client that instantiated this
   * @param {RawMetric} data The metric raw data
   * @memberof Metric
   */
  constructor (client: InstatusClient, data: RawMetric) {
    super(client)
    this._parse(data)
  }

  // GET /v1/:page_id/metrics/:metric_id
  /**
   * Gets this metric
   *
   * @return {*}  {Promise<Metric>}
   * @memberof Metric
   */
  async get (): Promise<Metric> {
    this._check()
    return await this.request('get', `${this.client.pageID}/metrics/${this.id}`)
  }

  // PUT /v1/:page_id/metrics/:metric_id
  /**
   * Updates this metric
   *
   * @param {MetricPut} data
   * @return {*}  {Promise<Metric>}
   * @memberof Metric
   */
  async update (data: MetricPut): Promise<Metric> {
    this._check()
    return await this.request('put', `${this.client.pageID}/metrics/${this.id}`, data)
  }

  // DELETE /v1/:page_id/metrics/:metric_id
  /**
   * Deletes this metricº
   *
   * @return {*}  {Promise<Metric>}
   * @memberof Metric
   */
  async delete (): Promise<Metric> {
    this._check()
    return await this.request('delete', `${this.client.pageID}/metrics/${this.id}`)
  }

  // POST /v1/:page_id/metrics/:metric_id
  /**
   * Adds a datapoint to this metric
   *
   * @param {MetricDataPointPost} data
   * @return {*}  {Promise<MetricDataPoint>}
   * @memberof Metric
   */
  async add (data: MetricDataPointPost): Promise<MetricDataPoint> {
    this._check()
    return await this.request('post', `${this.client.pageID}/metrics/${this.id}`, data)
  }

  // POST /v1/:page_id/metrics/:metric_id/data
  /**
   * Adds multiple datapoints to this metric
   *
   * @param {MetricDataPointPost[]} data
   * @return {*}  {Promise<MetricDataPointPost[]>}
   * @memberof Metric
   */
  async adds (data: MetricDataPointPost[]): Promise<MetricDataPointPost[]> {
    this._check()
    return await this.request('post', `${this.client.pageID}/metrics/${this.id}/data`, data)
  }

  private _check (): void {
    if (this.id === undefined) throw Error('Metric must have an id')
    if (typeof this.id !== 'string') throw Error('ComponentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }

  private _parse (data: RawMetric): void {
    this.id = data.id
    this.name = data.name
    this.active = data.active
    this.order = data.order
    this.suffix = data.suffix
    this.data = data.data
  }
}
