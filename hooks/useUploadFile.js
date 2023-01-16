import {
  StorageError,
  StorageReference,
  uploadBytesResumable,
  UploadMetadata,
  UploadResult,
  UploadTaskSnapshot
} from 'firebase/storage'
import { useCallback, useState } from 'react'

export default () => {
  const [imageError, setImageError] = useState()
  const [uploading, setUploading] = useState(false)
  const [snapshot, setSnapshot] = useState()

  const uploadFile = useCallback(
    async (
      storageRef,
      data,
      metadata
    ) => {
      return new Promise((resolve, reject) => {
        setUploading(true)
        setImageError(undefined)
        const uploadTask = uploadBytesResumable(storageRef, data, metadata)
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            setSnapshot(snapshot)
          },
          (imageError) => {
            setUploading(false)
            setImageError(imageError)
            resolve(undefined)
          },
          () => {
            setUploading(false)
            setSnapshot(undefined)
            resolve({
              metadata: uploadTask.snapshot.metadata,
              ref: uploadTask.snapshot.ref
            })
          }
        )
      })
    },
    []
  )

  return [uploadFile, uploading, snapshot, imageError]
}
