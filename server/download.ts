import ytdl from "ytdl-core"
import fs from 'fs'

export const downloader = (videoID: string) => new Promise<void>((resolve, reject) => {
  const videoURL = `https://www.youtube.com/embed/${videoID}`

  console.log('[DOWNLOAD_STARTED]')

  ytdl(videoURL, {
    quality: 'lowestaudio',
    filter: 'audioonly'
  })
    .on('end', () => {
      console.log('[SUCESSFULL_DOWNLOAD]')
      resolve()
    })
    .on('error', () => {
      console.log('[DOWNLOAD_FAILED]')
      reject()
    })
    .pipe(fs.createWriteStream('audio.mp4'))
})