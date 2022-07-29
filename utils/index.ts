export const isExternalURL = (url: string) => /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi.test(url)

export const cleanVideoTitle = (rawTitle: string) => rawTitle.replace(/(\d{1,2}\/){2}\d{4}\s?/, '')
