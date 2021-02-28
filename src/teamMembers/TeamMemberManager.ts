/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Base, TeamMember } from '../'
import { RawTeamMember, TeamMemberPost } from '../utils/Typings'

export default class TeamMemberManager extends Base {
  // GET /v1/:page_id/team
  async getAll (): Promise<TeamMember[]> {
    this._check()
    const teamMembers = await this.request('get', `${this.client.pageID}/team`)
    return teamMembers.map((m: RawTeamMember) => new TeamMember(this.client, m))
  }

  async get (TeamMemberID: string): Promise<TeamMember> {
    this._check()
    const teamMembers = await this.request('get', `${this.client.pageID}/team`)
    return teamMembers.find((m: RawTeamMember) => m.id === TeamMemberID)
  }

  // POST /v1/:page_id/team
  async add (data: TeamMemberPost): Promise<any> {
    return await this.request('get', `${this.client.pageID}/team`, data)
  }

  // DELETE /v1/:page_id/team/:member_id
  async delete (TeamMemberID: string): Promise<any> {
    return await this.request('delete', `${this.client.pageID}/team/${TeamMemberID}`)
  }

  private _check (TeamMemberID?: string): void {
    if (TeamMemberID !== undefined && typeof TeamMemberID !== 'string') throw Error('TeamMemberID must be a string')
    if (this.client.pageID === undefined) throw Error('PageID undefined')
  }
}
