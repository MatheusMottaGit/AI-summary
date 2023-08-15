export function formatVideoURL(url: string) {  //youtube video URL format = https://www.youtube.com/watch?v=mvOYE3nTxvQ

  // replace https://www.youtube.com/watch to https://www.youtube.com/embed
  const [mainURL, videoID] = url.split('?v=')
  const embedURL = mainURL.replace('watch', 'embed')

  return {
    embedURL: embedURL + '/' + videoID
  }
}