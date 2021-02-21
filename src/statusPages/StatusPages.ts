// https://instatus.com/help/api#pages
import Base from '../structures/Base'
import { StatusPage, StatusPagesPost } from '../utils/Typings'
import { AxiosResponse } from 'axios'

export default class StatusPages extends Base {
  // GET /v1/pages
  async get (): Promise<AxiosResponse<StatusPage[]>> {
    return await this.request('get', 'pages')
  }

  // POST /v1/pages
  async add (data: StatusPagesPost): Promise<AxiosResponse<StatusPage>> {
    return await this.request('post', 'pages', data)
  }
}
