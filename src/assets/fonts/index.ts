import localFont from 'next/font/local'

export const helveticaNeue = localFont({
  src: [
    {
      path: './HelveticaNeue-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './HelveticaNeue-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './HelveticaNeue-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-helveticaNeue'
})
