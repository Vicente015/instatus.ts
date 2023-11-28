import { type PartialComponent } from '..'

export type PageStatus = 'UP' | 'HASISSUES'

export type ComponentStatus =
  | 'OPERATIONAL'
  | 'UNDERMAINTENANCE'
  | 'DEGRADEDPERFORMANCE'
  | 'PARTIALOUTAGE'
  | 'MINOROUTAGE'
  | 'MAJOROUTAGE'

export type IncidentStatus =
  | 'INVESTIGATING'
  | 'IDENTIFIED'
  | 'MONITORING'
  | 'RESOLVED'

export interface InstatusClientOptions {
  key: string
  pageID?: string
  debug?: boolean
}

export interface StatusPage {
  id: string
  subdomain: string
  name: string
  logoUrl?: string
  faviconUrl?: string
  websiteUrl?: string
  customDomain?: string
  publicEmail?: string
  twitter?: string
  status: PageStatus
  suscribeBySms?: boolean
  language?: string
  useLargeHeader?: boolean
  brandColor?: string
  okColor?: string
  disruptedColor?: string
  degradedColor?: string
  downColor?: string
  noticeColor?: string
  unknownColor?: string
  googleAnalytics?: string
  smsService?: string
  htmlInMeta?: string
  htmlAboveHeader?: string
  htmlBelowHeader?: string
  htmlBelowSummary?: string
  launchDate?: Date | string
  cssGlobal?: string
  onboarder?: string
  createdAt: Date | string
  updatedAt: Date | string
}

export interface StatusPagesPost {
  email: string
  name: string
  subdomain: string
  components: string[]
  logoUrl?: string
  faviconUrl?: string
  websiteUrl?: string
  language: string
  useLargeHeader: boolean
  brandColor?: string
  okColor?: string
  disruptedColor?: string
  degradedColor?: string
  downColor?: string
  noticeColor?: string
  unknownColor?: string
  googleAnalytics?: string
  subscribeBySms?: boolean
  smsService?: string
  twilioSid?: string
  twilioToken?: string
  twilioSender?: string
  nexmoSecret?: string
  nexmoSender?: string
  htmlInMeta?: string
  htmlAboveHeader?: string
  htmlBelowHeader?: string
  htmlBelowSummary?: string
  cssGlobal?: string
  launchDate?: Date | string
  dateFormat?: string
  dateFormatShort?: string
  timeformat?: string
}

export interface StatusPagesPut {
  id: string
  name: string
  status: PageStatus
  subdomain: string
  components: string[]
  logoUrl?: string
  faviconUrl?: string
  websiteUrl?: string
  language: string
  publicEmail: string
  useLargeHeader: boolean
  brandColor?: string
  okColor?: string
  disruptedColor?: string
  degradedColor?: string
  downColor?: string
  noticeColor?: string
  unknownColor?: string
  googleAnalytics?: string
  subscribeBySms?: boolean
  smsService?: string
  twilioSid?: string
  twilioToken?: string
  twilioSender?: string
  nexmoSecret?: string
  nexmoSender?: string
  htmlAboveHeader?: string
  htmlBelowHeader?: string
  htmlAboveFooter?: string
  htmlBelowFooter?: string
  htmlBelowSummary?: string
  cssGlobal?: string
  launchDate?: Date | string
  dateFormat?: string
  dateFormatShort?: string
  timeformat?: string
  private?: boolean
  useAllowList: boolean
}

export interface StatusPagesDelete {
  id: string
}

export interface Component {
  id: string
  name: string
  status: ComponentStatus
  site: {
    id: string
    name: string
    subdomain: string
    color?: string
    logoUrl?: string
    publicEmail?: string
    slackIntegration?: any[]
    subscribers?: []
  }
  subscribers?: []
}

export interface RawIncident {
  id: string
  name: string
  status: IncidentStatus
  started: Date
  resolved?: Date
  updates?: IncidentUpdates
  components: PartialComponent[]
}

export interface IncidentUpdates {
  id: string
  message: string
  messsageHtml: string
  status: IncidentStatus
  notify: boolean
  started: Date | string
  ended?: Date | string
  duration?: number
  createdAt: Date | string
}

export interface IncidentPost {
  name: string
  message: string
  components: string[]
  started: Date | string
  status: IncidentStatus
  notify: boolean
  statuses: Statuses[]
}

export interface Statuses {
  id: string
  status: ComponentStatus
}

export interface IncidentDelete {
  id: string
}

export interface IncidentUpdate {
  id: string
  message: string
  messageHtml: string
  status: IncidentStatus
  notify: boolean
  started: Date | string
  incident: RawIncident
}

export interface IncidentUpdatePost {
  message: string
  components: string[]
  started: Date | string
  notify: boolean
  statuses: Statuses[]
}

export interface IncidentUpdatePut {
  message: string
  components: string[]
  started: Date | string
  notify: boolean
  statuses: Statuses[]
}

export interface RawComponent {
  id: string
  name: string
  description: string
  status: ComponentStatus
  uniqueEmail?: string
  showUptime: boolean
  order: number
  group?: string
  incidents: RawIncident[]
}

export interface ComponentPost {
  name: string
  description: string
  status: ComponentStatus
  order: number
  showUptime: boolean
  grouped: boolean
}

export interface ComponentDelete {
  id: string
}

export interface RawPartialComponent {
  id: string
  name: string
  status: ComponentStatus
  showUptime: boolean
  site: PartialSite
}

export interface PartialSite {
  id: string
  name: string
  subdomain: string
  color?: string
  logoUrl?: string
  publicEmail?: string
}

export interface RawMetric {
  id: string
  name: string
  active: boolean
  order: number
  suffix: string
  data: MetricData[]
}

export interface MetricData {
  timestamp: number
  value: number
}

export interface MetricPut {
  name: string
  suffix: string
}

export interface MetricDataPoint {
  id: string
  value: number
  timestamp: number
}

export interface MetricDataPointPost {
  timestamp: number
  value: number
}

export interface RawTeamMember {
  id: string
  user: TeamUser
}

export interface TeamUser {
  id: string
  name: string
  email: string
  avatar: string
}

export interface TeamMemberPost {
  email: string
}
