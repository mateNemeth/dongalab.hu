export interface ImageFormatProps {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: null | unknown
  url: string
}

export interface ImageProps {
  id: number
  name: string
  alternativeText?: string
  caption?: string
  width: number
  height: number
  formats: {
    thumbnail: ImageFormatProps
    large: ImageFormatProps
    medium: ImageFormatProps
    small: ImageFormatProps
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  provider_metadata: null | unknown
}
export interface GlobalProps {
  logo: ImageProps
}
