import Slider, { CustomArrowProps, Settings } from '@ant-design/react-slick'
import clsx from 'clsx'
import { useFormatter } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import styles from './News.module.scss'

function NextArrow({ onClick }: Pick<CustomArrowProps, 'onClick'>) {
  return (
    <div className={clsx(styles.arrow, styles.arrow_next)} onClick={onClick}>
      <Image
        src='/news/arrow.svg'
        alt=''
        fill
        draggable={false}
        quality={100}
      />
    </div>
  )
}

function PrevArrow({ onClick }: Pick<CustomArrowProps, 'onClick'>) {
  return (
    <div className={clsx(styles.arrow, styles.arrow_prev)} onClick={onClick}>
      <Image
        src='/news/arrow.svg'
        alt=''
        fill
        draggable={false}
        quality={100}
      />
    </div>
  )
}

export default function News() {
  const format = useFormatter()

  const formatDate = (date: string) => {
    if (date)
      return format.dateTime(new Date(date), {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
      })

    return '?'
  }

  const messages = useIntlMessages()

  const newsfeed = Object.keys(messages.Sections.News.newsfeed) as Array<
    keyof IntlMessages['Sections']['News']['newsfeed']
  >

  const { setNewsActiveModalKey, setIsModalOpen } = useStore()

  const sliderSettings: Settings = {
    dots: true,
    lazyLoad: 'progressive',
    swipe: false,
    slidesToShow: newsfeed.length < 3 ? newsfeed.length : 3,
    slidesToScroll: newsfeed.length < 3 ? newsfeed.length : 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          swipe: true,
          slidesToShow: newsfeed.length === 1 ? 1 : 2,
          slidesToScroll: newsfeed.length === 1 ? 1 : 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          swipe: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          swipe: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={styles.container}>
      <Text
        located='page'
        size='heading'
        weight={500}
        color='secondary'
        className={styles.title}
        tKey='Sections.News.title'
      />
      {newsfeed.length ? (
        <div className={styles.newsfeed}>
          <Slider {...sliderSettings}>
            {newsfeed.reverse().map(key => (
              <Fragment key={key}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    {messages.Sections.News.newsfeed[key].image && (
                      <Image
                        src={messages.Sections.News.newsfeed[key].image}
                        alt=''
                        fill
                        draggable={false}
                        quality={100}
                      />
                    )}
                  </div>
                  <Text
                    located='page'
                    size='body'
                    weight={500}
                    color='secondary'
                  >
                    {formatDate(messages.Sections.News.newsfeed[key].date)}
                  </Text>
                  <Text
                    located='page'
                    size='subheading'
                    weight={500}
                    color='secondary'
                    tKey={`Sections.News.newsfeed.${key}.title`}
                    tRich
                  />
                  <Text
                    located='page'
                    size='body'
                    weight={500}
                    color='secondary'
                    underline
                    onClick={() => {
                      setNewsActiveModalKey(key)
                      setIsModalOpen({ ['News']: true })
                    }}
                    tKey={`Sections.News.newsfeed.${key}.action`}
                  />
                </div>
              </Fragment>
            ))}
          </Slider>
        </div>
      ) : (
        <Text
          located='page'
          size='heading'
          weight={700}
          color='secondary'
          className={styles.text}
        >
          ?
        </Text>
      )}
    </div>
  )
}
