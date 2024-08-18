import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import Loader from '@/ui/loader/Loader'
import Text from '@/ui/text/Text'

import { catchErrorMessage } from '@/api/api.helper'
import { ImgBBService } from '@/api/imgbb.service'

import styles from './ImageField.module.scss'
import type { ImageFieldProps } from './image-field.interface'

export default function ImageField({ image, handleChange }: ImageFieldProps) {
  const [newImage, setNewImage] = useState(image)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (newImage !== image) handleChange(newImage)
  }, [newImage])

  const { mutate: upload, isPending } = useMutation({
    mutationFn: ImgBBService.upload,
    onSuccess: ({ data }) => setNewImage(data.data.url),
    onError: error => toast.error(catchErrorMessage(error))
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false)

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const allowedFileTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp'
      ]

      if (!allowedFileTypes.includes(file.type)) return setError(true)

      upload(file)
    }
  }

  return (
    <div className={styles.field}>
      <input
        type='file'
        accept='.jpg, .jpeg, .png, .gif, .webp'
        onChange={event => handleImageChange(event)}
      />
      {isPending ? (
        <div className={styles.image}>
          <Loader variant='dark' />
        </div>
      ) : error ? (
        <Text
          located='page'
          size='small'
          weight={700}
          color='secondary'
          tKey='Admin.field.image.error'
        />
      ) : (
        image && (
          <div className={styles.image}>
            <Image src={image} alt='' fill draggable={false} quality={100} />
          </div>
        )
      )}
    </div>
  )
}
