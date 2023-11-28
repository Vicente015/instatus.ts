/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Base, type InstatusClient } from '../'
import { type RawTeamMember, type TeamUser } from '../utils/Typings'

export default class TeamMember extends Base {
  id!: string
  user!: TeamUser

  constructor (client: InstatusClient, data: RawTeamMember) {
    super(client)
    this._parse(data)
  }

  // DELETE /v1/:page_id/team/:member_id
  async delete (): Promise<any> {
    this._check()
    return await this.request('delete', `${this.client.pageID}/team/${this.id}`)
  }

  private _check (): void {
    if (this.id === undefined) throw Error('Component must have the component ID')
    if (typeof this.id !== 'string') throw Error('ComponentID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }

  private _parse (data: RawTeamMember): void {
    this.id = data.id
    this.user = data.user
  }
}
