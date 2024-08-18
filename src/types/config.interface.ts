export type Locale = 'uk-UA' | 'en-US'

export type Sections = {
  [Key in keyof IntlMessages['Sections']]: () => JSX.Element
}
