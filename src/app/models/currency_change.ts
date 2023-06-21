export interface Currency {
  source: string
  success: boolean
  timestamp: number
  quotes: Quotes
}

export interface Quotes {
  RUBUSD: number
  RUBEUR: number
  RUBGBP: number
  RUBCNY: number
  RUBJPY: number
  RUBTRY: number
}
