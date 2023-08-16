export function formatVideoURL(url: string) { // https://www.youtube.com/watch?v=4lJzm8Xsu3M&t=299s

  const [mainURL, incompleteVideoID] = url.split("?v=")
  const [videoID, videoRunTime] = incompleteVideoID.split("&")

  const formatedURL = mainURL.replace('watch', 'embed')

  return {
    embedURL: formatedURL.concat(`/${videoID}`),
    videoID
  }
}
