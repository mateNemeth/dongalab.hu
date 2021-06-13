import { ImageProps } from './global'

export interface HeroElement {
  id: number
  text: string
  logo: ImageProps
  background: ImageProps
  __component: 'elements.hero'
}

export type SectionContent = HeroElement

export interface Section {
  id: number
  created_at: string
  published_at: string
  updated_at: string
  name: string
  sectionId: string
  order: number
  content: SectionContent[]
}
