export interface ScopeProps {
  data: any
  dataKey: string
  currentPath: string
  isNumberedElement: boolean
  render: (data: any, path?: string) => JSX.Element[]
  configureMessages: (
    currentPath: string,
    action:
      | 'updateField'
      | 'addField'
      | 'addMoreElement'
      | 'addNewsfeedElement'
      | 'deleteNumberedElement',
    value?: string
  ) => void
}
