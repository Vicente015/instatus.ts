/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Base } from '..'
import { MetricDataPoint, MetricDataPointPost, MetricPut, RawMetric } from '../utils/Typings'
import Metric from './Metric'

/**
 * A manager of the metrics
 *
 * @export
 * @class MetricManager
 * @extends {Base}
 */
export default class MetricManager extends Base {
  // GET /v1/:page_id/metrics
  /**
   * Gets all metrics
   *
   * @return {*}  {Promise<Metric[]>}
   * @memberof MetricManager
   */
  async getAll (): Promise<Metric[]> {
    this._check()
    const metrics: RawMetric[] = await this.request('get', `${this.client.pageID}/metrics`)
    return metrics.map(m => new Metric(this.client, m))
  }

  // GET /v1/:page_id/metrics/:metric_id
  /**
   * Gets one metric
   *
   * @param {string} metricID The metric ID
   * @return {*}  {Promise<Metric>}
   * @memberof MetricManager
   */
  async get (metricID: string): Promise<Metric> {
    this._check(metricID)
    return await this.request('get', `${this.client.pageID}/metrics/${metricID}`)
  }

  // PUT /v1/:page_id/metrics/:metric_id
  /**
   * Updates a metric
   *
   * @param {string} metricID The metric ID
   * @param {MetricPut} data The data to update
   * @return {*}  {Promise<Metric>}
   * @memberof MetricManager
   */
  async update (metricID: string, data: MetricPut): Promise<Metric> {
    this._check(metricID)
    return await this.request('put', `${this.client.pageID}/metrics/${metricID}`, data)
  }

  // DELETE /v1/:page_id/metrics/:metric_id
  /**
   * Deletes a metric
   *
   * @param {string} metricID The metric ID
   * @return {*}  {Promise<Metric>}
   * @memberof MetricManager
   */
  async delete (metricID: string): Promise<Metric> {
    this._check(metricID)
    return await this.request('delete', `${this.client.pageID}/metrics/${metricID}`)
  }

  // POST /v1/:page_id/metrics/:metric_id
  /**
   * Adds a datapoint to a metric
   *
   * @param {string} metricID The metric ID
   * @param {MetricDataPointPost} data The data to add
   * @return {*}  {Promise<MetricDataPoint>}
   * @memberof MetricManager
   */
  async add (metricID: string, data: MetricDataPointPost): Promise<MetricDataPoint> {
    this._check()
    return await this.request('post', `${this.client.pageID}/metrics/${metricID}`, data)
  }

  // POST /v1/:page_id/metrics/:metric_id/data
  /**
   * Adds multiple data to a metric
   *
   * @param {string} metricID The metric ID
   * @param {MetricDataPointPost[]} data The data to add
   * @return {*}  {Promise<MetricDataPointPost[]>}
   * @memberof MetricManager
   */
  async adds (metricID: string, data: MetricDataPointPost[]): Promise<MetricDataPointPost[]> {
    this._check()
    return await this.request('post', `${this.client.pageID}/metrics/${metricID}/data`, data)
  }

  private _check (metricID?: string): void {
    if (metricID !== undefined && typeof metricID !== 'string') throw Error('ComponentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }
}
