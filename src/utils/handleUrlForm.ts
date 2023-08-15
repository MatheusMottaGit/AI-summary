// import { FormEvent } from "react"
// import { formatVideoURL } from "./urlFormater"
// import { fetcher } from "@/hooks/useFetch"

// export async function handleSendURL(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault()

//   const formData = new FormData(event.currentTarget)
//   const inputURL = String(formData.get('url'))

//   const { videoURL, videoID } = formatVideoURL(inputURL)

//   await fetcher(videoID)
// }