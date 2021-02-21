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
  }
}

export interface Update {
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

export interface Incident {
  id: string
  name: string
  status: IncidentStatus
  started: Date | string
  resolved?: Date | string
  updates: Update[]
  components: Component[]
}

export interface Statuses {
  id: string
  status: ComponentStatus
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
