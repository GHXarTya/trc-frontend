import messages from '@/messages/markup.json'

type Messages = typeof messages

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  type IntlMessageKeys<ObjectType, Keys extends string = ''> = {
    [Key in keyof ObjectType]: ObjectType[Key] extends object
      ? IntlMessageKeys<ObjectType[Key], `${Keys}${Key & string}.`>
      : `${Keys}${Key & string}`
  }[keyof ObjectType]
}
