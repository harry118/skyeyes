const sendDataByImage = (url: string, data: any): void => {
  let image = new Image();
  image.src = url + `/${encodeURIComponent(JSON.stringify(data))}`
  // delete image
}

const sendDataByBeacon = (url: string, data: any) => {
  if (!navigator?.sendBeacon) {
    throw "current env don't support sendBeacon!"
  }
  navigator.sendBeacon(url, encodeURIComponent(JSON.stringify(data)))
}

const sendDataByFetch = () => {

}

export {
  sendDataByImage,
  sendDataByBeacon,
  sendDataByFetch
}
