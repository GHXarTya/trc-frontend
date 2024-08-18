export type SectionLocation = {
  [Key in keyof IntlMessages['Sections']]: number
}

export type SectionHTMLElement = HTMLElement & {
  id: keyof IntlMessages['Sections']
}

export interface ViewportSize {
  viewportWidth: number | undefined
  viewportHeight: number | undefined
}
