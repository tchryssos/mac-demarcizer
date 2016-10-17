export function urlSubmit(url){
  if (url.includes('youtu.be')){
    let newEmbedLink="https://www.youtube.com/embed/"+url.split("/")[3]
    return {
      type: 'SET_URL',
      payload: newEmbedLink
    }
  } else if (url.includes('youtube')){
    let splitUrl=url.split("/")[3]
    let videoId=splitUrl.split("=")[1]
    let newEmbedLink="https://www.youtube.com/embed/"+videoId
    return {
      type: 'SET_URL',
      payload: newEmbedLink
    }
  }
}
