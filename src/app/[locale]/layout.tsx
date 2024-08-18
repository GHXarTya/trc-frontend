import { NextUIProvider } from '@nextui-org/system'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Toaster } from 'sonner'

import Footer from '@/layout/footer/Footer'
import Header from '@/layout/header/Header'

import ReactQueryProvider from '@/providers/react-query-provider/ReactQueryProvider'

import { helveticaNeue } from '@/assets/fonts'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import type { Locale } from '@/types/config.interface'

export async function generateMetadata() {
  const t = await getTranslations('Metadata')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const messages = useIntlMessages()

  return (
    <html lang={locale}>
      <body className={helveticaNeue.variable}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <Toaster
              richColors
              position='bottom-center'
              theme='light'
              closeButton
              duration={3000}
            />
            <NextUIProvider locale={locale}>
              <Header />
              {children}
              <Footer />
            </NextUIProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
