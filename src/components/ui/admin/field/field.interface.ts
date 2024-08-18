export interface FieldProps {
  data: any
  dataKey: string
  currentPath: string
  isNumberedElement: boolean
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
