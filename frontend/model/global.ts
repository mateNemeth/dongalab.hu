import { Section } from './sections'

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

export interface NavLinkProps {
  id: number
  label: string
  section: Section
}

export interface NavbarProps {
  navlinks: NavLinkProps[]
  logo: ImageProps
}

export interface GlobalProps {
  navbar: NavbarProps
}
