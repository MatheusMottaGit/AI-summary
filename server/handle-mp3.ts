import ffmpegStatic from 'ffmpeg-static'
import ffmpeg from 'fluent-ffmpeg'

export const handleMP3 = () => new Promise<void>((resolve, reject) => {
  ffmpeg.setFfmpegPath(ffmpegStatic as string)

  ffmpeg()
    .input('./server/audio.mp4')
    .outputOptions('-ab', '64k')
    .saveToFile('./server/audio.mp3')
    .on('end', () => {
      console.log('[CONVERSION_FINISHED]')
      resolve()
    })
    .on('error', (error) => {
      console.log(error)
      reject()
    })
})