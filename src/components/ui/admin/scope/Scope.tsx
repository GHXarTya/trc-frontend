import clsx from 'clsx'
import Image from 'next/image'

import Button from '@/ui/button/Button'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import styles from './Scope.module.scss'
import type { ScopeProps } from './scope.interface'

export default function Scope({
  data,
  dataKey,
  currentPath,
  isNumberedElement,
  render,
  configureMessages
}: ScopeProps) {
  const { scopePaths, setScopePaths } = useStore()

  const isExpanded = scopePaths.includes(currentPath)

  return (
    <div
      className={clsx(styles.scope, {
        [styles.scope_active]: isExpanded
      })}
    >
      <div
        className={styles.expandable}
        onClick={() =>
          isExpanded
            ? setScopePaths(scopePaths.filter(path => path !== currentPath))
            : setScopePaths([...scopePaths, currentPath])
        }
      >
        <div className={styles.arrow}>
          <Image
            src='/admin/arrow.svg'
            alt=''
            fill
            draggable={false}
            quality={100}
          />
        </div>
        <Text
          located='page'
          size='subheading'
          weight={500}
          color='secondary'
          clickable
        >
          {dataKey}
        </Text>
      </div>
      {isNumberedElement && (
        <Text
          located='page'
          size='body'
          weight={400}
          color='secondary'
          clickable
          className={clsx(styles.text, {
            [styles.text_active]: isExpanded
          })}
          onClick={() =>
            isExpanded &&
            configureMessages(currentPath, 'deleteNumberedElement')
          }
          tKey='Admin.action.delete'
        />
      )}
      {isExpanded && (
        <>
          {render(data[dataKey], currentPath)}
          {dataKey === 'newsfeed' && (
            <Button
              located='page'
              size='body'
              weight={400}
              color='secondary'
              className={styles.button}
              onClick={() =>
                configureMessages(currentPath, 'addNewsfeedElement')
              }
              tKey='Admin.action.add'
            />
          )}
          {dataKey === 'more' && (
            <Button
              located='page'
              size='body'
              weight={400}
              color='secondary'
              className={styles.button}
              onClick={() => configureMessages(currentPath, 'addMoreElement')}
              tKey='Admin.action.add'
            />
          )}
          {dataKey === 'description' && currentPath.includes('more') && (
            <Button
              located='page'
              size='body'
              weight={400}
              color='secondary'
              className={styles.button}
              onClick={() => configureMessages(currentPath, 'addField')}
              tKey='Admin.action.add'
            />
          )}
          {dataKey === 'questions' && currentPath.includes('Test') && (
            <Button
              located='page'
              size='body'
              weight={400}
              color='secondary'
              className={styles.button}
              onClick={() => configureMessages(currentPath, 'addField')}
              tKey='Admin.action.add'
            />
          )}
        </>
      )}
    </div>
  )
}
